import React from 'react';

import {functions} from '../../lib/firebase'
import { Input, Button,InputGroupAddon,InputGroup, Col, Row, FormGroup ,InputGroupText} from 'reactstrap';


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
function AddIngredients(props) {
	const [ingredients, setIngredients] = React.useState()
	if (!ingredients) {
		setIngredients(props.ingredients || []);
	}
	const [ ingredientAddSearchTerm, setIngredientAddSearchTerm ] = React.useState();
	const [ ingredientAddSearch, setIngredientAddSearch ] = React.useState();
	const searchIngredient = debounce(async (string) => {
		setIngredientAddSearchTerm(string);
		const searchIngredient = functions.httpsCallable(`autocompleteIngredient`);
		const response = await searchIngredient({ string: string })	
		setIngredientAddSearch(response.data);
	
	}, 500);
	
	const Search = (props) => {
		const [ingredients, setIngredients] = React.useState(props.ingredients)
		const [ ingredientSearchTerm, setIngredientSearchTerm ] = React.useState();
		const [ ingredientSearch, setIngredientSearch ] = React.useState();
		const researchIngredient = debounce(async (string) => {
			setIngredientSearchTerm(string);
			const searchIngredient = functions.httpsCallable(`autocompleteIngredient`);
			const response = await searchIngredient({string: string})
			let updatedIngredients = []
			response.data.forEach(function (item) {
				var updatedIngredient =
					{
						name: item.name,
						url: 'https://spoonacular.com/cdn/ingredients_100x100/' + item.image
					}
				updatedIngredients.push(updatedIngredient);
			});
			setIngredientSearch(updatedIngredients);
			
		}, 500);
		const handleSelect = (string, ingredient) => {
			
			props.updateIngredient(string, ingredient)
			setIngredientSearchTerm('')
			const ingredientId ='#ingredient'+ ingredient.position;
			
			document.querySelector(ingredientId).value = string;		
			
		
		}
		return (<>
			<Input												
				className="ingredients"
				key={`ingredient${props.ingredients.indexOf(props.ingredient) + 1}`}
				id={'ingredient'+props.ingredient.position}
				name={`ingredient${props.ingredients.indexOf(props.ingredient) + 1}`}
				innerRef={props.innerRef}
				// placeholder={props.ingredient.name}
				defaultValue={props.ingredient.name}
				onChange={(event) => {
				debounce(researchIngredient(event.target.value), 500);
				}}
				// onBlur={setIngredientSearchTerm(false)}
				placeholder="Neue Zutat"
				type="text"
				/>
				{ingredientSearchTerm ? (
				<Input
					defaultValue={props.ingredient.name}
					key={props.ingredient.id}
					onChange={(event) => {handleSelect(event.target.value, props.ingredient)}}
					multiple="multiple"
					type="select"
				>
				{ingredientSearch ? (
					ingredientSearch.map((item) => (
							<option data-thumbnail={item.url} key={item.name} value={item.name}>{item.name}</option>
						))
					) : (
							<option>...</option>
					)}
				</Input>
					) : (
					null
				)}
				
															</>
	
		)
	}
//Searches in the API for that ingredient and gives back an object with an id
const addIngredient = async (string) =>{
	const ingredient = await findIngredient(string)
	props.addIngredient(ingredient)
	setIngredientAddSearchTerm('')
	document.querySelector('#addIngredient').value = '';
	
}
const findIngredient = async (string)=> {
	const searchIngredient = functions.httpsCallable(`searchIngredient`);
	const response = await searchIngredient({ string : string})
	return(response.data.results[0])
	
}
const updateUnit = (string, ingredient) => {
	let updatedIngredient = ingredient
	updatedIngredient.unit=string
	props.updateIngredients(updatedIngredient, ingredient)

}
const updateQuantity = (number, ingredient) => {
	let updatedIngredient = ingredient
	updatedIngredient.quantity=number
	props.updateIngredients(updatedIngredient, ingredient)

}
const updateIngredient = async (string, ingredient) => {
	const newIngredient = await findIngredient(string)
	let updatedIngredient = {
		quantity: ingredient.quantity,
		unit: ingredient.unit,
	id : newIngredient.id,
	name :newIngredient.name,
	url : `https://spoonacular.com/cdn/ingredients_100x100/${newIngredient.image}`}
	props.updateIngredients(updatedIngredient, ingredient)
	
}
	
const deleteIngredient = (ingredient)=>{
	const updatedIngredients = props.deleteIngredient(ingredient)
	setIngredients(updatedIngredients)
}


	return (
		<Row>
			<Col md="12">
				<label className="form-control-label" htmlFor="">
					Zutaten
				</label>
				<FormGroup>
					
						<Input
							id="addIngredient"
						
							onChange={(event) => {
								debounce(searchIngredient(event.target.value), 500);
							}}
							// onBlur={setIngredientSearchTerm(false)}
							placeholder="Neue Zutat"
							type="text"
						/>
						{ingredientAddSearchTerm ? (
							<Input
								id="ingredientDropdown"
								onChange={(event) => {addIngredient(event.target.value)}}
								multiple="multiple"
								type="select"
							>
								{ingredientAddSearch ? 
									ingredientAddSearch.map((item) =>(<> 
									<option data-thumbnail={item.url}>
								 {item.name}</option> </>)
								) : (
									<option>...</option>
								)}
							</Input>
						) : (
							''
						)}
						
				
				</FormGroup>
				<FormGroup>
					<Row>
						<Col md="12">
							<Row>
								{props.ingredients ? (
									props.ingredients.map((ingredient) => (
										<Col sm="12"md="6" >
											<FormGroup>
												<Row>
													<Col sm="3" md="3">
														<Input 				key={`quantity${props.ingredients.indexOf(ingredient) + 1}`}
 name={`quantity${props.ingredients.indexOf(ingredient) + 1}`} defaultValue={ingredient.quantity} innerRef={props.innerRef} placeholder="Menge" onChange={(event)=>updateQuantity(event.target.value, ingredient)} />
													</Col>
													<Col sm="3"md="3">
														<Input 		defaultValue={ingredient.unit}		key={`unit${props.ingredients.indexOf(ingredient) + 1}`}
name={`unit${props.ingredients.indexOf(ingredient) + 1}`} placeholder="Einheit" type="select" innerRef={props.innerRef}onChange={(event)=>updateUnit(event.target.value, ingredient)}>
															{ingredient.unit ? (
																<option value={ingredient.unit}>{ingredient.unit}</option>
															) : (
																<option>Einheit</option>
															)}

															<option value="g">g</option>
															<option value="EL">EL</option>
															<option value="Stück">Stück</option>
															<option value="TL">TL</option>
															<option value="Prise">Prise</option>
														</Input>
													{ingredient.id&& <input name={`id${props.ingredients.indexOf(ingredient) + 1}`} ref={props.innerRef} defaultValue={ingredient.id} hidden></input>}	
													{ingredient.url&& <input name={`url${props.ingredients.indexOf(ingredient) + 1}`} ref={props.innerRef} defaultValue={ingredient.url} hidden></input>}	
													</Col>
													<Col sm="6"md="6">
														<InputGroup>
														<Search updateIngredient={updateIngredient} innerRef={props.innerRef} ingredients={props.ingredients}ingredient={ingredient}></Search><InputGroupAddon addonType="append"><InputGroupText><i className='fas fa-trash-alt text-danger'onClick={(e)=> deleteIngredient(ingredient)}/></InputGroupText></InputGroupAddon>
													</InputGroup></Col>
													
												</Row>
											</FormGroup>
										</Col>
									))
								) : null}
							</Row>
						</Col>
					</Row>
				</FormGroup>
			</Col>
		</Row>
	);
															
}


export default AddIngredients;
