import Image from 'next/image'/*!

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
import Link from "next/link";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Button,
} from "reactstrap";

function AdminNavbar() {
  return (
    <>
      <Navbar
        className="navbar-horizontal navbar-main navbar-dark bg-default"
        expand="lg"
        id="navbar-main"
      >
        <Container>
          <Link href="/">
            <span>
              <NavbarBrand href="#pablo">
                <img
                // layout="fill"
                  alt="..."
                  style={{height:'3rem'}}
                  src={require("assets/img/brand/feederino.png")}
                />
              </NavbarBrand>
            </span>
          </Link>
          <button
            aria-controls="navbar-collapse"
            aria-expanded={false}
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbar-collapse"
            data-toggle="collapse"
            id="navbar-collapse"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse
            className="navbar-custom-collapse"
            navbar
            toggler="#navbar-collapse"
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link href="/recipes">
                    <img alt="..." src={require("assets/img/brand/feederino.png")} />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    aria-controls="navbar-collapse"
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#navbar-collapse"
                    data-toggle="collapse"
                    id="navbar-collapse"
                    type="button"
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="mr-auto" navbar>
              {/* Wenn eingeloggt */}
              {/* <NavItem>
                <Link href="/recipes">
                  <NavLink href="#pablo">
                    <span className="nav-link-inner--text">Neuigkeiten</span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/aboutus">
                  <NavLink href="#pablo">
                    <span className="nav-link-inner--text">Kalendar</span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/license">
                  <NavLink href="#pablo">
                    <span className="nav-link-inner--text">Einkauf</span>
                  </NavLink>
                </Link>
              </NavItem> */}
             
             
              </Nav>
            <hr className="d-lg-none" />
            <Nav className="align-items-lg-center ml-lg-auto" navbar>
          
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="https://www.instagram.com/feederino_official/?hl=de"
                  id="tooltip871243015"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                  <span className="nav-link-inner--text d-lg-none">
                    Instagram
                  </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target="tooltip871243015">
                  Follow us on Instagram
                </UncontrolledTooltip>
                
              </NavItem>
            
           <NavItem className="d-none d-lg-block ml-lg-4">
                <Button
               
                  className="btn-neutral btn-icon"
                  color="secondary"
                  href="/auth/login"
                  
                >
                  <span className="btn-inner--icon">
                    <i className="fas fa-shopping-cart mr-2" />
                  </span>
                  <span className="nav-link-inner--text">Login</span>
                </Button>
              </NavItem>
              <NavItem className="d-none d-lg-block ml-lg-4">
                <Button
                
                  className="btn-icon"
                  color="primary"
                  href="/auth/register"
                  
                >
                  <span className="btn-inner--icon">
                    <i className="fas fa-shopping-cart mr-2" />
                  </span>
                  <span className="nav-link-inner--text">Registrieren</span>
                </Button>
              </NavItem>
              {/* Wenn eingeloggt */}
              {/* <NavItem className="d-none d-lg-block ml-lg-4">
                <Button
                
                  className="btn-neutral btn-icon"
                  color="default"
                  href="/auth/register"
                  
                >
                  <span className="btn-inner--icon">
                    <i className="fas fa-shopping-cart mr-2" />
                  </span>
                  <span className="nav-link-inner--text">Store</span>
                </Button>
              </NavItem> */}
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
