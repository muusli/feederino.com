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
// nodejs library to set properties for components
import PropTypes from "prop-types";
// reactstrap components
import {
  Collapse,
  Button,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  ListGroupItem,
  ListGroup,
  Media,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import AddModal from '../recipeModals/AddRecipe';
import { useContext } from 'react';
import { UserContext } from '../../lib/context';
import { auth } from '../../lib/firebase';
import LoginModal from 'components/LoginModal'
import SearchRecipe from 'components/SearchRecipe'
function DefaultNavbar({ theme, sidenavOpen, toggleSidenav }) {
  	// function that on mobile devices makes the search open
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


  const { user, username } = useContext(UserContext)

  return (
    <>
      <Navbar
        className={classnames(
          "navbar-top navbar-expand border-bottom",
          { "navbar-dark bg-dark": theme === "dark" },
          { "navbar-light bg-secondary": theme === "light" }
        )}
      >
        <Container>
          <Collapse navbar isOpen={true}>
            {/* <SearchRecipe theme={theme} openSearch={openSearch} closeSearch={closeSearch}></SearchRecipe> */}

            <Nav className="align-items-center ml-md-auto" navbar>
              <NavItem className="d-xl-none">
                <div
                  className={classnames(
                    "pr-3 sidenav-toggler",
                    { active: sidenavOpen },
                    { "sidenav-toggler-dark": theme === "dark" }
                  )}
                  onClick={toggleSidenav}
                >
                  <div className="sidenav-toggler-inner">
                    <i className="sidenav-toggler-line" />
                    <i className="sidenav-toggler-line" />
                    <i className="sidenav-toggler-line" />
                  </div>
                </div>

                </NavItem>


               
{/*              
              <NavItem className="d-sm-none">
                <NavLink onClick={openSearch}>
                  <i className="ni ni-zoom-split-in" />
                </NavLink>
              </NavItem> */}







              {/* <UncontrolledDropdown nav>
                <DropdownToggle className="nav-link" color="" tag="a">
                  <i className="ni ni-bell-55" />
                </DropdownToggle>
                <DropdownMenu
                  className="dropdown-menu-xl py-0 overflow-hidden"
                  right
                >
                  <div className="px-3 py-3">
                    <h6 className="text-sm text-muted m-0">
                     Du hast <strong className="text-info">1</strong>{" "}
                      Benachrichtigung
                    </h6>
                  </div>

                <ListGroup flush>
                    <ListGroupItem
                      className="list-group-item-action"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      tag="a"
                    >
                      <Row className="align-items-center">
                        <Col className="col-auto">
                          <img
                            alt="..."
                            className="avatar rounded-circle"
                            src={require("assets/img/theme/team-1.jpg")}
                          />
                        </Col>
                        <div className="col ml--2">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h4 className="mb-0 text-sm">Muusli</h4>
                            </div>
                            <div className="text-right text-muted">
                              <small>2 hrs ago</small>
                            </div>
                          </div>
                          <p className="text-sm mb-0">
                            Herzlich Willkommen auf meiner Website, wenn du irgendwelches Feedback hast, zögere nicht mich zu kontaktieren
                          </p>
                        </div>
                      </Row>
                    </ListGroupItem>
                   
                  </ListGroup> 

                  <DropdownItem
                    className="text-center text-info font-weight-bold py-3"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    View all
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle className="nav-link" color="" tag="a">
                  <i className="ni ni-ungroup" />
                </DropdownToggle>
                <DropdownMenu
                  className="dropdown-menu-lg dropdown-menu-dark bg-default"
                  right
                >
                  <Row className="shortcuts px-4">
                    <Col
                      className="shortcut-item"
                      href="/mealplanner"
                      // onClick={(e) => e.preventDefault()}
                      xs="4"
                      tag="a"
                    >
                      <span className="shortcut-media avatar rounded-circle bg-gradient-red">
                        <i className="ni ni-calendar-grid-58" />
                      </span>
                      <small>Planer</small>
                    </Col> */}
                    {/* <Col
                      className="shortcut-item"
                      href="/recipes"
                      // onClick={(e) => e.preventDefault()}
                      xs="4"
                      tag="a"
                    >
                      <span className="shortcut-media avatar rounded-circle bg-gradient-orange">
                        <i className="ni ni-email-83" />
                      </span>
                      <small>Rezepte</small>
                    </Col> */}
                    {/* <Col
                      className="shortcut-item"
                      href="/social"
                      // onClick={(e) => e.preventDefault()}
                      xs="4"
                      tag="a"
                    >
                      <span className="shortcut-media avatar rounded-circle bg-gradient-info">
                        <i className="ni ni-credit-card" />
                      </span>
                      <small>Feed</small>
                    </Col><Col
                      className="shortcut-item"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      xs="4"
                      tag="a"
                    >
                    </Col> */}
                    {/* <Col
                      className="shortcut-item"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      xs="4"
                      tag="a"
                    >
                      <span className="shortcut-media avatar rounded-circle bg-gradient-green">
                      <i className="ni ni-basket" />
                      </span>
                      <small>Shopping</small>
                    </Col> */}
                   {/* <Col
                      className="shortcut-item"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      xs="4"
                      tag="a"
                    >
                      <span className="shortcut-media avatar rounded-circle bg-gradient-purple">
                        <i className="ni ni-pin-3" />
                      </span>
                      <small>Wiki</small>
                    </Col>
                    <Col
                      className="shortcut-item"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      xs="4"
                      tag="a"
                    >
                      <span className="shortcut-media avatar rounded-circle bg-gradient-yellow">
                        <i className="ni ni-basket" />
                      </span>
                      <small>Chat</small>
                    </Col> */}
                  {/* </Row>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
            
        {/* user is signed-in and has username */}
        {username && (
          <>
            <Nav className="align-items-center ml-auto ml-md-0" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="nav-link pr-0" color="" tag="a">
                  <Media className="align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img
                        alt="..."
                        src={user?.photoURL}
                      />
                    </span>
                    <Media className="ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm font-weight-bold">
                        {username}
                      </span>
                    </Media>
                  </Media>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </DropdownItem>
                  <DropdownItem
                    href={`/${username}`}
                    // onClick={(e) => e.preventDefault()}
                  >
                    <i className="ni ni-single-02" />
                    <span>My profile</span>
                  </DropdownItem>
                  {/* <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="ni ni-settings-gear-65" />
                    <span>Settings</span>
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="ni ni-calendar-grid-58" />
                    <span>Activity</span>
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="ni ni-support-16" />
                    <span>Support</span>
                  </DropdownItem> */}
                  <DropdownItem divider />
                  <DropdownItem
                    href="#pablo"
                    // onClick={(e) => e.preventDefault()}
                    onClick={() => auth.signOut()}
                  >
                    <i className="ni ni-user-run" />
                    <span>Logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            </>
            )}
            {/* user is not signed OR has not created username */}
            {!username && (
        <>
        <LoginModal></LoginModal>
            {/* <Button href="/enter" outline color="primary" type="button">
        Log In
      </Button> */}
        {/* <Button href="/signup" outline color="secondary" type="button">
        Sign Up
      </Button>      */}
      </>
        )}
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

DefaultNavbar.defaultProps = {
  toggleSidenav: () => {},
  sidenavOpen: false,
  theme: "dark",
};
DefaultNavbar.propTypes = {
  toggleSidenav: PropTypes.func,
  sidenavOpen: PropTypes.bool,
  theme: PropTypes.oneOf(["dark", "light"]),
};

export default DefaultNavbar;
