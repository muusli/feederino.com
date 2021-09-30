import React from 'react';
import CalendarView from 'components/mealplanner/Calendar';
import ShoppingList from 'components/mealplanner/ShoppingList';
import Default from '../../../layouts/Default.js';
import { Row, Card, Container, CardBody, Col } from 'reactstrap';
import Metatags from '../../../components/PageChange/Metatags.js';
import CalendarHeader from '../../../components/Headers/CalendarHeader';
import { auth, firestore, mealToJSON, postToJSON, getUserWithUsername } from '../../../lib/firebase';
import { map } from 'lodash';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import AuthCheck from '../../../components/auth/AuthCheck.js';
import { useState } from 'react';
import router from 'next/router';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { UserContext } from '../../../lib/context';
// const { username } = useContext(UserContext);
export async function getServerSideProps({ params }) {
	const { username } = params;
	const userDoc = await getUserWithUsername(username);
	// const userData = useDocumentData(userDoc.ref);
	let meals;

	if (userDoc) {
		const calendarRef = userDoc.ref.collection('calendar');
		if (!calendarRef) {
			meals = null;
		}
		else {
			meals = (await calendarRef.get()).docs.map(postToJSON);
			// shopping = (await userDoc.get()).shoppingList;
		}
	}
	return {
		props : { meals, username } // will be passed to the page component as props
	};
}
function Calendar({ meals, username }) {
	return (
		<AuthCheck>
			<Mealplanner meals={meals} username={username} />
		</AuthCheck>
	);
}
Calendar.layout = Default;

function Mealplanner({ meals, username }) {
	const userRef = firestore.collection('users').doc(auth.currentUser.uid);
	const [ userData ] = useDocumentData(userRef);
	const [ shoppingList, setShoppingList ] = useState();

	const createShoppingList = async () => {
		if (userData) {
			let newShoppingList = userData.shoppingList || [];

			meals.map((meal) => meal.recipe.ingredients.map((ingredient) => newShoppingList.push(ingredient)));
			console.log(newShoppingList);
			setShoppingList(newShoppingList);

			if (userRef) {
				await userRef.update({ shoppingList: newShoppingList });

				toast.success('Zutaten zur Einkaufsliste hinzugefügt');
				router.push(`/${username}/shoppingList`);
			}
		}
	};
	return (
		<div>
			<Metatags title="Mein Kalendar" description="Plane deine Ernährung so wie du willst" />
			<CalendarHeader
				name="Kalendar"
				btnName="Zur Einkaufsliste hinzufügen"
				meals={meals}
				btnMethod={createShoppingList}
			/>
			<Container justify="center">
				{/* <Card style={{ position: 'relative', bottom: '4.5rem' }}>
					<CardBody>
						<Row>
							<Col md="12"> */}
				{meals && <CalendarView theme="dark" meals={meals} username={username} />}
				{/* </Col>
							{/* <Col md="3">
								<h3>Einkaufsliste</h3>
							</Col> */}
				{/*</Row>
					</CardBody>
				</Card> */}
			</Container>
		</div>
	);
}

export default Calendar;
