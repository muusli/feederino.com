import React from 'react';
import classnames from 'classnames';
import { useUserData } from '../../lib/hooks';
import axios from 'axios';
import firebase from 'firebase';
import router from 'next/router';

import {  Dropdown, DropdownToggle,  DropdownItem, DropdownMenu, Input, InputGroupAddon, InputGroupText, FormGroup, Form, InputGroup ,Card,
	
	CardBody,
	
	Button,
	Col,
	Modal,
	ModalBody,
	Media,
	Row,
	
	
	
	UncontrolledCarousel,
	ListGroup,
	ListGroupItem} from 'reactstrap';
const debounce = (func, delay = 1000) => {
	let timeoutId;
	// ..args keeps track of how many arguments are passed into the function
	return (...args) => {
		//wenn es bereits Input mit Timer gibt timer löschen
		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		//Neuen Timout setzen
		timeoutId = setTimeout(() => {
			func.apply(null, args);
		}, delay);
	};
};
function SearchRecipe({ theme, closeSearch, openSearch }) {

    const [dropdownOpen, setDropdownOpen] = React.useState(false);
 	const toggle = () => setDropdownOpen(prevState => !prevState);
	const [ recipeSearch, setRecipeSearch ] = React.useState();
	const [ recipeOpen, setRecipeOpen ] = React.useState(false);
	const [ recipe, setRecipe ] = React.useState([]);
	
	const searchRecipe = debounce(async (string) => {			
		const searchRecipes = firebase.functions().httpsCallable('meilisearchQuery');
  searchRecipes({ query: string })
  .then((result) => {
	  console.log(result)
	//   const recipesSearchResult = result.data.recipes.hits.map((r)=>r['recipe'])
	  const recipesSearchResult = result.data.recipes.hits

	//   const recipesSearchResult = result.data.recipes.map((r)=>r['_source'])
    setRecipeSearch(recipesSearchResult)
    console.log(recipesSearchResult)
  });
	}, 500);

	const handleSelect = (recipe) => {
		// props.updateRecipe(string, recipe)
		// setRecipeOpen(true)
		setRecipe(recipe)
		console.log(recipe)
		router.push(`/${recipe.username}/${recipe.slug}`)
	};
	const userData = useUserData();
	const addMeal = (event) => {
		event.preventDefault();
		let meal = {
			title : recipe.title,
			start : event.target.start.value,
			allDay      : true,
			author    : {
					id       : userData.user.uid,
					username : userData.username
				},
			recipe    : 			{id: recipe._id,}
					
			
		};
console.log(meal)
		// axios.post('http://localhost:5000/meal/add', meal).then((res) => console.log(res.data));
	};
	return (<><Dropdown isOpen={dropdownOpen} toggle={toggle} direction={'down'}>
        <DropdownToggle color='#000'>
		<Form
			className={classnames(
				'navbar-search form-inline mr-sm-3',
				{ 'navbar-search-light': theme === 'dark' },
				{ 'navbar-search-dark': theme === 'light' }
			)}
		>
			<FormGroup className="mb-0">
				<InputGroup className="input-group-alternative input-group-merge">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<i className="fas fa-search" />
						</InputGroupText>
					</InputGroupAddon>
					<Input placeholder="Search" type="text" onChange={(event) => searchRecipe(event.target.value)} />
				</InputGroup>
			</FormGroup>
			<button aria-label="Close" className="close" type="button" onClick={closeSearch}>
				<span aria-hidden={true}>×</span>
			</button>
            
		</Form>
        </DropdownToggle>
             <DropdownMenu
             className="dropdown-menu-lg dropdown-menu-light "
            
           >
            {/* <Input
                id="ingredientDropdown"
                // onChange={(event) => {setRecipe(event.target.value)}}
                multiple="multiple"
                type="select"
            > */}
                {recipeSearch ? 
                    recipeSearch.map((item) =>(<> 
                    <DropdownItem onClick={()=> handleSelect(item) }>
               
                  <img
                    alt="..."
					className=" avatar rounded-circle mr-3"
                    src={item.image}
                  ></img>
            
            {item.title}</DropdownItem> </>)
                ) : (
                    <DropdownItem >Suche ein Rezept</DropdownItem>
                )}
            </DropdownMenu>
       
        </Dropdown>
		{/* <Modal className="modal-lg" toggle={() => setRecipeOpen(!recipeOpen)} isOpen={recipeOpen}>
				<ModalBody>
					{/* <Row>
						<Col md="6" className="mx-auto">
							<UncontrolledCarousel items={recipeImages} />
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
								{recipe.title}
							</h5>
							<hr />
							<p>
                            {recipe.description}
							</p>
							<hr />
							<Row>
								<Col md="4">{recipe.duration} min. </Col>
								<Col md="4">{recipe.activeTime} min. </Col>
								<Col md="4">{recipe.difficulty}</Col>
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
                       { recipe.steps ? recipe.steps.map((step) => <><label className="form-control-label" htmlFor="Schritt 1">
								Schritt {recipe.steps.indexOf(step) + 1}
							</label>
							<p>
								{step}
							</p></>
                            ) : null}
							
						</Col>
						<Col md="4">
							<Card>
								<CardBody className="p-0">
									<ListGroup data-toggle="checklist" flush>

                                    { recipe.steps ? recipe.ingredients.map((ingredient) => <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
											<div className="checklist-item checklist-item-success">
												<div className="checklist-info">
													<h5 className="checklist-title mb-0">{ingredient.name}</h5>
													<small>{ingredient.quantity} {ingredient.unit}</small>
												</div>
											</div>
										</ListGroupItem>
                            ) : null}
							
										
										
									</ListGroup>
								</CardBody>
							</Card>
							<TagsInput
								onlyUnique
								className="bootstrap-tagsinput"
								// onChange={(value) => setTagsinput()}
								value={recipe.tags}
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
									<Image
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
									<Image
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
									<Image
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
					</Row> */}
				
		</>
        
    )
        }
       
		
export default SearchRecipe;
