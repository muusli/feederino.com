import React from 'react';
import Default from '../layouts/Default.js';
import { UserContext } from '../lib/context';
import AuthCheck from '../components/auth/AuthCheck';
import {
	Container,
	Card,
	CardBody,
	FormGroup,
	Col,
	Row,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Form,
	Button,
	DropdownToggle,
	Badge,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown
} from 'reactstrap';
import { useContext } from 'react';
import Metatags from '../components/PageChange/Metatags';
import ContactHeader from '../components/Headers/ContactHeader';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { firestore, auth, serverTimestamp } from '../lib/firebase';
function contact() {
	const { username } = useContext(UserContext);
	const [ firstNameFocus, setFirstNameFocus ] = React.useState('');
	const [ lastNameFocus, setLastNameFocus ] = React.useState('');
	const [ emailFocus, setEmailFocus ] = React.useState('');
	const router = useRouter();
	const createPost = async (e) => {
		e.preventDefault();

		const uid = auth.currentUser.uid;

		const photoURL = auth.currentUser.photoURL;
		const ref = firestore.collection('users').doc(uid).collection('messages');

		// Tip: give all fields a default value here
		const data = {
			prename        : e.target.prename.value,
			name           : e.target.name.value,
			message        : e.target.message.value,
			email          : e.target.email.value,
			uid,
			username,
			authorPhotoURL : photoURL,
			createdAt      : serverTimestamp(),
			updatedAt      : serverTimestamp()
		};

		await ref
			.add(data)
			.then((docRef) => {
				router.push(`/recipes`);
				toast.success('Danke für deine Nachricht');
			})
			.catch((error) => {
				toast.error(error);
			});
	};
	return (
		<div>
			<Metatags title="Kontakt" description="So erreichst du uns" />
			<ContactHeader
				name="Kontakt"
				parentName="Home"
				btnName="Unterstütze uns"
				link=""
				style={{ position: 'center' }}
			/>
			<Container justify="center">
				<Card style={{ position: 'relative', bottom: '4.5rem' }}>
					<CardBody>
						<AuthCheck>
							{/* <Row>
							<Col md="4">Kontaktdaten</Col>
							<Col md="8">
								{' '}
								<FormGroup>
									<InputGroup>
										<Input
											aria-describedby="basic-addon1"
											aria-label="Username"
											placeholder="Username"
											type="text"
										/>
									</InputGroup>
								</FormGroup>
								<FormGroup>
									<InputGroup>
										<UncontrolledDropdown>
											<DropdownToggle
												caret
												color="secondary"
												id="dropdownMenuButton"
												type="button"
											>
												Anliegen
											</DropdownToggle>

											<DropdownMenu aria-labelledby="dropdownMenuButton">
												<DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
													Feedback
												</DropdownItem>

												<DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
													Bug
												</DropdownItem>

												<DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
													Vorschlag
												</DropdownItem>
												<DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
													Sonstiges
												</DropdownItem>
											</DropdownMenu>
										</UncontrolledDropdown>
									</InputGroup>
								</FormGroup>
								<FormGroup>
									<InputGroup>
										<Input aria-label="With textarea" type="textarea" />
									</InputGroup>
								</FormGroup>
							</Col>
						</Row>
						<p>Kontaktdaten </p>
						<p> EMAIL/Username Nachrichtkategorie Nachricht</p> */}

							{/* <div className="main"> */}
							<Row>
								<Col className="ml-auto mr-auto text-center " md="12">
									<Badge color="info">Feedback</Badge>
									<h1 className="title">
										Erzähl ein bisschen über <b>dich</b>
									</h1>
									<h4 className="desc">
										Egal ob Frage, Annekdote, Vorschlag, Bugreport oder Sonstiges, melde dich gerne.
									</h4>
								</Col>
							</Row>
							<Row>
								<Col className="mx-auto" md="8">
									<Card
									// className="bg-secondary p-3"
									// id="contact-form"
									// // method="post"
									// role="form"
									// tag="form"
									>
										<CardBody>
											<Form onSubmit={createPost}>
												<Row>
													<Col md="6">
														<FormGroup className={firstNameFocus}>
															<label>Vorname</label>
															<InputGroup className="input-group-alternative">
																<InputGroupAddon addonType="prepend">
																	<InputGroupText>
																		<i className="ni ni-circle-08" />
																	</InputGroupText>
																</InputGroupAddon>
																<Input
																	aria-label="Vorname"
																	placeholder="Vorname"
																	type="text"
																	name="prename"
																	onFocus={() => setFirstNameFocus('focused')}
																	onBlur={() => setFirstNameFocus('')}
																/>
															</InputGroup>
														</FormGroup>
													</Col>
													<Col md="6">
														<FormGroup className={lastNameFocus}>
															<label>Nachname</label>
															<InputGroup className="input-group-alternative">
																<InputGroupAddon addonType="prepend">
																	<InputGroupText>
																		<i className="ni ni-tag" />
																	</InputGroupText>
																</InputGroupAddon>
																<Input
																	aria-label="Nachname"
																	placeholder="Nachname"
																	type="text"
																	name="name"
																	onFocus={() => setLastNameFocus('focused')}
																	onBlur={() => setLastNameFocus('')}
																/>
															</InputGroup>
														</FormGroup>
													</Col>
												</Row>
												<FormGroup className={emailFocus}>
													<label>Email Adresse</label>
													<InputGroup className="input-group-alternative">
														<InputGroupAddon addonType="prepend">
															<InputGroupText>
																<i className="ni ni-email-83" />
															</InputGroupText>
														</InputGroupAddon>
														<Input
															placeholder="Email ..."
															type="text"
															name="email"
															onFocus={() => setEmailFocus('focused')}
															onBlur={() => setEmailFocus('')}
														/>
													</InputGroup>
												</FormGroup>

												<FormGroup>
													<label>Deine Nachricht</label>
													<Input
														className="form-control-alternative"
														id="message"
														name="message"
														rows="6"
														name="message"
														type="textarea"
													/>
												</FormGroup>
												<Row className="justify-content-end">
													<Col className="text-right" md="6">
														<Button color="primary" type="submit">
															Nachricht senden
														</Button>
													</Col>
												</Row>
											</Form>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</AuthCheck>
						{/* </div> */}
					</CardBody>
				</Card>
			</Container>
		</div>
	);
}
contact.layout = Default;
export default contact;
