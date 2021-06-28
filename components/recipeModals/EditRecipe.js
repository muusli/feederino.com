import React from 'react';

import classnames from 'classnames';
import dynamic from 'next/dynamic';
const Select2 = dynamic(() => import('react-select2-wrapper'));
import TagsInput from 'components/TagsInput/TagsInput.js';
import ImageInput from 'components/Inputs/ImageInput';
import axios from 'axios';
import 'assets/vendor/nucleo/css/nucleo.css';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../../lib/context';
import AddIngredients from '../AddIngredients';
import { firestore, auth, serverTimestamp } from '../../lib/firebase';
import Steps from '../Steps';
import toast from 'react-hot-toast';
import AuthCheck from '../AuthCheck';
// reactstrap components
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
	NavLink,
	NavItem,
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
import { update } from '../../../muusli_backend/models/meal.model';
function AddModal() {
	const { user, username } = useContext(UserContext);
	const [ modalOpen, setModalOpen ] = React.useState(false);
	const [ ingredients, setIngredients ] = React.useState([]);
	const [ title, setTitle ] = React.useState(false);
	const [ description, setDescription ] = React.useState(false);
	const [ duration, setDuration ] = React.useState(false);
	const [ activeTime, setActiveTime ] = React.useState(false);
	const [ portion, setPortion ] = React.useState(false);
	const [ difficulty, setDifficulty ] = React.useState(false);
	const router = useRouter();
	const [downloadURL, setDownloadURL] = React.useState('/recipe');
	const [ steps, setSteps ] = React.useState([]);
	const [ image, setImage ] = React.useState(false);
	const [ tagsInput, setTagsinput ] = React.useState([]);
	const addStep = (event) => {
		event.preventDefault();

		const updatedSteps = [ ...steps, document.querySelector('#stepInput').value ];
		setSteps(updatedSteps);
		document.querySelector('#stepInput').value = '';
	};
	const addRecipe = (event) => {
		event.preventDefault();
		let recipe = {
			title       : event.target.title.value,
			description : event.target.description.value,
			duration    : event.target.duration.value,
			activeTime  : event.target.activeTime.value,
			difficulty  : event.target.difficulty.value,
			portion     : event.target.portion.value,
			ingredients : ingredients,
			steps       : steps,
			image       : downloadURL,
			isOnline    : event.target.isOnline.checked,
			tags        : tagsInput,
			author      : { id: user.uid, username: username }
		};
		console.log(recipe);
		setModalOpen(!modalOpen)
		axios.post('http://localhost:5000/recipes/add', recipe).then((res) => console.log(res.data));
	};
	
		
		// const [title, setTitle] = useState('');
	  
		// // Ensure slug is URL safe
		
	  
		// // Validate length
		// const isValid = title.length > 3 && title.length < 100;
	  
		// Create a new post in firestore
		const createPost = async (event) => {
		  event.preventDefault();
		//   const uid = auth.currentUser.uid;
		  const ref = firestore.collection('users').doc(user.uid).collection('recipes');
	  
		  // Tip: give all fields a default value here
		  const data = {
			title: event.target.title.value,
			
			description : event.target.description.value,
			duration    : event.target.duration.value,
			activeTime  : event.target.activeTime.value,
			difficulty  : event.target.difficulty.value,
			portion     : event.target.portion.value,
			ingredients : ingredients,
			steps       : steps,
			// image       : event.target.image,
			author      : { id: user.uid, username: username },
			tags        : tagsInput,
			published: false,
			content: '# hello world!',
			createdAt: serverTimestamp(),
			updatedAt: serverTimestamp(),
			heartCount: 0,
		  };
	  console.log(data)
		  await ref.add(data);
		  setModalOpen(!modalOpen)
		  toast.success('Post created!')
	  
		  // Imperative navigation after doc is set
		//   router.push(`/collection/myrecipes`);
	  
		};
	
	const addIngredient =(ingredient) => {
		console.log(ingredient)
		
		const addIngredient = {
			
			id       : ingredient.id,
			name     : ingredient.name,
			position : ingredients.length,
			unit:'',
			quantity: null,
			url: 'https://spoonacular.com/cdn/ingredients_100x100/' + ingredient.image
		};

		let updatedIngredients = [ ...ingredients, addIngredient ];

		setIngredients(updatedIngredients);
	
		
		
	};
	
	const updateIngredients = (ingredient) => {
		let updatedIngredients = ingredients;
		updatedIngredients.splice(ingredient.position, 1, ingredient);
		setIngredients(updatedIngredients);
	
	};
	const updateSteps = (string, id) =>{
		let updatedSteps = steps;
		updatedSteps.splice(id, 1, string);
		setSteps(updatedSteps);
		
	}
	return (
		<>
			<Button className="btn-neutral" color="default" onClick={() => setModalOpen(!modalOpen)} size="sm">
				Neues Rezept
			</Button>

			

			<Modal className="modal-lg" toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
				<div className=" modal-header">
					<h5 className=" modal-title" id="exampleModalLabel">
						Rezept hinzufügen
					</h5>
					<button
						aria-label="Close"
						className=" close"
						type="button"
						onClick={() => setModalOpen(!modalOpen)}
					>
						<span aria-hidden={true}>×</span>
					</button>
				</div><AuthCheck>
				<Form onSubmit={createPost}>
					<ModalBody>
						{' '}
						<Row>
							<Col md="12">
								<FormGroup>
									<label className="form-control-label" htmlFor="exampleFormControlTextarea1">
										Basisinformationen
									</label>
									<InputGroup
										className={classnames('input-group-merge', {
											focused : title
										})}
									>
									
										<Input
											placeholder="Titel"
											type="text"
											name="title"
											onFocus={(e) => setTitle(true)}
											onBlur={(e) => setTitle(false)}
										/>
									</InputGroup>
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col md="12">
								<FormGroup>
									<InputGroup
										className={classnames('input-group-merge', {
											focused : description
										})}
									>
										
										<Input
											placeholder="Beschreibung"
											id=""
											rows="3"
											name="description"
											type="textarea"
											onFocus={(e) => setDescription(true)}
											onBlur={(e) => setDescription(false)}
										/>
									</InputGroup>
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col md="6">
								<FormGroup>
									<InputGroup
										className={classnames('input-group-merge', {
											focused : duration
										})}
									>
										
										<Input
											placeholder="Dauer"
											type="number"
											name="duration"
											onFocus={(e) => setDuration(true)}
											onBlur={(e) => setDuration(false)}
										/>
									</InputGroup>
								</FormGroup>
							</Col>
							<Col md="6">
								<FormGroup>
									<InputGroup
										className={classnames('input-group-merge', {
											focused : activeTime
										})}
									>
										
										<Input
											placeholder="Aktive Arbeitszeit"
											type="number"
											name="activeTime"
											onFocus={(e) => setActiveTime(true)}
											onBlur={(e) => setActiveTime(false)}
										/>
									</InputGroup>
								</FormGroup>
							</Col>
							
						</Row>
						<Row>
							<Col md="6">
								<FormGroup>
									<InputGroup
										className={classnames('input-group-merge', {
											focused : portion
										})}
									>
										
										<Input
											placeholder="Portionen"
											type="number"
											name="portion"
											onFocus={(e) => setPortion(true)}
											onBlur={(e) => setPortion(false)}
										/>
									</InputGroup>
								</FormGroup>
							</Col>
							<Col md="6">
								<FormGroup>
									<InputGroup
										className={classnames('input-group-merge', {
											focused : difficulty
										})}
									>
									
										<Input
											placeholder="Schwierigkeit"
											type="select"
											name="difficulty"
											onFocus={(e) => setDifficulty(true)}
											onBlur={(e) => setDifficulty(false)}
										>
											<option>Schwierigkeit</option>
											<option>Leicht</option>
											<option>Mittel</option>
											<option>Schwer</option>
										</Input>
									</InputGroup>
								</FormGroup>
							</Col>
						</Row>
						<AddIngredients ingredients={ingredients} updateIngredients={updateIngredients}addIngredient={addIngredient}/>
						<Row>
							<Col md="12">
							
									<FormGroup>
										<label className="form-control-label" htmlFor="exampleFormControlTextarea1">
											Neuer Schritt
										</label>

										<InputGroup>
											{' '}
											<Input id="stepInput" rows="3" name="addStep" type="textarea" />
											<InputGroupAddon addonType="append">
												<Button
													color="default"
													id="button-addon2"
													outline
													onClick={addStep}
													type="button"
												>
													+
												</Button>
											</InputGroupAddon>
										</InputGroup>
									</FormGroup>
							
								<Steps
									steps={steps}
									updateSteps={updateSteps}
								/>
							</Col>
						</Row>
						<Row>
							<Col>
								<label className="form-control-label" htmlFor="exampleFormControlTextarea1">
									Bild
								</label>
								<ImageInput name="image" setDownloadURL={setDownloadURL} />
							</Col>
						</Row>{' '}
						<Row>
							<Col md="12">
								<label className="form-control-label" htmlFor="exampleFormControlTextarea1">
									Kategorien
								</label>
								<div>
									<TagsInput
										onlyUnique
										className="bootstrap-tagsinput"
										onChange={(value) => setTagsinput(value)}
										value={tagsInput}
										name="categorie"
										tagProps={{ className: 'tag badge mr-1' }}
										inputProps={{
											className   : '',
											placeholder : 'Dein erstes Tag'
										}}
									/>
								</div>
							</Col>
						</Row>
						<Row>
							<Col md="12">
								<label className="form-control-label" htmlFor="exampleFormControlTextarea1">
									Öffentlich teilen
								</label>
								<div>
									<label className="custom-toggle custom-toggle-warning mr-1">
										<input type="checkbox"  name="isOnline"/>
										<span
											className="custom-toggle-slider rounded-circle"
											data-label-off="No"
											data-label-on="Yes"
											defaultChecked 
										/>
									</label>
								</div>
							</Col>
						</Row>
						
					</ModalBody>
					<ModalFooter>
						<Button color="secondary" type="button" onClick={() => setModalOpen(!modalOpen)}>
							Close
						</Button>
						<Button type="submit" color="primary">
							Hinzufügen
						</Button>
					</ModalFooter>
				</Form></AuthCheck>
			</Modal>
		</>
	);
}

export default AddModal;
