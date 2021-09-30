import React from 'react';
import Metatags from '../../components/PageChange/Metatags';
import CalendarHeader from '../../components/Headers/ShoppingListHeader';
import { Container, Card, CardBody, Modal, ModalBody } from 'reactstrap';
import Default from '../../layouts/Default';
import AuthCheck from '../../components/auth/AuthCheck';
import { firestore, auth } from '../../lib/firebase';
import firebase from 'firebase';
import AddIngredients from '../../components/Inputs/AddIngredients'
import { useDocumentData } from 'react-firebase-hooks/firestore';
import toast from 'react-hot-toast';
function shoppingList() {
	return (
		<AuthCheck>
			<List />
		</AuthCheck>
	);
}
shoppingList.layout = Default;
function List() {
	
	const userRef = firestore.collection('users').doc(auth.currentUser.uid);
	const [ userData ] = useDocumentData(userRef);
	const deleteIngredient = (ingredient)=> {
		const index = userData.shoppingList.indexOf(ingredient)
		userData.shoppingList.splice(index, 1)
		console.log(userData.shoppingList)
		
		userRef.update({shoppingList:userData.shoppingList})
		
	}
	const addIngredient = (ingredient) => {
		console.log(ingredient)
		userData.shoppingList.push({name:ingredient.name, id: ingredient.id, url: 'https://spoonacular.com/cdn/ingredients_100x100/' + ingredient.image})
		userRef.update({shoppingList:userData.shoppingList})
	}
	const updateIngredients = (updatedIngredient, ingredient) => {
		const index = userData.shoppingList.indexOf(ingredient)
		userData.shoppingList[index] = updatedIngredient
		userRef.update({shoppingList:userData.shoppingList})
		console.log(userData.shoppingList)
		console.log(updatedIngredient, ingredient)
	}
	const sendShoppingList = (phoneNumber) => {
		userRef.update({phoneNumber: phoneNumber})
		const sendText = firebase.functions().httpsCallable('sendText');
		sendText({ message: userData.shoppingList });
		toast.success('Whatsapp Nachricht gesendet');
		console.log()
	};
	return (
		<div>
			<Metatags title="Mein Kalendar" description="Plane deine Ernährung so wie du willst" />
			{userData && <>
			<CalendarHeader name="Kalendar" btnName="Senden" phoneNumber2={userData.phoneNumber} btnMethod={sendShoppingList} />
			<Container>
				{' '}
				<Card style={{ position: 'relative', bottom: '4.5rem' }}>
					<CardBody>
						
						<>
						<AddIngredients updateIngredients={updateIngredients}addIngredient={addIngredient}deleteIngredient={deleteIngredient}ingredients={userData.shoppingList}/>
						</>
					</CardBody>
				</Card>
			</Container></>}
		</div>
	);
}

export default shoppingList;
