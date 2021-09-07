// import ReactDatetime from 'react-datetime';
// import TagsInput from 'components/TagsInput/TagsInput.js';
import RecipeContent from '../../components/recipes/RecipeContent';
import HeartButton from '../../components/Inputs/HeartButton';
import Metatags from '../../components/PageChange/Metatags';
import AuthCheck from '../../components/auth/AuthCheck'
import { UserContext } from '../../lib/context';
import { firestore, getUserWithUsername, postToJSON } from '../../lib/firebase';
import {
	Row,
	Col,
	Button,
	Container,
	Breadcrumb,
	BreadcrumbItem,
} from 'reactstrap';

import Default from '../../layouts/Default.js';

import { useDocumentData } from 'react-firebase-hooks/firestore';
import { useContext } from 'react';

export async function getStaticProps({ params }) {
	const { username, slug } = params;
	const userDoc = await getUserWithUsername(username);

	let post;
	let path;

	if (userDoc) {
		const postRef = userDoc.ref.collection('recipes').doc(slug);
		if(!postRef) {post = null 
		path = null} else {
		post = postToJSON(await postRef.get());
		
		path = postRef.path;
		}
	}
return {
	props      : { post, path },
	revalidate : 100

}}
export async function getStaticPaths() {
	// Improve my using Admin SDK to select empty docs
	const snapshot = await firestore.collectionGroup('recipes').get();

	const paths = snapshot.docs.map((doc) => {
		const { slug, username } = doc.data();
		return {
			params : { username, slug }
		};
	});

	return {
	
		paths,
		fallback : 'blocking'
	};
}

export default function Post(props) {
	const postRef = firestore.doc(props.path);
	const [ realtimePost ] = useDocumentData(postRef);

	const recipe = realtimePost || props.post;

	const { user: currentUser } = useContext(UserContext);
	return (
		<main>
			<Metatags title={recipe.title} description={recipe.title}/>
			<div className="header bg-dark pb-6">
        <Container>
          <div className="header-body">
            <Row className="align-items-center py-4">
              <Col lg="6" xs="7">
                <h6 className="h2 text-white d-inline-block mb-0">{recipe.title}</h6>{" "}
                <Breadcrumb
                  className="d-none d-md-inline-block ml-md-4"
                  listClassName="breadcrumb-links breadcrumb-dark"
                >
                  <BreadcrumbItem>
                    <a href="/recipes" onClick={(e) => e.preventDefault()}>
                      <i className="fas fa-home" />
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href={`/${recipe.username}`}>
                      {recipe.username}
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem aria-current="page" className="active">
                    {recipe.title}
                  </BreadcrumbItem>
                </Breadcrumb>
              </Col>
			  
              <Col className="text-right" lg="6" xs="5">
                {/* <AddRecipe></AddRecipe> */}{currentUser && ( 
				<AuthCheck><HeartButton recipe={recipe}postRef={postRef}></HeartButton>
				
				</AuthCheck>
				
			
        )} {currentUser?.uid === recipe.uid &&( 
			<Button
			 className="btn-neutral"
			 color="default"
			 href={`/recipes/myRecipes/${recipe.slug}`}
			 // onClick={(e) => e.preventDefault()}
			 size="sm"
		   >
			         <i class="far fa-edit"></i>

		   </Button>)
}
              </Col>
            </Row>

           
          </div>
        </Container>
      </div>
			<section>
				{/* <HeartButton postRef={postRef}></HeartButton> */}
				<RecipeContent recipe={recipe} recipeRef={postRef}/>
			</section>
		</main>
	);
}
Post.layout = Default;
