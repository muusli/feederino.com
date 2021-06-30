// import Link from 'next/link';
// import ReactDatetime from 'react-datetime';
// import TagsInput from 'components/TagsInput/TagsInput.js';
import React from 'react';
import axios from 'axios';
import { useUserData } from '../lib/hooks';
import {
	Card,
	CardImg,
	CardBody,
	CardTitle,
	Button,
	Col,
	Modal,
	ModalBody,
	Media,
	Row,
	FormGroup,
	Form,
	Input,
	UncontrolledCarousel,
	ListGroup,
	ListGroupItem
} from 'reactstrap';
export default function RecipeFeed({ recipes, admin }) {
	return (
		<Row>
			{recipes ? recipes.map((recipe) => <RecipeItem recipe={recipe} key={recipe.slug} admin={admin} />) : null}
		</Row>
	);
}

function RecipeItem({ recipe, admin = false }) {
	// const userData = useUserData();
	// const addMeal = (event) => {
	// 	event.preventDefault();
	// 	let meal = {
	// 		title  : recipe.title,
	// 		start  : event.target.start.value,
	// 		allDay : true,
	// 		author : {
	// 			id       : userData.user.uid,
	// 			username : userData.username
	// 		},
	// 		recipe : { id: recipe._id }
	// 	};
	// 	console.log(meal);
	// 	axios.post('http://localhost:5000/meal/add', meal).then((res) => console.log(res.data));
	// };

	return (
		<Col md="3">
			{recipe.published == false ? (
				<a href={`/recipes/myRecipes/${recipe.slug}`}>
					<Card
						body
						inverse
						style={{ backgroundImage: `url(${recipe.image})`, borderColor: '#333' }}
						// onClick={() => setRecipeOpen(!recipeOpen)}
					>
						{/* <Link
				href={`/recipes/myRecipes/${recipe.slug}`}
				> */}
						{/* <CardImg alt="..." src={recipe.image} top /> */}

						{/* <CardBody> */}
						<CardTitle className="h2 mb-0" color="success">
							{recipe.title}
						</CardTitle>
						{/* <small className="text-muted">{recipe.duration} min. </small> */}
						{/* </CardBody> */}
					</Card>
				</a>
			) : (
				<a href={`/${recipe.author}/${recipe.slug}`}>
					<Card
					// onClick={() => setRecipeOpen(!recipeOpen)}
					>
						{recipe.image && <CardImg alt="..." src={recipe.image} top />}
						<CardBody>
							<CardTitle className="h2 mb-0">{recipe.title}</CardTitle>
							<small className="text-muted">{recipe.duration} min. </small>
						</CardBody>
					</Card>
				</a>
			)}
		</Col>
	);
}
