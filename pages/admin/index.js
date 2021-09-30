import RecipeFeed from '../../components/admin/Messages';
import Metatags from '../../components/PageChange/Metatags';
import Default from '../../layouts/Default.js';
import { firestore, fromMillis, recipeToJSON } from '../../lib/firebase';
import NewsHeader from '../../components/Headers/NewsHeader';
import { useState } from 'react';
import { Row, Container, Card, CardBody, CardHeader, Button, Col } from 'reactstrap';
// Max recipe to query per page
const LIMIT = 10;

export async function getServerSideProps(context) {
	const messageQuery = firestore
		.collectionGroup('messages')
		.where('status', '==', 'unsolved')
		.orderBy('createdAt', 'desc')
		.limit(LIMIT);

	const messages = (await messageQuery.get()).docs.map(recipeToJSON);

	return {
		props : { messages } // will be passed to the page component as props
	};
}

export default function Home(props) {
	const [ messages, setMessages ] = useState(props.messages);
	const [ loading, setLoading ] = useState(false);

	const [ messagesEnd, setMessagesEnd ] = useState(false);

	// Get next page in pagination query
	const getMorePosts = async () => {
		setLoading(true);
		const last = messages[messages.length - 1];

		const cursor = typeof last.createdAt === 'number' ? fromMillis(last.createdAt) : last.createdAt;

		const query = firestore
			.collectionGroup('messages')
			.where('status', '==', 'unsolved')
			.orderBy('createdAt', 'desc')
			.startAfter(cursor)
			.limit(LIMIT);

		const newMessages = (await query.get()).docs.map((doc) => doc.data());

		setRecipes(messages.concat(newMessages));
		setLoading(false);

		if (newRecipes.length < LIMIT) {
			setMessagesEnd(true);
		}
	};

	return (
		<main>
			<Metatags title="Feed" description="Get the latest message on our site" />
			<NewsHeader name="Rezepte" parentName="Home" style={{ position: 'center' }} />
			<Container justify="center">
				<Card style={{ position: 'relative', bottom: '4.5rem' }}>
					<CardBody>
						<Row className="justify-content-md-center">
							<RecipeFeed posts={messages} />
						</Row>
						<Row className="justify-content-md-center">
							<Col md="2" className="justify-content-md-center">
								{!loading &&
								!messagesEnd && (
									<Button
										justify-self="center"
										className="justify-content-md-center"
										onClick={getMorePosts}
									>
										Mehr laden
									</Button>
								)}
								{messagesEnd && 'Du hast das Ende erreicht!'}
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Container>
		</main>
	);
}
Home.layout = Default;
