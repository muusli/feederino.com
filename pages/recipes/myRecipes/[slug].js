
import Default from '../../../layouts/Default'
import EditRecipe from '../../../components/recipes/EditRecipe2'
import EditHeader from '../../../components/Headers/EditHeader'
import { Row, Container, Card, CardBody,Col } from 'reactstrap';
import AuthCheck from '../../../components/auth/AuthCheck';
import { firestore, auth, } from '../../../lib/firebase';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDocumentData } from 'react-firebase-hooks/firestore';

export default function AdminPostEdit() {
  return (
    <AuthCheck>
        <PostManager />
    </AuthCheck>
  );
}

AdminPostEdit.layout = Default
function PostManager() {
  const [preview, setPreview] = useState(false);
  const router = useRouter();
  const { slug } = router.query;
  const recipeRef = firestore.collection('users').doc(auth.currentUser.uid).collection('recipes').doc(slug);
  const [recipe] = useDocumentData(recipeRef);
  return (
    <main >
      {recipe && (
        <>
        <EditHeader name={recipe.title} buttonName="Live Ansicht" style={{ position: 'relative' }} href={`/${recipe.username}/${recipe.slug}`} parentName="Rezepte"/>
				<Container justify="center">
          <Card style={{ position: 'relative', bottom: '4.5rem' }}>
            <CardBody>
					    <Row> 
                <Col md="12"> 
                  <EditRecipe recipeRef={recipeRef} preview={preview} defaultValues={recipe}></EditRecipe>
                </Col>
              </Row> 
            </CardBody>
          </Card>
        </Container>
        </>
      )}
    </main>
  );
}
