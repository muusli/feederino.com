import React from 'react';
import Default from '../layouts/Default.js';
import { Container, Card, CardBody, Row, Button, Col } from 'reactstrap';
import Metatags from '../components/PageChange/Metatags';
import ContactHeader from '../components/Headers/ContactHeader';
import AboutUsHeader from '../components/Headers/AboutUsHeader';
import Feature1 from '../components/Feature1.js';

function aboutus() {
	return (
		<div>
			<Metatags title="About Us" description="Die neusten Änderungen" />
			<ContactHeader
				name="About Us"
				parentName="Home"
				btnName="Kontakt"
				link="/contact"
				style={{ position: 'center' }}
			/>
			<Container justify="center">
				<Card style={{ position: 'relative', bottom: '4.5rem' }}>
					<CardBody>
						{' '}
						<Container>
							<Row>
								<Col>
									<AboutUsHeader />
								</Col>
							</Row>
						</Container>
						<section className="py-7">
							<Container>
								<Row>
									<Col>
										<Feature1 />
									</Col>
								</Row>
							</Container>
						</section>
						<section className="py-7">
							<Container>
								<Row className="row-grid justify-content-center">
									<Col className="text-center" lg="8">
										<h2 className="display-3">
											Du hast Lust dich einzubringen?{' '}
											<span className="text-success">Du wirst gebraucht!</span>
										</h2>
										<p className="lead">
											Egal ob du ein Rezept hochlädst. Die Autoren unterstützt. Feedback hast.
											Oder aktiv das Projekt mitgestalten willst. Jeder Beitrag zählt. Kontaktiere
											uns gerne, wir freuen uns über jede Nachricht.
										</p>
										<div className="btn-wrapper">
											<Button
												className="btn-neutral mb-3 mb-sm-0"
												color="default"
												href="https://www.creative-tim.com/product/nextjs-argon-dashboard?ref=njsadp-index-page"
											>
												<span className="btn-inner--text">Unterstütze uns auf Patreon</span>
											</Button>
											<Button className="btn-icon mb-3 mb-sm-0" color="info" href="/contact">
												<span className="btn-inner--icon">
													<i className="ni ni-basket" />
												</span>
												<span className="btn-inner--text">Kontaktiere uns</span>
											</Button>
										</div>
									</Col>
								</Row>
							</Container>
						</section>
					</CardBody>
				</Card>
			</Container>
		</div>
	);
}
aboutus.layout = Default;
export default aboutus;
