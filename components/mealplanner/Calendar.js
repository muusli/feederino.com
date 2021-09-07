/*!

=========================================================
* NextJS Argon Dashboard PRO - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// JavaScript library that creates a callendar with events
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";
// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";
// reactstrap components
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
  Container,
  Row,
  Col,
  ModalBody,
  UncontrolledCarousel,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axios from 'axios';
// layout for this page
// import Admin from "layouts/Admin.js";
// core components

// import { events as eventsVariables } from "variables/general.js";

let calendar;

function CalendarView(props) {
  const [ recipeOpen, setRecipeOpen ] = React.useState(false);
	const [ recipe, setRecipe ] = React.useState([]);
	const recipeImages = [
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
  const [events, setEvents] = React.useState();
  const [alert, setAlert] = React.useState(null);
  const [modalAdd, setModalAdd] = React.useState(false);
  const [modalChange, setModalChange] = React.useState(false);
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [radios, setRadios] = React.useState(null);
  const [eventId, setEventId] = React.useState(null);
  const [eventTitle, setEventTitle] = React.useState(null);
  const [eventDescription, setEventDescription] = React.useState(null);
  // eslint-disable-next-line
  const [event, setEvent] = React.useState(null);
  const [currentDate, setCurrentDate] = React.useState(null);
  const calendarRef = React.useRef(null);
  React.useEffect(() => {
    createCalendar();
    // eslint-disable-next-line
  }, []);
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
  const createCalendar = () => {
    // const meals =
    // axios.get('http://localhost:5000/meal').then((res) => 
    // {
      console.log(props)
     const calendar = new Calendar(calendarRef.current, {
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
        setEndDate(info.endStr);
        setRadios("bg-info");
      // },
      // Edit calendar event action
      eventClick: ({ event }) => {
        setEventId(event.id);
        setEventTitle(event.title);
        setEventDescription(event.extendedProps.description);
        setRadios("bg-info");
        setEvent(event);
        setModalChange(true);
      }
     }}
    );
    calendar.render();
    setCurrentDate(calendar.view.title);
    // )
  
  //  console.log(meals)
    
  };
  const changeView = (newView) => {
    calendar.changeView(newView);
    setCurrentDate(calendar.view.title);
  };
  const addNewEvent = () => {
    var newEvents = events;
    newEvents.push({
      title: eventTitle,
      start: startDate,
      end: endDate,
      className: radios,
      id: events[events.length - 1] + 1,
    });
    calendar.addEvent({
      title: eventTitle,
      start: startDate,
      end: endDate,
      className: radios,
      id: events[events.length - 1] + 1,
    });
    setModalAdd(false);
    setEvents(newEvents);
    setStartDate(undefined);
    setEndDate(undefined);
    setRadios("bg-info");
    setEventTitle(undefined);
  };
  const changeEvent = () => {
    var newEvents = events.map((prop, key) => {
      if (prop.id + "" === eventId + "") {
        setEvent(undefined);
        calendar.getEventById(eventId).remove();
        let saveNewEvent = {
          ...prop,
          title: eventTitle,
          className: radios,
          description: eventDescription,
        };
        calendar.addEvent(saveNewEvent);
        return {
          ...prop,
          title: eventTitle,
          className: radios,
          description: eventDescription,
        };
      } else {
        return prop;
      }
    });
    setModalChange(false);
    setEvents(newEvents);
    setRadios("bg-info");
    setEventTitle(undefined);
    setEventDescription(undefined);
    setEventId(undefined);
    setEvent(undefined);
  };
  const deleteEventSweetAlert = () => {
    setAlert(
      <ReactBSAlert
        warning
        style={{ display: "block", marginTop: "-100px" }}
        title="Are you sure?"
        onConfirm={() => {
          setAlert(false);
          setRadios("bg-info");
          setEventTitle(undefined);
          setEventDescription(undefined);
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
  const deleteEvent = () => {
    var newEvents = events.filter((prop) => prop.id + "" !== eventId);
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
    setEvents(newEvents);
    setRadios("bg-info");
    setEventTitle(undefined);
    setEventDescription(undefined);
    setEventId(undefined);
    setEvent(undefined);
  };
	// const mealplanRef = firestore.doc('IknQq295DIaUvN1dDqmyLUgrXm52');
	// const [ realtimeMealplan ] = useDocumentData(mealplanRef);
	// // auth.currentUser.uid
	// const meals = realtimeMealplan || mealplan;
  return (
    <>
     {alert}
      <div className="header header-dark  pb-6 content__title content__title--calendar">
       
         
        {/* </Container>
      </div>
      <Container className="mt--12" fluid >
        <Row>
          <div className="col"> */}
            <Card className="card-calendar">
            
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
                    calendar.next();
                  }}
                  size="sm"
                >
                  <i className="fas fa-angle-left" />
                </Button>
                <Button
                  className="fullcalendar-btn-next btn-neutral"
                  color="default"
                  onClick={() => {
                    calendar.prev();
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
                {/* <Button
                  className="btn-neutral"
                  color="default"
                  data-calendar-view="basicDay"
                  onClick={() => changeView("dayGridDay")}
                  size="sm"
                >
                  Day
                </Button>
              </Col>
              </div>
              </CardHeader> */}
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
              <div className="modal-body">
                <form className="new-event--form">
                  <FormGroup>
                    <label className="form-control-label">Event title</label>
                    <Input
                      className="form-control-alternative new-event--title"
                      placeholder="Event Title"
                      type="text"
                      onChange={(e) => setEventTitle(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="mb-0">
                    <label className="form-control-label d-block mb-3">
                      Status color
                    </label>
                    <ButtonGroup
                      className="btn-group-toggle btn-group-colors event-tag"
                      data-toggle="buttons"
                    >
                      <Button
                        className={classnames("bg-info", {
                          active: radios === "bg-info",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-info")}
                      />
                      <Button
                        className={classnames("bg-warning", {
                          active: radios === "bg-warning",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-warning")}
                      />
                      <Button
                        className={classnames("bg-danger", {
                          active: radios === "bg-danger",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-danger")}
                      />
                      <Button
                        className={classnames("bg-success", {
                          active: radios === "bg-success",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-success")}
                      />
                      <Button
                        className={classnames("bg-default", {
                          active: radios === "bg-default",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-default")}
                      />
                      <Button
                        className={classnames("bg-primary", {
                          active: radios === "bg-primary",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-primary")}
                      />
                    </ButtonGroup>
                  </FormGroup>
                </form>
              </div>
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
              <div className="modal-body">
                {/* <Form className="edit-event--form">
                  <FormGroup>
                    <label className="form-control-label">Event title</label>
                    <Input
                      className="form-control-alternative edit-event--title"
                      placeholder="Event Title"
                      type="text"
                      defaultValue={eventTitle}
                      onChange={(e) => setEventTitle(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label className="form-control-label d-block mb-3">
                      Status color
                    </label>
                    <ButtonGroup
                      className="btn-group-toggle btn-group-colors event-tag mb-0"
                      data-toggle="buttons"
                    >
                      <Button
                        className={classnames("bg-info", {
                          active: radios === "bg-info",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-info")}
                      />
                      <Button
                        className={classnames("bg-warning", {
                          active: radios === "bg-warning",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-warning")}
                      />
                      <Button
                        className={classnames("bg-danger", {
                          active: radios === "bg-danger",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-danger")}
                      />
                      <Button
                        className={classnames("bg-success", {
                          active: radios === "bg-success",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-success")}
                      />
                      <Button
                        className={classnames("bg-default", {
                          active: radios === "bg-default",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-default")}
                      />
                      <Button
                        className={classnames("bg-primary", {
                          active: radios === "bg-primary",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-primary")}
                      />
                    </ButtonGroup>
                  </FormGroup>
                  <FormGroup>
                    <label className="form-control-label">Description</label>
                    <Input
                      className="form-control-alternative edit-event--description textarea-autosize"
                      placeholder="Event Desctiption"
                      type="textarea"
                      defaultValue={eventDescription}
                      onChange={(e) => setEventDescription(e.target.value)}
                    />
                    <i className="form-group--bar" />
                  </FormGroup>
                  <input className="edit-event--id" type="hidden" />
                </Form> */}
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
				</ModalBody> */}
              </div>
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
