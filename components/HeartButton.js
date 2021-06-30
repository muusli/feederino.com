import { firestore, auth, increment } from '../lib/firebase';
import { useDocument } from 'react-firebase-hooks/firestore';
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import {Button} from 'reactstrap'
// Allows user to heart or like a post
export default function Heart({ postRef ,recipe}) {
  // Listen to heart document for currently logged in user

  const heartRef = postRef.collection('hearts').doc(auth.currentUser.uid);
  const [heartDoc] = useDocument(heartRef);
const favoriteRef = firestore.collection('users').doc(auth.currentUser.uid).collection('favorites').doc(recipe.slug)
  // Create a user-to-post relationship
  const addHeart = async () => {
    const uid = auth.currentUser.uid;
    const batch = firestore.batch();
    batch.set(favoriteRef, {slug:recipe.slug,author:recipe.username,
    title:recipe.title,image:recipe.image, duration: recipe.duration
  })
    batch.update(postRef, { heartCount: increment(1) });
    batch.set(heartRef, { uid });

    await batch.commit();
  };

  // Remove a user-to-post relationship
  const removeHeart = async () => {
    const batch = firestore.batch();

    batch.update(postRef, { heartCount: increment(-1) });
    batch.delete(heartRef);
batch.delete(favoriteRef)
    await batch.commit();
  };

  return heartDoc?.exists ? (
    <Button
                  className="btn-neutral"
                  color="default"
                  // className="like active"
                  onClick={removeHeart}

                  // onClick={(e) => e.preventDefault()}
                  size="sm"
                >
    
                        <i className="fas fa-heart text-danger" />
                        {/* <span className="text-muted">{recipe.heartCount || 0}</span> */}
                      </Button>
  ) : (
    <Button
                  className="btn-neutral"
                  color="default"
                  // className="like active"
                  onClick={addHeart}

                  // onClick={(e) => e.preventDefault()}
                  size="sm"
                >
    
                        <i className="far fa-heart  text-danger" />
                        {/* <span className="text-muted">{recipe.heartCount || 0}</span> */}
                      </Button>
  );

}

