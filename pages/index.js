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
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import AuthFooter from "components/Footers/AuthFooter.js";

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
                    <a className="font-weight-bold text-info mt-5">
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
                    color="info"
                    href="https://www.creative-tim.com/learning-lab/nextjs/icons/argon-dashboard?ref=njsadp-index-page"
                    target="_blank"
                  >
                    View demo icons
                  </Button>
                  <Button
                    className="mt-3 mt-md-0"
                    color="default"
                    href="https://nucleoapp.com/?ref=1712"
                    target="_blank"
                  >
                    View all icons
                  </Button>
                </div>
              </Col>
            </Row>
            <div className="blur--hover">
              <a
                href="https://www.creative-tim.com/learning-lab/nextjs/icons/argon-dashboard?ref=njsadp-index-page"
                target="_blank"
              >
                <div className="icons-container blur-item mt-5">
                  <i className="icon ni ni-diamond" />

                  <i className="icon icon-sm ni ni-album-2" />
                  <i className="icon icon-sm ni ni-app" />
                  <i className="icon icon-sm ni ni-atom" />

                  <i className="icon ni ni-bag-17" />
                  <i className="icon ni ni-bell-55" />
                  <i className="icon ni ni-credit-card" />

                  <i className="icon icon-sm ni ni-briefcase-24" />
                  <i className="icon icon-sm ni ni-building" />
                  <i className="icon icon-sm ni ni-button-play" />

                  <i className="icon ni ni-calendar-grid-58" />
                  <i className="icon ni ni-camera-compact" />
                  <i className="icon ni ni-chart-bar-32" />
                </div>
                <span className="blur-hidden h5 text-success">
                  Entdecke unsere Ernährungsvielfalt
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
                  <span className="text-success">
                    Du wirst gebraucht!
                  </span>
                </h2>
                <p className="lead">
                  Egal ob du ein Rezept hochlädst. Die Autoren unterstützt. Feedback hast. Oder aktiv das Projekt mitgestalten willst. Jeder Beitrag zählt. Kontaktiere uns gerne, wir freuen uns über jede Nachricht.
                </p>
                <div className="btn-wrapper">
                  <Button
                    className="btn-neutral mb-3 mb-sm-0"
                    color="default"
                    href="https://www.creative-tim.com/product/nextjs-argon-dashboard?ref=njsadp-index-page"
                    target="_blank"
                  >
                    <span className="btn-inner--text">Unterstütze uns auf Patreon</span>
                  </Button>
                  <Button
                    className="btn-icon mb-3 mb-sm-0"
                    color="info"
                    href="/contact"
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <i className="ni ni-basket" />
                    </span>
                    <span className="btn-inner--text">Kontaktiere uns</span>
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
