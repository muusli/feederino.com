import React from 'react';
import Default from '../layouts/Default.js';
import { Container, Card, CardBody } from 'reactstrap';
import Metatags from '../components/PageChange/Metatags';
import ContactHeader from '../components/Headers/ContactHeader';

function changelog() {
	return (
		<div>
			<Metatags title="Changelog" description="Die neusten Änderungen" />
			<ContactHeader
				name="Changelog"
				parentName="Home"
				btnName="Feedback geben"
				link="/contact"
				style={{ position: 'center' }}
			/>
			<Container justify="center">
				<Card style={{ position: 'relative', bottom: '4.5rem' }}>
					<CardBody>
						<p>Add Mealplanner</p>
						<p>Add Search Function</p>
						<p>Add Shoppinglist</p>
						<p>Add Send ShoppingList</p>
						<p>Smaller Bugfixes</p>
						<p>EditRecipe, Ingredients are now deletable</p>
						<p>Add Login/Register Pages</p>
						<p>Change AboutUs layout</p>
						<p> Add Email Login</p>
						<p> Kommentarfunktion hinzugefügt</p>
						<p>Add Aboutus template</p>
						<p>Add ContactUs</p>
						<p>Add Index Page template</p>
						<p>Placeholder Image hinzugefügt für Rezeptupload</p>
						<p>Bild Reupload Bugfix</p>
						<p>Author wird im Feed erwähnt</p>
						<p>Changelog hinzugefügt</p>
					</CardBody>
				</Card>
			</Container>
		</div>
	);
}
changelog.layout = Default;
export default changelog;
