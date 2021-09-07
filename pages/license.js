import React from 'react';
import Default from '../layouts/Default.js';
import { Container, Card, CardBody } from 'reactstrap';
import Metatags from '../components/PageChange/Metatags';
import ContactHeader from '../components/Headers/ContactHeader';

function license() {
	return (
		<div>
			<Metatags title="Lizenz" description="Die neusten Änderungen" />
			<ContactHeader
				name="Lizenz"
				parentName="Home"
				btnName="Kontakt"
				link="/contact"
				style={{ position: 'center' }}
			/>
			<Container justify="center">
				<Card style={{ position: 'relative', bottom: '4.5rem' }}>
					<CardBody>
						<p>AGB</p>
					</CardBody>
				</Card>
			</Container>
		</div>
	);
}
license.layout = Default;
export default license;
