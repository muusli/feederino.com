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
import Link from "next/link";
// reactstrap components
import { Button, Card, CardBody, Container, Row, Col } from "reactstrap";

function IndexHeader() {
  return (
    <>
      <div className="header bg-info pt-5 pb-7">
        <Container>
          <div className="header-body">
            <Row className="align-items-center">
              <Col lg="6">
                <div className="pr-5">
                  <h1 className="display-2 text-white font-weight-bold mb-0">
                    Feederino
                  </h1>
                  <h2 className="display-4 text-white font-weight-light">
                    {/* Dein Community-Ernährungsassistent.
                    Für dich und deinen Genuss */}
                    Gemeinsam. Individuell. Genießen.
                  </h2>
                  {/* <p className="text-white mt-4">
                   Muuslimedia soll ein Beginn sein.
                  </p> */}
                  <div className="mt-5">
                    <Link href="/recipes">
                      <Button className="btn-neutral my-2" color="default">
                        Erkunde den Feed
                      </Button>
                    </Link>
                    <Button
                      className="my-2"
                      color="default"
                      href="/auth/register"
                    >
                      Registrieren
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <Row className="pt-5">
                  <Col md="6">
                    <Card>
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow mb-4">
                          <i className="ni ni-active-40" />
                        </div>
                        <h5 className="h3">Leichtigkeit</h5>
                        <p>Ohne Stress zum Knabberglück.</p>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow mb-4">
                          <i className="ni ni-active-40" />
                        </div>
                        <h5 className="h3">Freiheit</h5>
                        <p>
                          Soll doch jeder essen wie er es will.
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="pt-lg-5 pt-4" md="6">
                    <Card className="mb-4">
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-success text-white rounded-circle shadow mb-4">
                          <i className="ni ni-active-40" />
                        </div>
                        <h5 className="h3">Transparenz</h5>
                        <p>
                         Wer weiß schon was man da isst?
                        </p>
                      </CardBody>
                    </Card>
                    <Card className="mb-4">
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-warning text-white rounded-circle shadow mb-4">
                          <i className="ni ni-active-40" />
                        </div>
                        <h5 className="h3">Anerkennung</h5>
                        <p>Jeder der möchte sollte beitragen dürfen und davon etwas haben</p>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-default" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
