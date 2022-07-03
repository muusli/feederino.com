// import React, { Component } from 'react';
// import Router from 'next/router';

// export default function Landing() {
// 	React.useEffect(() => {
// 		Router.push('/recipes');
// 	});
// 	return <div />;
// }
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
/*eslint-disable*/
import React from "react";
import Link from "next/link";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Media,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import Image from 'next/image'
function Index() {
  return (
    <>
      <IndexNavbar />
      <div className="main-content">
        <IndexHeader />
        <section className="py-6 pb-9 bg-default">
          <Container fluid>
            <Row className="justify-content-center text-center">
              <Col md="6">
                <h2 className="display-3 text-white">
                  Wie bekommst du deine Butter aufs Brot?
                </h2>
                <p className="lead text-white">
				Ernährung ist ein Grundbedürfniss. Ohne Essen sterben wir. Der Weg vom Feld auf den Teller ist allerdings nicht ganz klar.
				Da kann man schnell die Lust verlieren. Feederino möchte einen Beitrag leisten, damit die Lebensmittelzubereitung wieder zur Freude wird. Damit du dich einfach so ernähren kannst wie du es willst.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg pt-lg-0 mt--7">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape bg-gradient-info text-white rounded-circle mb-4">
                          <i className="ni ni-world" />
                        </div>
                        <h4 className="h3 text-info text-uppercase">
                          Community
                        </h4>
                        <p className="description mt-3">
                          Alleine essen macht dick. Gemeinsam können wir das besser
                        </p>
                        {/* <div>
                          <Badge color="info" pill>
                            react
                          </Badge>
                          <Badge color="info" pill>
                            reactstrap
                          </Badge>
                          <Badge color="info" pill>
                            dashboard
                          </Badge>
                          <Badge color="info" pill>
                            template
                          </Badge>
                        </div> */}
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape bg-gradient-success text-white rounded-circle mb-4">
                          <i className="ni ni-ruler-pencil" />
                        </div>
                        <h4 className="h3 text-success text-uppercase">
                        Tools
                        </h4>
                        <p className="description mt-3">
                          Deine Ernährung sollte so sein wie du sie haben willst. Einfach und Praktikabel.
                        </p>
                        {/* <div>
                          <Badge color="success" pill>
                            npm
                          </Badge>
                          <Badge color="success" pill>
                            build tools
                          </Badge>
                        </div> */}
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape bg-gradient-warning text-white rounded-circle mb-4">
                          <i className="ni ni-books" />
                        </div>
                        <h4 className="h3 text-warning text-uppercase">
                          Know How
                        </h4>
                        <p className="description mt-3">
                          Wissen ist macht. Also lasst uns das vermitteln, was wir wissen
                        </p>
                        {/* <div>
                          <Badge color="warning" pill>
                            sass
                          </Badge>
                          <Badge color="warning" pill>
                            design
                          </Badge>
                          <Badge color="warning" pill>
                            customize
                          </Badge>
                        </div> */}
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-6">
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-md-2" md="6">
                <img
                layout="fill"
                  alt="..."
                  className="img-fluid"
                  src={require("assets/img/theme/landing-1.png")}
                />
              </Col>
              <Col className="order-md-1" md="6">
                <div className="pr-md-5">
                  <h1>Gemeinsam</h1>
                  <p>
				 Wie schaffen wir es uns so zu ernähren wie wir wollen? Wir wollen deinem Geschmack eine Plattform bieten. Teile deine Erfahrung und hilf weiter
                    
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="success">
                            <i className="ni ni-settings-gear-65" />
                          </Badge>
                        </div>
                        <div>
                          <h4 className="mb-0">Inspiration</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="success">
                            <i className="ni ni-html5" />
                          </Badge>
                        </div>
                        <div>
                          <h4 className="mb-0">Austausch</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="success">
                            <i className="ni ni-satisfied" />
                          </Badge>
                        </div>
                        <div>
                          <h4 className="mb-0">Unterstützung</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-6">
          <Container>
            <Row className="row-grid align-items-center">
              <Col md="6">
                <img
                  alt="..."
                  className="img-fluid"
                  src={require("assets/img/theme/landing-2.png")}
                />
              </Col>
              <Col md="6">
                <div className="pr-md-5">
                  <h1>Individuell</h1>
                  <p>
					  Ein Plan ist nichts, Planung ist alles. Doch wie kommt das Gericht am leichtesten vom Feld auf den Teller? Es ist das Ziel Werkzeuge zu entwickeln, mit denen du einfach zu deiner Ernährung kommst
                    
                  </p>
                  <Link href="/recipes">
                    <a className="font-weight-bold text-warning mt-5">
                      Explore pages
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-6">
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-md-2" md="6">
                <img
                  alt="..."
                  className="img-fluid"
                  src={require("assets/img/theme/landing-3.png")}
                />
              </Col>
              <Col className="order-md-1" md="6">
                <div className="pr-md-5">
                  <h1>Genießen</h1>
                  <p>
                    Wissen ist Macht. Oder so? 
                  </p>
                  <Link href="/recipes">
                    <a className="font-weight-bold text-default mt-5">
                      Explore widgets
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-7 section-nucleo-icons bg-white overflow-hidden">
          <Container>
            <Row className="justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">Rezeptideen</h2>
                <p className="lead">
                 Probiere dich gern durch die ständig wachsende Rezeptvielfalt
                </p>
                <div className="btn-wrapper">
                                    <Button
                    className="mt-3 mt-md-0"
                    color="primary"
                    href="/recipes/myRecipes"
                  >
                    Meine Rezepte
                  </Button>
                </div>
              </Col>
            </Row>
            <div className="blur--hover">
              <a
                href="/recipes"
              >
                <div className="icons-container blur-item mt-5">
                  {/* <i className="icon ni ni-diamond" />

                  <i className="icon icon-sm ni ni-album-2" />
                  <i className="icon icon-sm ni ni-app" />
                  <i className="icon icon-sm ni ni-atom" style={{backgroundImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"}}/>
                  <a
                  className=" avatar  mr-3"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <Image
                    alt="..."
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                  ></img>
                </a>
                <a
                  className=" icon avatar"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                   <Media src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" />
                </a> */}
                <i
                  className="icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className=""
                    style={{maxWidth:"250px", maxHeight:"130px"}}
                    src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  ></img>
                </i>
                <i
                  className="icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className=""
                    style={{maxWidth:"180px", maxHeight:"100px"}}
                    src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  ></img>
                </i><i
                  className="icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className=""
                    style={{maxWidth:"250px", maxHeight:"130px"}}
                    src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  ></img>
                </i><i
                  className="icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className=""
                    style={{maxWidth:"250px", maxHeight:"100px"}}
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                  ></img>
                </i><i
                  className="icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className=""
                    style={{maxWidth:"180px", maxHeight:"120px"}}
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  ></img>
                </i><i
                  className="icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className=""
                    style={{maxWidth:"200px", maxHeight:"200px"}}
                    src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                  ></img>
                </i><i
                  className="icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className=""
                    style={{maxWidth:"250px", maxHeight:"150px"}}
                    src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  ></img>
                </i><i
                  className="icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className=""
                    style={{maxWidth:"250px", maxHeight:"120px"}}
                    src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=714&q=80"
                  ></img>
                </i><i
                  className="icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className=""
                    style={{maxWidth:"250px", maxHeight:"120px"}}
                    src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                  ></img>
                </i><i
                  className="icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className=""
                    style={{maxWidth:"150px", maxHeight:"125px"}}
                    src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  ></img>
                </i><i
                  className="icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className=""
                    style={{maxWidth:"3000px", maxHeight:"220px"}}
                    src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  ></img>
                </i><i
                  className="icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className=""
                    style={{maxWidth:"150px", maxHeight:"125px"}}
                    src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  ></img>
                </i><i
                  className="icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className=""
                    style={{maxWidth:"150px", maxHeight:"250px"}}
                    src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  ></img>
                </i>
                  {/* <i className="icon ni ni-bag-17" />
                  <i className="icon ni ni-bell-55" />
                  <i className="icon ni ni-credit-card" />

                  <i className="icon icon-sm ni ni-briefcase-24" />
                  <i className="icon icon-sm ni ni-building" />
                  <i className="icon icon-sm ni ni-button-play" />

                  <i className="icon ni ni-calendar-grid-58" />
                  <i className="icon ni ni-camera-compact" />
                  <i className="icon ni ni-chart-bar-32" /> */}
                </div>
                <span className="blur-hidden h5 text-warning">
                  Entdecke deine Ernährung neu
                </span>
              </a>
            </div>
          </Container>
        </section>
        <section className="py-7">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">
                  Du hast Lust dich einzubringen?{" "}
                  <span className="text-warning">
                    Du wirst gebraucht!
                  </span>
                </h2>
                <p className="lead">
                  Egal ob du ein Rezept hochlädst. Die Autoren unterstützt. Feedback hast. Oder aktiv das Projekt mitgestalten willst. Jeder Beitrag zählt. Kontaktiere uns gerne, wir freuen uns über jede Nachricht.
                </p>
                <div className="btn-wrapper">
                  
                  <Button
                    className="btn-icon mb-3 mb-sm-0"
                    color="primary"
                    href="/contact"
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <i className="ni ni-send" />
                    </span>
                    <span className="btn-inner--text">Kontakt</span>
                  </Button>
                </div>
                
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <AuthFooter />
    </>
  );
}

export default Index;
