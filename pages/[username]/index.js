import { getUserWithUsername, recipeToJSON } from '../../lib/firebase';
import UserProfile from '../../components/auth/UserProfile';
import ProfileHeader from '../../components/Headers/ProfileHeader';
import RecipeFeed from '../../components/recipes/RecipeFeed';
import Default from '../../layouts/Default.js';
import { Row, Container, Card, CardBody } from 'reactstrap';
export async function getServerSideProps({ query }) {
	const { username } = query;

	const userDoc = await getUserWithUsername(username);

	// JSON serializable data
	let user = null;
	let posts = null;

	if (userDoc) {
		user = userDoc.data();
		const postsQuery = userDoc.ref
			.collection('recipes')
			.where('published', '==', true)
			.orderBy('createdAt', 'desc')
			.limit(5);
		posts = (await postsQuery.get()).docs.map(recipeToJSON);
	}

	return {
		props : { user, posts } // will be passed to the page component as props
	};
}

export default function UserProfilePage({ user, posts }) {
	return (
		<main>
			<ProfileHeader name={user.username} parentName="Home" style={{ position: 'relative' }} />
			<Container>
				<Card style={{ position: 'relative', bottom: '4.5rem' }}>
					<CardBody>
						<UserProfile user={user} />
						<Row>
							<RecipeFeed posts={posts} />
						</Row>
					</CardBody>
				</Card>
			</Container>
		</main>
	);
}
UserProfilePage.layout = Default;
