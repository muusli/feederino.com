import ReactDatetime from 'react-datetime';
import TagsInput from './TagsInput/TagsInput.js';
import Link from 'next/link'
// import PostContent from './PostContent';
// import HeartButton from './HeartButton';
// import AuthCheck from './AuthCheck';
// import Metatags from './Metatags';
// import { UserContext } from '../lib/context';
// import { firestore, getUserWithUsername, recipeToJSON } from '../lib/firebase';
import {
	Row,
	UncontrolledCarousel,
	Col,
	Button,
	Form,
	FormGroup,
	ListGroup,
	ListGroupItem,
	Media,
	Container,
	Card,
	CardBody,
	Input
} from 'reactstrap';
// import Link from 'next/link';
// import { useDocumentData } from 'react-firebase-hooks/firestore';
// import { useContext } from 'react';


export default function RecipeContent({recipe, recipeRef}) {
    const createdAt = typeof recipe?.createdAt === 'number' ? new Date(recipe.createdAt) : recipe.createdAt.toDate();
	return (
		<main>
			
            <Container>
				<Card style={{ position: 'relative', bottom: '4.5rem' }}>
					<CardBody>
						<Row 
						// className="align-items-center my-3 pb-3"
						>
	 					<Col md="6" className="mx-auto" justify-self="center">
	 						<UncontrolledCarousel items={[
								{
									src     : recipe.image,
									altText : 'Slide 1',
									caption : '',
									header  : '',
									key     : '1'
								},]} />
	
						</Col>
						<Col md="6" className="mx-auto" justify-self="center">
							
							<h5 className=" modal-title" id="exampleModalLabel">
								{recipe.title}
							</h5>
							<hr />
							<p>
                            {recipe.description}
							</p>
							<hr />
							<Row>
								<Col xs='4' sm='4'md="4"className='text-center'><h3>{recipe.duration} min</h3><p>Dauer</p>  </Col>
								<Col xs='4' sm='4'md="4"className='text-center'><h3>{recipe.activeTime} min</h3><p>Arbeitszeit</p>  </Col>
								<Col xs='4' sm='4'md="4" className='text-center'><h3>{recipe.difficulty}</h3><p>Schwierigkeit</p></Col>
							</Row>
							<hr />
							<Col className="text-right text-bottom"><small>@</small><Link href={`/${recipe.username}`}>{`${recipe.username}`}</Link></Col>
							{/* <Form onSubmit={addMeal}>
								<FormGroup className="row">
									<Col md="5">
										<Button type="submit" block size="md" color="success">
											Zum Plan hinzufügen
										</Button>
									</Col>
									<Col md="7">
										{/* <Input
											value={today}
											id="example-datetime-local-input"
											name="start"
											type="datetime-local"
										/> */}
			{/* <ReactDatetime
											inputProps={{
												name        : 'start',
												placeholder : 'Date Picker Here'
											}}
											timeFormat={false}
											initialValue={new Date()}
										/>
									</Col>
										</FormGroup> */}
			{/*</Form> */}
		</Col>
					</Row>
					<hr />
					<Row>
						<Col md="6">
                       { recipe.steps ? recipe.steps.map((step) => <ListGroupItem key={recipe.steps.indexOf(step)}><label className="form-control-label" htmlFor="Schritt 1">
								Schritt {recipe.steps.indexOf(step) + 1}
							</label>
							<p >
								{step}
							</p></ListGroupItem>
                            ) : (null)}
							
						</Col>
						<Col md="6">
							<Card>
								<CardBody className="p-0">
									<ListGroup data-toggle="checklist" flush>

                                    { recipe.ingredients ? recipe.ingredients.map((ingredient) => <div key={ingredient.id} className="checklist-entry flex-column align-items-start py-4 px-4">
											<div className="checklist-item checklist-item-success">
												<div className="checklist-info">
													<h5 key={ingredient.name}className="checklist-title mb-0">{ingredient.name}</h5>
													<small key={recipe.ingredients.indexOf(ingredient)}>{ingredient.quantity} {ingredient.unit}</small>
												</div>
											</div>
										</div>
                            ) : null}
							
										
										
									</ListGroup>
								</CardBody>
							</Card>
                            {/* {recipe.categorie?
							<TagsInput
								onlyUnique
								className="bootstrap-tagsinput"
								onChange={(value) => setTagsinput()}
								value={recipe.categorie}
								name="categorie"
								tagProps={{ className: 'tag badge mr-1' }}
								inputProps={{
									className   : '',
									placeholder : ''
								}}
							/>:''} */}
						</Col>
						{/* <Col md="12">
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
						</Col>{' '} */}
					</Row> </CardBody></Card></Container> 

	
		</main>
	);
}

