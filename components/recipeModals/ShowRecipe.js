import React from 'react';
import ReactDatetime from 'react-datetime';
import TagsInput from 'components/TagsInput/TagsInput.js';
import {
	CardTitle,
	CardImg,
	Card,
	Row,
	Col,
	CardBody,
	FormGroup,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Button,
	Modal,
	CardText,
	Container,
	ModalBody,
	ModalFooter,
	DropdownToggle,
	DropdownMenu,
	UncontrolledCarousel,
	DropdownItem,
	UncontrolledDropdown,
	ListGroup,
	ListGroupItem,
	ModalHeader,
	Media,
	Label,
	UncontrolledTooltip
} from 'reactstrap';
import axios from 'axios';
function showRecipe(props) {
	const [ recipeOpen, setRecipeOpen ] = React.useState(false);
	const items = [
		{
			src     :
				'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
			altText : 'Slide 1',
			caption : '',
			header  : '',
			key     : '1'
		},
		{
			src     :
				'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
			altText : 'Slide 2',
			caption : '',
			header  : '',
			key     : '2'
		},
		{
			src     :
				'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
			altText : 'Slide 3',
			caption : '',
			header  : '',
			key     : '3'
		}
	];
	const [ tagsInput, setTagsinput ] = React.useState([ 'Bucharest', 'Cluj', 'Iasi', 'Timisoara', 'Piatra Neamt' ]);
	const addMeal = (event) => {
		event.preventDefault();
		let meal = {
			title : 'Some Stuff',
			start : event.target.start.value
		};

		axios.post('http://localhost:5000/meal/add', meal).then((res) => console.log(res.data));
	};

	return (
		<div>
			<Col md="3">
				<Card onClick={() => setRecipeOpen(!recipeOpen)}>
					<CardImg alt="..." src={require('assets/img/theme/img-1-1000x900.jpg')} top />

					<CardBody>
						<CardTitle className="h2 mb-0">Rezepttitel</CardTitle>
						<small className="text-muted">25min</small>
					</CardBody>
				</Card>
			</Col>
			<Modal className="modal-lg" toggle={() => setRecipeOpen(!recipeOpen)} isOpen={recipeOpen}>
				<ModalBody>
					<Row>
						<Col md="6" className="mx-auto">
							<UncontrolledCarousel items={items} />
						</Col>
						<Col md="6" className="mx-auto">
							<button
								aria-label="Close"
								className=" close"
								type="button"
								onClick={() => setRecipeOpen(!recipeOpen)}
							>
								<span aria-hidden={true}>×</span>
							</button>
							<h5 className=" modal-title" id="exampleModalLabel">
								Rezepttitel
							</h5>
							<hr />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptas aspernatur
								mollitia, fugit nobis ex. Quos eaque esse atque, modi sapiente iusto quis quae cumque
								repellendus perferendis doloremque at labore.
							</p>
							<hr />
							<Row>
								<Col md="4">25min</Col>
								<Col md="4">20min</Col>
								<Col md="4">Leicht</Col>
							</Row>
							<hr />
							<Form onSubmit={addMeal}>
								<FormGroup className="row">
									<Col md="5">
										<Button type="submit" block size="md" color="success">
											Zum Plan hinzufügen
										</Button>
									</Col>
									<Col md="7">
										{/* <Input
											// value={today}
											id="example-datetime-local-input"
											name="start"
											type="datetime-local"
										/> */}
										<ReactDatetime
											inputProps={{
												name        : 'start',
												placeholder : 'Date Picker Here'
											}}
											timeFormat={false}
											initialValue={new Date()}
										/>
									</Col>
								</FormGroup>
							</Form>
						</Col>
					</Row>
					<hr />
					<Row>
						<Col md="8">
							<label className="form-control-label" htmlFor="Schritt 1">
								Schritt 1
							</label>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam adipisci a perferendis
								est recusandae amet quas officiis? Soluta odio esse modi libero, consectetur vel
								accusantium, quas, officiis praesentium nihil assumenda.
							</p>
							<label className="form-control-label">Schritt 2</label>{' '}
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum cumque, ab unde quia
								libero distinctio dolor doloremque dolorum fugit aut aspernatur incidunt maxime facilis
								quaerat rerum officia harum commodi nihil.
							</p>
							<label className="form-control-label">Schritt 3</label>
							<p>
								Lorem, ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa suscipit
								repellat id voluptatum fugit est recusandae tenetur vel tempora libero. Quaerat unde
								laboriosam voluptatum consequuntur, soluta sed fugit quis
							</p>
							<label className="form-control-label">Schritt 4</label>{' '}
							<p>
								Lorem, ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus
								reprehenderit error optio placeat harum, sint, velit quam saepe aspernatur a obcaecati
								laborum praesentium sequi at odio molestias amet quasi!
							</p>
						</Col>
						<Col md="4">
							<Card>
								<CardBody className="p-0">
									<ListGroup data-toggle="checklist" flush>
										<ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
											<div className="checklist-item checklist-item-success checklist-item-checked">
												<div className="checklist-info">
													<h5 className="checklist-title mb-0">Zwiebel</h5>
													<small>50 g</small>
												</div>
											</div>
										</ListGroupItem>
										<ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
											<div className="checklist-item checklist-item-warning">
												<div className="checklist-info">
													<h5 className="checklist-title mb-0">Apfel</h5>
													<small>350 g</small>
												</div>
											</div>
										</ListGroupItem>
										<ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
											<div className="checklist-item checklist-item-info">
												<div className="checklist-info">
													<h5 className="checklist-title mb-0">Leberbrot</h5>
													<small>2 Stück</small>
												</div>
											</div>
										</ListGroupItem>
										<ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
											<div className="checklist-item checklist-item-danger checklist-item-checked">
												<div className="checklist-info">
													<h5 className="checklist-title mb-0">Kräuter</h5>
													<small>1 TL</small>
												</div>
											</div>
										</ListGroupItem>
									</ListGroup>
								</CardBody>
							</Card>
							<TagsInput
								onlyUnique
								className="bootstrap-tagsinput"
								onChange={(value) => setTagsinput(value)}
								value={tagsInput}
								name="categorie"
								tagProps={{ className: 'tag badge mr-1' }}
								inputProps={{
									className   : '',
									placeholder : ''
								}}
							/>
						</Col>
						<Col md="12">
							<div className="mb-1">
								<Media className="media-comment">
									<img
										alt="..."
										className="avatar avatar-lg media-comment-avatar rounded-circle"
										src={require('assets/img/theme/team-1.jpg')}
									/>
									<Media>
										<div className="media-comment-text">
											<h6 className="h5 mt-0">Michael Lewis</h6>
											<p className="text-sm lh-160">
												Cras sit amet nibh libero nulla vel metus scelerisque ante sollicitudin.
												Cras purus odio vestibulum in vulputate viverra turpis.
											</p>
											<div className="icon-actions">
												<a
													className="like active"
													href="#pablo"
													onClick={(e) => e.preventDefault()}
												>
													<i className="ni ni-like-2" />
													<span className="text-muted">3 likes</span>
												</a>
												<a href="#pablo" onClick={(e) => e.preventDefault()}>
													<i className="ni ni-curved-next" />
													<span className="text-muted">2 shares</span>
												</a>
											</div>
										</div>
									</Media>
								</Media>
								<Media className="media-comment">
									<img
										alt="..."
										className="avatar avatar-lg media-comment-avatar rounded-circle"
										src={require('assets/img/theme/team-2.jpg')}
									/>
									<Media>
										<div className="media-comment-text">
											<h6 className="h5 mt-0">Jessica Stones</h6>
											<p className="text-sm lh-160">
												Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
												ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
												viverra turpis.
											</p>
											<div className="icon-actions">
												<a
													className="like active"
													href="#pablo"
													onClick={(e) => e.preventDefault()}
												>
													<i className="ni ni-like-2" />
													<span className="text-muted">10 likes</span>
												</a>
												<a href="#pablo" onClick={(e) => e.preventDefault()}>
													<i className="ni ni-curved-next" />
													<span className="text-muted">1 share</span>
												</a>
											</div>
										</div>
									</Media>
								</Media>
								<hr />
								<Media className="align-items-center">
									<img
										alt="..."
										className="avatar avatar-lg rounded-circle mr-4"
										src={require('assets/img/theme/team-3.jpg')}
									/>
									<Media body>
										<Form>
											<Input placeholder="Write your comment" rows="1" type="textarea" />
										</Form>
									</Media>
								</Media>
							</div>
						</Col>{' '}
					</Row>
				</ModalBody>
			</Modal>
		</div>
	);
}

export default showRecipe;
