import PostFeed from '../../components/RecipeFeed';
import Metatags from '../../components/Metatags';
import Default from '../../layouts/Default.js';
import { firestore, fromMillis, recipeToJSON } from '../../lib/firebase';
import RecipesHeader from '../../components/Headers/NewsHeader';
import { useState } from 'react';
import { Row, Container, Card, CardBody, CardHeader, Button, Col } from 'reactstrap';
// Max recipe to query per page
const LIMIT = 10;

export async function getServerSideProps(context) {
	const recipeQuery = firestore
		.collectionGroup('recipes')
		.where('published', '==', true)
		.orderBy('createdAt', 'desc')
		.limit(LIMIT);

	const recipes = (await recipeQuery.get()).docs.map(recipeToJSON);

	return {
		props : { recipes } // will be passed to the page component as props
	};
}

export default function Home(props) {
	const [ recipes, setRecipes ] = useState(props.recipes);
	const [ loading, setLoading ] = useState(false);

	const [ recipesEnd, setRecipesEnd ] = useState(false);

	// Get next page in pagination query
	const getMorePosts = async () => {
		setLoading(true);
		const last = recipes[recipes.length - 1];

		const cursor = typeof last.createdAt === 'number' ? fromMillis(last.createdAt) : last.createdAt;

		const query = firestore
			.collectionGroup('recipes')
			.where('published', '==', true)
			.orderBy('createdAt', 'desc')
			.startAfter(cursor)
			.limit(LIMIT);

		const newRecipes = (await query.get()).docs.map((doc) => doc.data());

		setRecipes(recipes.concat(newRecipes));
		setLoading(false);

		if (newRecipes.length < LIMIT) {
			setRecipesEnd(true);
		}
	};

	return (
		<main>
			<Metatags title="Home Page" description="Get the latest recipe on our site" />
			<RecipesHeader name="Rezepte" parentName="Home" style={{ position: 'center' }} />
			<Container justify="center">
				<Card style={{ position: 'relative', bottom: '4.5rem' }}>
					<CardBody>
						<Row className="justify-content-md-center">
							<PostFeed posts={recipes} />
						</Row>
						<Row className="justify-content-md-center" style={{ position: 'relative', bottom: '4.5rem' }}>
							<Col md="2" className="justify-content-md-center">
								{!loading &&
								!recipesEnd && (
									<Button
										justify-self="center"
										className="justify-content-md-center"
										onClick={getMorePosts}
									>
										Load more
									</Button>
								)}
								{recipesEnd && 'Du hast das Ende erreicht!'}
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Container>
		</main>
	);
}
Home.layout = Default;
