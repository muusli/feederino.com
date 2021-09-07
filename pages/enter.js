import React from 'react';
import Default from '../layouts/Default.js';
import { Container, Card, CardBody } from 'reactstrap';
import Metatags from '../components/PageChange/Metatags';
import ContactHeader from '../components/Headers/ContactHeader';
import GoogleAuth from '../components/auth/GoogleAuth';
function license() {
	return (
		<div>
			<Metatags title="Lizenz" description="Die neusten Änderungen" />
			<ContactHeader
				name="Lizenz"
				parentName="Home"
				btnName="Rezeptfeed"
				link="/recipes"
				style={{ position: 'center' }}
			/>
			<Container justify="center">
				<Card style={{ position: 'relative', bottom: '4.5rem' }}>
					<CardBody>
						<GoogleAuth />
					</CardBody>
				</Card>
			</Container>
		</div>
	);
}
license.layout = Default;
export default license;
