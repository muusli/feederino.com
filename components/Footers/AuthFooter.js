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

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

function AuthFooter() {
  return (
    <>
      <footer className="py-5" id="footer-main">
        <Container>
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="6">
              <div className="copyright text-center text-xl-left text-muted">
                © {new Date().getFullYear()}{" "}
                <a
                  className="font-weight-bold ml-1"
                  href="/aboutus"
                  // target="_blank"
                >
                  Feederino
                </a>
              </div>
            </Col>
            <Col xl="6">
              <Nav className="nav-footer justify-content-center justify-content-xl-end">
              <NavItem>
                  <NavLink
                    href="/contact"
                    // target="_blank"
                  >
                    Contact
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/changelog"
                    // target="_blank"
                  >
                    Changelog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/license"
                    // target="_blank"
                  >
                    License
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default AuthFooter;
