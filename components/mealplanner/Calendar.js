/*!
import Image from 'next/image'
=========================================================
* NextJS Argon Dashboard PRO - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
import Image from 'next/image'
*/
import firebase from "firebase";
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// JavaScript library that creates a callendar with events
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";
import  Select2  from "react-select2-wrapper";
// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";
// reactstrap components
import Image from 'next/image'
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Modal,
  Dropdown, DropdownToggle,  DropdownItem, DropdownMenu, InputGroupAddon, InputGroupText, InputGroup , CardImg, CardImgOverlay, CardTitle, CardText,
  Container,
  Row,
  Col,
  ModalBody,
  UncontrolledCarousel,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axios from 'axios';
import {serverTimestamp, mealToJSON, getUserWithUsername} from '../../lib/firebase'
import toast from "react-hot-toast";
import SearchRecipe from "../recipes/SearchRecipe";
// layout for this page
// import Admin from "layouts/Admin.js";
// core components

// import { events as eventsVariables } from "variables/general.js";
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
let calendar
const options = {
  placeholder: "Select"
};
function CalendarView (props) {
  const [ recipeOpen, setRecipeOpen ] = React.useState(false);
	const [ recipe, setRecipe ] = React.useState(null);
  const [events, setEvents] = React.useState();
  const [alert, setAlert] = React.useState(null);
  const [modalAdd, setModalAdd] = React.useState(false);
  const [modalChange, setModalChange] = React.useState(false);
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  
  const [eventId, setEventId] = React.useState(null);
  const [eventTitle, setEventTitle] = React.useState(null);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
 	const toggle = () => setDropdownOpen(prevState => !prevState);
  // eslint-disable-next-line
  const [event, setEvent] = React.useState(null);
  const [currentDate, setCurrentDate] = React.useState(null);
  const calendarRef = React.useRef(null);
  const [ recipeSearch, setRecipeSearch ] = React.useState();
	const openSearch = () => {
		document.body.classList.add('g-navbar-search-showing');
		setTimeout(function() {
			document.body.classList.remove('g-navbar-search-showing');
			document.body.classList.add('g-navbar-search-show');
		}, 150);
		setTimeout(function() {
			document.body.classList.add('g-navbar-search-shown');
		}, 300);
	};
	// function that on mobile devices makes the search close
	const closeSearch = () => {
		document.body.classList.remove('g-navbar-search-shown');
		setTimeout(function() {
			document.body.classList.remove('g-navbar-search-show');
			document.body.classList.add('g-navbar-search-hiding');
		}, 150);
		setTimeout(function() {
			document.body.classList.remove('g-navbar-search-hiding');
			document.body.classList.add('g-navbar-search-hidden');
		}, 300);
		setTimeout(function() {
			document.body.classList.remove('g-navbar-search-hidden');
		}, 500);
	};
	const handleSelect = (recipe) => {
		// props.updateRecipe(string, recipe)
		// setRecipeOpen(true)
		setRecipe(recipe)
    // console.log(recipeSelect)
		console.log(recipe)
		
	};
	const searchRecipe = debounce(async (string) => {			
		const searchRecipes = firebase.functions().httpsCallable('meilisearchQuery');
  searchRecipes({ query: string })
  .then((result) => {
    const recipesSearchResult = result.data.recipes.hits
	  // const recipesSearchResult = result.data.recipes.map((r)=>r['_source'])
    setRecipeSearch(recipesSearchResult)
    console.log(recipesSearchResult)
  });
	}, 500);
  // const searchRecipes = firebase.functions().httpsCallable('searchRecipes');
  // searchRecipes({ query: 'Neu' })
  // .then((result) => {
  //   const recipes = result.data.recipes;
  //   setRecipe(recipes)
  //   console.log('done')
  // });
  React.useEffect(() => {
 
    
    createCalendar();
    
    // eslint-disable-next-line
  }, []);
  
  const createCalendar = () => {

      
     calendar = new Calendar(calendarRef.current, {
      plugins: [interaction, dayGridPlugin],
      initialView: "dayGridWeek",
      selectable: true,
      editable: true,
      
      events: props.meals,
      headerToolbar: "",
      // Add new event
      select: (info) => {
        setModalAdd(true);
        setStartDate(info.startStr);
        setRecipe(undefined)
        setEndDate(info.endStr);
        
      },
      // Edit calendar event action
      eventClick: ({ event }) => {
       
        setEventId(event.id);
        setEventTitle(event.title);
        setRecipe(event.extendedProps.recipe)
        console.log(event)
        setEvent(event);
        setModalChange(true);
        
      },
      eventDrop: (info) => {
        changeTime(info.event.startStr, info.event.endStr,info.event.id)
      }
     }
    );
    setEvents(props.meals)
    calendar.render();
    setCurrentDate(calendar.view.title);
    // )
  
  //  console.log(meals)
    
  };
  const changeView = (newView) => {
    calendar.changeView(newView);
    setCurrentDate(calendar.view.title);
  };
  
  
  const addNewEvent = async () => {
    
    var newEvents = events;
    const data = {
      recipe: recipe,
      title: eventTitle || recipe.title,
      start: startDate,
      end: endDate,
      className: 'bg-info',
      createdAt      : serverTimestamp(),
      updatedAt      : serverTimestamp(),
      }
   
    const userDoc = await getUserWithUsername(props.username);
   
    if (userDoc) {
      const mealsRef = userDoc.ref.collection('calendar');
      if (!mealsRef) {
        
      }
      else {
        await mealsRef.add(data).then((docRef) => {
          const datawithId = {
            ...data,
             id:docRef.id
             }
          docRef.update({id: docRef.id})
          
          newEvents.push(datawithId);
          calendar.addEvent(datawithId);
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });;
        
    }};
       
    setModalAdd(false);
    setEvents(newEvents);
    setStartDate(undefined);
    setEndDate(undefined);
   setRecipe(undefined)
    setEventTitle(undefined);
    
  };
  // const ShoppingList = events.forEach(event => event.recipe.ingredients.map((e) =>  <p>{e.name}</p>))
  const changeEvent = () => {
   
    var newEvents = events.map((prop, key) => {
      if (prop.id + "" === eventId + "") {
        setEvent(undefined);
        console.log(eventId)
        calendar.getEventById(eventId).remove();
        let saveNewEvent = {
          ...prop,
          title: eventTitle,
          recipe
          
        };
        saveToFirestore({title: eventTitle,
         recipe, updatedAt      : serverTimestamp(),
         
        }, eventId)
        calendar.addEvent(saveNewEvent);
        return {
          ...prop,
          title: eventTitle,
          recipe
         
          
        };
      } else {
        return prop;
      }
    });
    
    setModalChange(false);
    setEvents(newEvents);
    
    setEventTitle(undefined);
    setRecipe(undefined)
    setEventId(undefined);
    setEvent(undefined);
    
  };
  const saveToFirestore= async (data, id)=>{
    const userDoc = await getUserWithUsername(props.username);
   
    if (userDoc) {
      const mealsRef = userDoc.ref.collection('calendar').doc(id);
      if (!mealsRef) {
        
      }
      else {
        await mealsRef.update({...data});
        
    }};
  }
  const deleteEventSweetAlert = () => {
    setAlert(
      <ReactBSAlert
        warning
        style={{ display: "block", marginTop: "-100px" }}
        title="Are you sure?"
        onConfirm={() => {
          setAlert(false);
         
          setEventTitle(undefined);
          
          setEventId(undefined);
        }}
        onCancel={() => deleteEvent()}
        confirmBtnCssClass="btn-secondary"
        cancelBtnBsStyle="danger"
        confirmBtnText="Cancel"
        cancelBtnText="Yes, delete it"
        showCancel
        btnSize=""
      >
        You won't be able to revert this!
      </ReactBSAlert>
    );
  };
  const changeTime = async(startStr, endStr, id) =>{

const userDoc = await getUserWithUsername(props.username);
   
if (userDoc) {
  const mealsRef = userDoc.ref.collection('calendar').doc(id);
  if (!mealsRef) {
    
  }
  else {
    await mealsRef.update({start:startStr, end:endStr}).then(() => {
      toast.success('Datum updated')
     
      
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });;

  }}}
  const deleteEvent = async () => {
    var newEvents = events.filter((prop) => prop.id + "" !== eventId);
    
    setEvents(newEvents)
    
    calendar.getEventById(eventId).remove();
    setEvent(undefined);
    setAlert(
      <ReactBSAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Success"
        onConfirm={() => setAlert(null)}
        onCancel={() => setAlert(null)}
        confirmBtnBsStyle="primary"
        confirmBtnText="Ok"
        btnSize=""
      >
        A few words about this sweet alert ...
      </ReactBSAlert>
    );
    setModalChange(false);
    
  
    const userDoc = await getUserWithUsername(props.username);
   
    if (userDoc) {
      const mealsRef = userDoc.ref.collection('calendar').doc(eventId);
      if (!mealsRef) {
        
      }
      else {
        await mealsRef.delete().then(() => {
          toast.success('Event erfolgreich gelöscht')
         
          
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });;
    
         
    }};
   
    setEventTitle(undefined);
    setRecipe(undefined)
    setEventId(undefined);
    setEvent(undefined);
   
  };
  
  return (
    <>
     {alert}
      <div className="header header-dark  pb-6 content__title content__title--calendar">
       
         
        {/* </Container>
      </div>
      <Container className="mt--12" fluid >
        <Row>
          <div className="col"> */}
            <Card className="card-calendar" style={{ position: 'relative', bottom: '4.5rem' }}>
            {/* {events&&<ShoppingList></ShoppingList>} */}
           <CardHeader>
                <div className="row">
              <Col lg="6">
                <h5 className="h3 mb-0">{currentDate}</h5>
                </Col>
                <Col className="mt-3 mt-md-0 text-md-right" lg="6">
                <Button
                  className="fullcalendar-btn-prev btn-neutral"
                  color="default"
                  onClick={() => {
                    
                    calendar.prev();
                  }}
                  size="sm"
                >
                  <i className="fas fa-angle-left" />
                </Button>
                <Button
                  className="fullcalendar-btn-next btn-neutral"
                  color="default"
                  onClick={() => {
                    calendar.next();
                  }}
                  size="sm"
                >
                  <i className="fas fa-angle-right" />
                </Button>
                <Button
                  className="btn-neutral"
                  color="default"
                  data-calendar-view="month"
                  onClick={() => changeView("dayGridMonth")}
                  size="sm"
                >
                  Month
                </Button>
                <Button
                  className="btn-neutral"
                  color="default"
                  data-calendar-view="basicWeek"
                  onClick={() => changeView("dayGridWeek")}
                  size="sm"
                >
                  Week
                </Button></Col></div></CardHeader>
               
              <CardBody className="p-0">
                <div
                  className="calendar"
                  data-toggle="calendar"
                  id="calendar"
                  ref={calendarRef}
                />
              </CardBody>
              
            </Card>

            <Modal
              isOpen={modalAdd}
              toggle={() => setModalAdd(false)}
              className="modal-dialog-centered modal-secondary"
            >
              
                <form className="new-event--form">
              <Card className="bg-dark text-white border-0">{recipe?(
        <CardImg
          alt="..."
          src={recipe.image}
        ></CardImg>):(<CardImg
       max-height ="50"
          alt="..."
          src={require("assets/img/theme/img-1-1000x600.jpg")}
        ></CardImg>)}
        <CardImgOverlay className="d-flex align-items-center">
          <div>
           {recipe?( <CardTitle className="h2 text-white mb-2">{recipe.title} </CardTitle>):(<CardTitle className="h2 text-white mb-2">Wähle ein Rezept </CardTitle>)}
            <CardText>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={'down'}>
        <DropdownToggle color='#000'>
		<Form
			className={classnames(
				'navbar-search form-inline mr-sm-3',
				{ 'navbar-search-light': props.theme === 'dark' },
				{ 'navbar-search-dark': props.theme === 'light' }
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
                    <DropdownItem onClick={()=> handleSelect(item) }>  <img
                    alt="..."
					className=" avatar rounded-circle mr-3"
                    src={item.image}
                  ></img>{item.title}</DropdownItem> </>)
                ) : (
                    <DropdownItem >Suche ein Rezept</DropdownItem>
                )}
            </DropdownMenu>
       
        </Dropdown>
            </CardText>
            
            {recipe?( <CardText className="text-sm font-weight-bold">by {recipe.username}</CardText>):('')}
            
          </div>
        </CardImgOverlay></Card>
      <div className="modal-body">
                <Card>
                  <CardBody>
                  <FormGroup>
                    <label className="form-control-label">Event title</label>
                    <Input
                      className="form-control-alternative new-event--title"
                      placeholder="Event Title"
                      type="text"
                      // onChange={(event) => searchRecipe(event.target.value)}
                      onChange={(e) => setEventTitle(e.target.value)}
                    />
                  </FormGroup><hr/><Row>
                  {recipe?(recipe.ingredients.map((ingredient)=>(<Col md="3">
                <a
                  className="avatar rounded-circle mr-3"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={ingredient.url}
                  ></img>
                </a><p>{ingredient.name}</p></Col>))):null}</Row></CardBody>
                  </Card></div>
                </form>
              
              <div className="modal-footer">
                <Button
                  className="new-event--add"
                  color="primary"
                  type="button"
                  onClick={addNewEvent}
                >
                  Add event
                </Button>
                <Button
                  className="ml-auto"
                  color="link"
                  type="button"
                  onClick={() => setModalAdd(false)}
                >
                  Close
                </Button>
              </div>
            </Modal>
            <Modal
              isOpen={modalChange}
              toggle={() => setModalChange(false)}
              className="modal-dialog-centered modal-secondary"
            >
              {/* <div className="modal-body"> */}
                <Form className="edit-event--form">
                  {/* <FormGroup>
                    <label className="form-control-label">Event title</label>
                    <Input
                      className="form-control-alternative edit-event--title"
                      placeholder="Event Title"
                      type="text"
                      defaultValue={eventTitle}
                      onChange={(e) => setEventTitle(e.target.value)}
                    />
                  </FormGroup>
                  {recipe?(recipe.ingredients.map((ingredient)=>(
                <a
                  className=" avatar rounded-circle mr-3"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <Image
                    alt="..."
                    src={ingredient.url}
                  ></img>
                </a>))):null} */}<Card className="bg-dark text-white border-0">{recipe?(
        <CardImg
        alt="..."
        src={recipe.image}
      ></CardImg>):(<CardImg
     max-height ="50"
        alt="..."
        src={require("assets/img/theme/img-1-1000x600.jpg")}
      ></CardImg>)}
      <CardImgOverlay className="d-flex align-items-center">
        <div>
         {recipe?( <CardTitle className="h2 text-white mb-2">{recipe.title} </CardTitle>):(<CardTitle className="h2 text-white mb-2">Wähle ein Rezept </CardTitle>)}
          <CardText>
          <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={'down'}>
      <DropdownToggle color='#000'>
  <Form
    className={classnames(
      'navbar-search form-inline mr-sm-3',
      { 'navbar-search-light': props.theme === 'dark' },
      { 'navbar-search-dark': props.theme === 'light' }
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
                  <DropdownItem onClick={()=> handleSelect(item) }>{item.title}</DropdownItem> </>)
              ) : (
                  <DropdownItem >Suche ein Rezept</DropdownItem>
              )}
          </DropdownMenu>
     
      </Dropdown>
          </CardText>
          
          {recipe?( <CardText className="text-sm font-weight-bold">by {recipe.username}</CardText>):('')}
          
        </div>
      </CardImgOverlay></Card>
    <div className="modal-body">
              <Card>
                <CardBody>
                <FormGroup>
                  <label className="form-control-label">Event title</label>
                  <Input
                    className="form-control-alternative new-event--title"
                    placeholder="Event Title"
                    type="text"
                    // onChange={(event) => searchRecipe(event.target.value)}
                    onChange={(e) => setEventTitle(e.target.value)}
                  />
                </FormGroup><hr/><Row>
                {recipe?(recipe.ingredients.map((ingredient)=>(<Col md="3">
              <a
                className="avatar rounded-circle mr-3"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <img
                  alt="..."
                  src={ingredient.url}
                ></img>
              </a><p>{ingredient.name}</p></Col>))):null}</Row></CardBody>
                </Card></div>
              
                  <input className="edit-event--id" type="hidden" />
                </Form> 
                {/* <ModalBody>
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
								{events.title}
							</h5>
							<hr />
							<p>
                            {event.description}
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
					</Row><
				</ModalBody> */}
        {/* {recipe&&(<p>{recipe.title}</p>)}
        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={'down'}>
        <DropdownToggle color='#000'>
		<Form
			className={classnames(
				'navbar-search form-inline mr-sm-3',
				{ 'navbar-search-light': props.theme === 'dark' },
				{ 'navbar-search-dark': props.theme === 'light' }
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
            > */}{/*}
                {recipeSearch ? 
                    recipeSearch.map((item) =>(<> 
                    <DropdownItem onClick={()=> handleSelect(item) }>{item.title}</DropdownItem> </>)
                ) : (
                    <DropdownItem >Some Action</DropdownItem>
                )}
            </DropdownMenu>
       
        </Dropdown> */}
              {/* </div> */}
              <div className="modal-footer">
                <Button color="primary" onClick={changeEvent}>
                  Update
                </Button>
                <Button
                  color="danger"
                  onClick={() => {
                    setModalChange(false);
                    deleteEventSweetAlert();
                  }}
                >
                  Delete
                </Button>
                <Button
                  className="ml-auto"
                  color="link"
                  onClick={() => setModalChange(false)}
                >
                  Close
                </Button>
              </div>
            </Modal>
        </div>
            {/* </div>
        </Row>
      </Container> */}
    </>
  );
}

// CalendarView.layout = Admin;

export default CalendarView;
