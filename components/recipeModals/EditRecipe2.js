import React from 'react';

import classnames from 'classnames';

import TagsInput from 'components/TagsInput/TagsInput.js';
import ImageInput from 'components/Inputs/ImageInput';

import 'assets/vendor/nucleo/css/nucleo.css';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../../lib/context';
import AddIngredients from '../AddIngredients';
import { serverTimestamp } from '../../lib/firebase';

import toast from 'react-hot-toast';

import { useForm } from 'react-hook-form';
import {
	Row,
	Col,
	FormGroup,
	Form,
	Input,
	FormFeedback,
	InputGroupAddon,
	InputGroup,
	Button,
	ModalBody,
	ModalFooter
} from 'reactstrap';
export default function Page({ recipeRef, defaultValues, preview }) {
	const { register, handleSubmit, reset, watch, formState, errors, setValue, useFieldArray } = useForm({
		defaultValues,
		mode          : 'onChange'
	});
	const { isValid, isDirty } = formState;
	const { user, username } = useContext(UserContext);
	const [ modalOpen, setModalOpen ] = React.useState(false);
	const [ ingredients, setIngredients ] = React.useState(defaultValues.ingredients);

	const [ titleFocus, setTitleFocus ] = React.useState(false);
	const [ description, setDescription ] = React.useState(false);
	const [ duration, setDuration ] = React.useState(false);
	const [ activeTime, setActiveTime ] = React.useState(false);
	const [ portion, setPortion ] = React.useState(false);
	const [ difficulty, setDifficulty ] = React.useState(false);
	const router = useRouter();
	const [ downloadURL, setDownloadURL ] = React.useState('/recipe');
	const [ steps, setSteps ] = React.useState(defaultValues.steps);
	const [ image, setImage ] = React.useState(defaultValues.image);
	const [ tagsInput, setTagsinput ] = React.useState([]);

	if (!ingredients) {
		setIngredients([]);
	}
	if (!steps) {
		setSteps([]);
	}

	const updateRecipe = async ({
		image,
		title,
		published,
		duration,
		description,
		activeTime,
		portion,
		difficulty,
		tagsInput,
		id1,
		id2,
		id3,
		id4,
		id5,
		id6,
		id7,
		id8,
		id9,
		id10,
		id11,
		id12,
		id13,
		id14,
		id15,
		id16,
		id17,
		id18,
		id19,
		id20,
		id21,
		id22,

		unit1,
		unit2,
		unit3,
		unit4,
		unit5,
		unit6,
		unit7,
		unit8,
		unit9,
		unit10,
		unit11,
		unit12,
		unit13,
		unit14,
		unit15,
		unit16,
		unit17,
		unit18,
		unit19,
		unit20,
		unit21,
		unit22,
		quantity1,
		quantity2,
		quantity3,
		quantity4,
		quantity5,
		quantity6,
		quantity7,
		quantity8,
		quantity9,
		quantity10,
		quantity11,
		quantity12,
		quantity13,
		quantity14,
		quantity15,
		quantity16,
		quantity17,
		quantity18,
		quantity19,
		quantity20,
		quantity21,
		quantity22,
		ingredient1,
		ingredient2,
		ingredient3,
		ingredient4,
		ingredient5,
		ingredient6,
		ingredient7,
		ingredient8,
		ingredient9,
		ingredient10,
		ingredient11,
		ingredient12,
		ingredient13,
		ingredient14,
		ingredient15,
		ingredient16,
		ingredient17,
		ingredient18,
		ingredient19,
		ingredient20,
		ingredient21,
		ingredient22,
		url1,
		url2,
		url3,
		url4,
		url5,
		url6,
		url7,
		url8,
		url9,
		url10,
		url11,
		url12,
		url13,
		url14,
		url15,
		url16,
		url17,
		url18,
		url19,
		url20,
		url21,
		url22
	}) => {
		const ingredientList = [
			{ id: id1, unit: unit1, quantity: quantity1, name: ingredient1, url: url1 },
			{ unit: unit2, quantity: quantity2, name: ingredient2, url: url2, id: id2 },
			{ unit: unit3, quantity: quantity3, name: ingredient3, url: url3, id: id3 },
			{ unit: unit4, quantity: quantity4, name: ingredient4, url: url4, id: id4 },
			{ unit: unit5, quantity: quantity5, name: ingredient5, url: url5, id: id5 },
			{ unit: unit6, quantity: quantity6, name: ingredient6, url: url6, id: id6 },
			{ unit: unit7, quantity: quantity7, name: ingredient7, url: url7, id: id7 },
			{ unit: unit8, quantity: quantity8, name: ingredient8, url: url8, id: id8 },
			{ unit: unit9, quantity: quantity9, name: ingredient9, url: url9, id: id9 },
			{ unit: unit10, quantity: quantity10, name: ingredient10, url: url10, id: id10 },
			{ unit: unit11, quantity: quantity11, name: ingredient11, url: url11, id: id11 },
			{ unit: unit12, quantity: quantity12, name: ingredient12, url: url12, id: id12 },
			{ unit: unit13, quantity: quantity13, name: ingredient13, url: url13, id: id13 },
			{ unit: unit14, quantity: quantity14, name: ingredient14, url: url14, id: id14 },
			{ unit: unit15, quantity: quantity15, name: ingredient15, url: url15, id: id15 },
			{ unit: unit16, quantity: quantity16, name: ingredient16, url: url16, id: id16 },
			{ unit: unit17, quantity: quantity17, name: ingredient17, url: url17, id: id17 },
			{ unit: unit18, quantity: quantity18, name: ingredient18, url: url18, id: id18 },
			{ unit: unit19, quantity: quantity19, name: ingredient19, url: url19, id: id19 },
			{ unit: unit20, quantity: quantity20, name: ingredient20, url: url20, id: id20 },
			{ unit: unit21, quantity: quantity21, name: ingredient21, url: url21, id: id21 },
			{ unit: unit22, quantity: quantity22, name: ingredient22, url: url22, id: id22 }
		];

		for (let i = 0; i < ingredientList.length; i++) {
			if (ingredientList[i].name == undefined) {
				ingredientList.splice(i, 22);
			}
		}

		await recipeRef.update({
			// categorie,
			image,
			title,
			published,
			duration,
			description,
			activeTime,
			portion,
			// categorie   : tagsInput,
			steps,
			ingredients : ingredientList,
			difficulty,
			updatedAt   : serverTimestamp()
		});

		router.push('/recipes/myRecipes');

		toast.success('Rezept erfolgreich gespeichert');
	};

	const addStep = (event) => {
		event.preventDefault();

		const updatedSteps = [ ...steps, document.querySelector('#stepInput').value ];
		setSteps(updatedSteps);
		document.querySelector('#stepInput').value = '';
	};
	const addIngredient = (ingredient) => {
		console.log(ingredient);

		const addIngredient = {
			id       : ingredient.id,
			name     : ingredient.name,
			position : ingredients.length,
			unit     : '',
			quantity : null,
			url      : 'https://spoonacular.com/cdn/ingredients_100x100/' + ingredient.image
		};
		console.log(addIngredient);
		let updatedIngredients = [ ...ingredients, addIngredient ];
		console.log(updatedIngredients);
		setIngredients(updatedIngredients);
		// useFieldArray('ingredients', updatedIngredients);
	};

	const updateIngredients = (ingredient) => {
		let updatedIngredients = ingredients;
		updatedIngredients.splice(ingredient.position, 1, ingredient);
		setIngredients(updatedIngredients);
		// useFieldArray('ingredients', updatedIngredients);
	};
	const updateSteps = (string, id) => {
		let updatedSteps = steps;
		updatedSteps.splice(id, 1, string);
		setSteps(updatedSteps);
	};
	// setSteps(defaultValues.steps);
	// setIngredients(defaultValues.ingredients);
	return (
		<main>
			<Form onSubmit={handleSubmit(updateRecipe)}>
				<ModalBody>
					{' '}
					<Row>
						<Col md="12">
							<FormGroup>
								<label className="form-control-label" htmlFor="exampleFormControlTextarea1">
									Titel
								</label>

								<Input
									// ref={register}
									defaultValue={defaultValues.title}
									type="text"
									name="title"
									innerRef={register({
										maxLength : { value: 100, message: 'Der Titel ist zu lang' },
										minLength : { value: 4, message: 'Der Titel ist zu kurz' },
										required  : { value: true, message: 'content is required' }
									})}
									onFocus={(e) => setTitleFocus(true)}
									onBlur={(e) => setTitleFocus(false)}
								/>
								{errors.title && <small className="text-danger"> {errors.title.message} </small>}
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col md="12">
							<FormGroup>
								<label className="form-control-label" htmlFor="exampleFormControlTextarea1">
									Beschreibung
								</label>
								<InputGroup
									className={classnames('input-group-merge', {
										focused : description
									})}
								>
									<Input
										defaultValue={defaultValues.description}
										id=""
										innerRef={register({
											maxLength : { value: 300, message: 'Die Beschreibung ist zu lang' },
											minLength : { value: 20, message: 'Die Beschreibung ist zu kurz' },
											required  : { value: true, message: 'content is required' }
										})}
										rows="3"
										name="description"
										type="textarea"
										onFocus={(e) => setDescription(true)}
										onBlur={(e) => setDescription(false)}
									/>
								</InputGroup>
								{errors.description && (
									<small className="text-danger"> {errors.description.message} </small>
								)}
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col md="6">
							<FormGroup>
								<label className="form-control-label" htmlFor="exampleFormControlTextarea1">
									Dauer
								</label>
								<InputGroup
									className={classnames('input-group-merge', {
										focused : duration
									})}
								>
									<Input
										defaultValue={defaultValues.duration}
										type="number"
										name="duration"
										innerRef={register({
											required : { value: true, message: 'Wie lange dauert die Zubereitung?' }
										})}
										onFocus={(e) => setDuration(true)}
										onBlur={(e) => setDuration(false)}
									/>
								</InputGroup>
								{errors.duration && <small className="text-danger"> {errors.duration.message} </small>}
							</FormGroup>
						</Col>
						<Col md="6">
							<FormGroup>
								<label className="form-control-label" htmlFor="exampleFormControlTextarea1">
									Aktive Arbeitszeit
								</label>
								<InputGroup
									className={classnames('input-group-merge', {
										focused : activeTime
									})}
								>
									<Input
										defaultValue={defaultValues.activeTime}
										type="number"
										innerRef={register({
											required : { value: true, message: 'Wie lange muss man aktiv etwas tun?' }
										})}
										name="activeTime"
										onFocus={(e) => setActiveTime(true)}
										onBlur={(e) => setActiveTime(false)}
									/>
								</InputGroup>
								{errors.activeTime && (
									<small className="text-danger"> {errors.activeTime.message} </small>
								)}
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col md="6">
							<FormGroup>
								<label className="form-control-label" htmlFor="exampleFormControlTextarea1">
									Portionen
								</label>
								<InputGroup
									className={classnames('input-group-merge', {
										focused : portion
									})}
								>
									<Input
										defaultValue={defaultValues.portion}
										type="number"
										name="portion"
										innerRef={register({
											required : {
												value   : true,
												message : 'Bitte gib eine gültige Anzahl der Portionen an'
											}
										})}
										onFocus={(e) => setPortion(true)}
										onBlur={(e) => setPortion(false)}
									/>
								</InputGroup>
								{errors.portion && <small className="text-danger"> {errors.portion.message} </small>}
							</FormGroup>
						</Col>
						<Col md="6">
							<FormGroup>
								<label className="form-control-label" htmlFor="exampleFormControlTextarea1">
									Schwierigkeit
								</label>
								<InputGroup
									className={classnames('input-group-merge', {
										focused : difficulty
									})}
								>
									<Input
										defaultValue={defaultValues.difficulty}
										innerRef={register({
											required : { value: true, message: 'Bitte wähle die Schwierigkeitsstufe' }
										})}
										type="select"
										name="difficulty"
										onFocus={(e) => setDifficulty(true)}
										onBlur={(e) => setDifficulty(false)}
									>
										<option />
										<option value="1">Leicht</option>
										<option value="2">Mittel</option>
										<option value="3">Schwer</option>
									</Input>
								</InputGroup>
								{errors.difficulty && (
									<small className="text-danger"> {errors.difficulty.message} </small>
								)}
							</FormGroup>
						</Col>
					</Row>
					{/* <input name="ingredients" ref={register} hidden /> */}
					<AddIngredients
						setValue={setValue}
						ingredients={ingredients}
						innerRef={register}
						setIngredients={setIngredients}
						updateIngredients={updateIngredients}
						addIngredient={addIngredient}
					/>
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
							<Row>
								{steps ? (
									steps.map((step) => (
										<Col md="12" key={steps.indexOf(step)}>
											<label className="form-control-label" htmlFor="exampleFormControlTextarea1">
												Schritt {steps.indexOf(step) + 1}
											</label>
											<Input
												id="exampleFormControlTextarea1"
												defaultValue={step}
												onChange={(event) =>
													updateSteps(event.target.value, steps.indexOf(step))}
												rows="3"
												// name={`step${steps.indexOf(step) + 1}`}
												// name="step"
												// innerRef={register({
												// 	required : {
												// 		value   : true,
												// 		message : 'Bitte beschreib wie man dein Rezept zubereitet'
												// 	}
												// })}
												type="textarea"
											/>
											{errors.step && (
												<small className="text-danger"> {errors.step.message} </small>
											)}
										</Col>
									))
								) : null}
							</Row>
							{/* <Steps steps={steps} name="steps" innerRef={register} updateSteps={updateSteps} /> */}
						</Col>
					</Row>
					<Row>
						<Col>
							<label className="form-control-label" htmlFor="exampleFormControlTextarea1">
								Bild
							</label>
							<ImageInput
								defaultImage={defaultValues.image}
								setImage={setImage}
								register={{ register }}
								setDownloadURL={setDownloadURL}
							/>
							<Input
								innerRef={register({ required: { value: true, message: 'Bitte füge ein Bild hinzu' } })}
								name="image"
								defaultValue={image}
								hidden
							/>
						</Col>
					</Row>{' '}
					{/* <Row>
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
									innerRef={register}
									name="categorie"
									tagProps={{ className: 'tag badge mr-1', name: 'categorie', ref: register }}
									inputProps={{
										className   : '',
										defaultValue : 'Dein erstes Tag'
									}}
								/>
							</div>
						</Col>
					</Row> */}
					<Row>
						<Col md="12">
							<label className="form-control-label" htmlFor="exampleFormControlTextarea1">
								Öffentlich teilen
							</label>
							<div>
								<label className="custom-toggle custom-toggle-warning mr-1">
									<input
										name="published"
										type="checkbox"
										ref={register}
										disabled={isDirty || !isValid}
									/>
									<span
										className="custom-toggle-slider rounded-circle"
										data-label-off="No"
										data-label-on="Yes"
									/>
								</label>
							</div>
						</Col>
					</Row>
				</ModalBody>
				<ModalFooter>
					<Button color="secondary" type="button" onClick={() => setModalOpen(!modalOpen)}>
						Schließen
					</Button>
					<Button type="submit" color="primary">
						Speichern
					</Button>
				</ModalFooter>
			</Form>
		</main>
	);
}
