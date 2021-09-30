import ReactDatetime from 'react-datetime';
import TagsInput from '../Inputs/TagsInput.js';
import {firestore, serverTimestamp } from '../../lib/firebase';

import Link from 'next/link'
// import PostContent from './PostContent';
// import HeartButton from './HeartButton';
// import AuthCheck from './AuthCheck';
// import Metatags from './Metatags';
// import { UserContext } from '../lib/context';
// import { firestore, getUserWithUsername, recipeToJSON } from '../lib/firebase';
import CommentFeed from '../comments/CommentFeed.js';
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
import NewComment from '../comments/NewComment.js';
import toast from 'react-hot-toast';
export default function RecipeContent({recipe,comments, recipeRef, currentUser}) {
    const createdAt = typeof recipe?.createdAt === 'number' ? new Date(recipe.createdAt) : recipe.createdAt.toDate();
	const addMeal = async (event) => {
		event.preventDefault();
		let meal = {
			title : recipe.title,
			start : event.target.start.value,
			allDay      : true,
			author    : currentUser.uid,
			className: 'bg-info'				,
			recipe    : {title: recipe.title, updatedAt:'', createdAt:'',image:recipe.image,
			title:recipe.title,
			published:recipe.published || "",
			description:recipe.description || "",
			ingredients:recipe.ingredients|| "",
			duration: recipe.duration || "",
			activeTime:recipe.activeTime|| "",
			portion:recipe.portion|| "",
			// categorie   : tagsInput,
			steps:recipe.steps|| "",
			difficulty:recipe.difficulty|| "",},
			createdAt:      serverTimestamp(),
			updatedAt      : serverTimestamp(),	
			
		};
console.log(meal)
if (currentUser) {
	const mealsRef = firestore.collection('users').doc(currentUser.uid).collection('calendar');
	if (!mealsRef) {
	  console.log('error')
	}
	else {
	  await mealsRef.add(meal).then((docRef) => {
		docRef.update({id: docRef.id})
		toast.success('Rezept zum Kalendar hinzugefügt')
			})
	.catch((error) => {
		console.error("Error adding document: ", error);
	});;
	  
  }};
	};
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
							<Row><Col>
							<h5 className=" modal-title" id="exampleModalLabel">
								{recipe.title}
							</h5>	</Col>						<Col className="text-right text-bottom">						
<small>@</small><Link href={`/${recipe.username}`}>{`${recipe.username}`}</Link></Col>
</Row>
							<hr />
							<p>
                            {recipe.description}
							</p>
							<hr />
							<Row>
								<Col xs='4' sm='4'md="3"className='text-center'><h3>{recipe.duration} min</h3><p>Dauer</p>  </Col>
								<Col xs='4' sm='4'md="4"className='text-center'><h3>{recipe.activeTime} min</h3><p>Arbeitszeit</p>  </Col>
								<Col xs='4' sm='4'md="5" className='text-center'><h3>{recipe.difficulty}</h3><p>Schwierigkeit</p></Col>
							</Row>
							<hr/>
							<Row><Col>
							<Form onSubmit={addMeal}>
								<FormGroup className="row">
									<Col md="5">
										<Button type="submit" block size="md" color="success">
											Zum Plan hinzufügen
										</Button>
									</Col>
									<Col md="7">
										
										<ReactDatetime
											inputProps={{
												name        : 'start',
												placeholder : 'Date Picker Here'
											}}
											timeFormat={false}
											dateFormat={"YYYY-MM-DD"}
											initialViewMode={'days'}
											initialValue={new Date()}
										/>
									</Col>
								</FormGroup>
							</Form>
							</Col></Row>
							<hr />
							
							
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
				
					
					<Row style={{paddingTop: 50 }} >
					<Col xs='12'md="6" >
					<Card >
								<CardBody className="p-0">
									<ListGroup data-toggle="checklist" flush>
									<Row>
                                    { recipe.ingredients ? recipe.ingredients.map((ingredient) => <Col xs='6' sm='6' md='12' key={ingredient.id} ><div className="checklist-entry flex-column align-items-start py-4 px-4">
											<div className="checklist-item checklist-item-success">
												<div className="checklist-info">
													<h5 key={ingredient.name}className="checklist-title mb-0">{ingredient.name}</h5>
													<small key={recipe.ingredients.indexOf(ingredient)}>{ingredient.quantity} {ingredient.unit}</small>
												</div>
											</div>
										</div>
										</Col>
                            ) : null}
							
							</Row>
										
									</ListGroup>
								</CardBody>
							</Card>
					</Col>
						<Col xs='12' md="6" >
                       { recipe.steps ? recipe.steps.map((step) => <ListGroupItem key={recipe.steps.indexOf(step)}><label className="form-control-label" htmlFor="Schritt 1">
								Schritt {recipe.steps.indexOf(step) + 1}
							</label>
							<p >
								{step}
							</p></ListGroupItem>
                            ) : (null)}
							
						</Col>
						{/* <Col md="6">
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
							</Card> */}
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
						{/* </Col> */}






						<Col md="12"className="mx-auto"><hr/>
						<CommentFeed comments={comments} slug={recipe.slug}></CommentFeed><hr/></Col><Col md="12"><NewComment authorId={recipe.uid} username={recipe.username}slug={recipe.slug} />
						</Col>
						
					</Row> </CardBody></Card></Container> 

	
		</main>
	);
}

