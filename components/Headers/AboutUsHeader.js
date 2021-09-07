import React from "react";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function Header5() {
  return (
    <>
      <header className="header-5">
        
           
        <div className="page-header">
          <Container>
            <Row className="align-items-center text-left">
              <Col lg="5" xs="12">
                <h1 className="display-3">
                  Design with us,
                  <span className="text-primary">Develop Anything.</span>
                </h1>
                <p className="lead pb-4">
                  We aim high at being focused on building relationships with
                  our clients and community. Using our creative gifts drives
                  this foundation.
                </p>
                <Row className="row-input">
                  <Col sm="8" xs="12">
                    <Input
                      aria-label="Your email"
                      id="signupSrEmail"
                      name="email"
                      placeholder="Your email"
                      type="email"
                    ></Input>
                  </Col>
                  <Col className="pl-lg-0" sm="4" xs="12">
                    <Button block color="primary" type="submit">
                      More
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col className="pl-0" lg="7" xs="12">
                <img
                  alt="..."
                  className="ml-lg-5"
                  src={require("assets/img/brand/muusli.png")}
                  width="100%"
                ></img>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </>
  );
}

export default Header5;
