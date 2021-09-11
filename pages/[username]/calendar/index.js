import React from 'react';
import CalendarView from 'components/mealplanner/Calendar';
import ShoppingList from 'components/mealplanner/ShoppingList';
import Default from '../../../layouts/Default.js';
import { Row, Card, Container, CardBody, Col } from 'reactstrap';
import Metatags from '../../../components/PageChange/Metatags.js';
import CalendarHeader from '../../../components/Headers/CalendarHeader';
import { auth, firestore, mealToJSON, postToJSON, getUserWithUsername } from '../../../lib/firebase';
export async function getServerSideProps({ params }) {
	const { username } = params;

	const userDoc = await getUserWithUsername(username);
	let meals;

	if (userDoc) {
		const calendarRef = userDoc.ref.collection('calendar');
		if (!calendarRef) {
			meals = null;
		}
		else {
			meals = (await calendarRef.get()).docs.map(postToJSON);
		}
	}
	return {
		props : { meals, username } // will be passed to the page component as props
	};
}
function mealplanner({ meals, username }) {
	return (
		<div>
			<Metatags title="Mein Kalendar" description="Plane deine Ernährung so wie du willst" />
			<CalendarHeader name="Kalendar" />
			<Container justify="center">
				<Card style={{ position: 'relative', bottom: '4.5rem' }}>
					<CardBody>
						<Row>
							<Col md="9">
								<CalendarView meals={meals} username={username} />
							</Col>
							<Col md="3">
								<h3>Einkaufsliste</h3>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Container>
		</div>
	);
}
mealplanner.layout = Default;
export default mealplanner;
