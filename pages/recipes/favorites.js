
import RecipeCollection from '../../components/RecipeCollection';
import Default from '../../layouts/Default.js';
import { Row, Container, Card, CardBody } from 'reactstrap';
import RecipesHeader from '../../components/Headers/RecipesHeader';
import { firestore, auth} from '../../lib/firebase';
import AuthCheck from '../../components/AuthCheck';
import { useCollection } from 'react-firebase-hooks/firestore';

export default function MyRecipesPage(props) {
	return (
	  <main>
		<AuthCheck>
		  <RecipeList />
		</AuthCheck>
	  </main>
	);
  }
function RecipeList() {
	const ref = firestore.collection('users').doc(auth.currentUser.uid).collection('favorites');
	const query = ref;
	const [querySnapshot] = useCollection(query);
  
	const recipes = querySnapshot?.docs.map((doc) => doc.data());
	console.log(recipes)
	return (
		<main><RecipesHeader name="Lieblingsrezepte" parentName="Rezepte" style={{ position: 'relative' }} />
		<Container>
			<Card style={{ position: 'relative', bottom: '4.5rem' }}>
				<CardBody>
					<Row><RecipeCollection recipes={recipes} />
						</Row>
					</CardBody>
				</Card>
			</Container>
		</main>
	);
}
MyRecipesPage.layout = Default;

  