
import RecipeCollection from '../../../components/recipes/RecipeCollection';
import Default from '../../../layouts/Default.js';
import { Container, Card, CardBody } from 'reactstrap';
import RecipesHeader from '../../../components/Headers/RecipesHeader';
import { firestore, auth,} from '../../../lib/firebase';
import AuthCheck from '../../../components/auth/AuthCheck';
import { useCollection } from 'react-firebase-hooks/firestore';

export default function MyRecipesPage(props) {
	return (
	  <main>
		  <RecipesHeader name="Meine Rezepte" parentName="Rezepte" style={{ position: 'relative' }} />
		  <Container>
			<Card style={{ position: 'relative', bottom: '4.5rem' }}>
				<CardBody>
					<AuthCheck>
						<OnlineRecipeList/>
		  				<OfflineRecipeList />
		 			</AuthCheck>
				</CardBody>
			</Card>
		</Container>
	  </main>
	);
  }
function OnlineRecipeList() {
	const onlineRef = firestore.collection('users').doc(auth.currentUser.uid).collection('recipes');
	const query = onlineRef.where('published', '==', true).orderBy('createdAt', 'desc');
	const [querySnapshot] = useCollection(query);
  	const onlineRecipes = querySnapshot?.docs.map((doc) => doc.data());
	return (
		<main>
		<h1>Online</h1>
			<RecipeCollection recipes={onlineRecipes} />			
		</main>
	);
}
function OfflineRecipeList() {
	const offlineRef = firestore.collection('users').doc(auth.currentUser.uid).collection('recipes')
	const query = offlineRef.where('published', '==', false).orderBy('createdAt', 'desc');
	
	const [querySnapshot] = useCollection(query);
  	const offlineRecipes = querySnapshot?.docs.map((doc) => doc.data());
	return (
		<main><h2>Offline</h2>
			<RecipeCollection recipes={offlineRecipes} />
		</main>
	);
}
MyRecipesPage.layout = Default;

  