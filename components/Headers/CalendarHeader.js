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
// nodejs library to set properties for components
import PropTypes from "prop-types";
// reactstrap components
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import AddRecipe from '../recipes/AddRecipe'
import { UserContext } from '../../lib/context';
import { useContext } from 'react';
function ContactHeader({ name, parentName,btnName ,link}) {
  const { user: currentUser } = useContext(UserContext);
  return (
    <>
      <div className="header bg-dark pb-6">
        <Container>
          <div className="header-body">
            <Row className="align-items-center py-4">
              <Col lg="6" xs="7">
                <h6 className="h2 text-white d-inline-block mb-0">{name}</h6>{" "}
                <Breadcrumb
                  className="d-none d-md-inline-block ml-md-4"
                  listClassName="breadcrumb-links breadcrumb-dark"
                >
                  <BreadcrumbItem>
                    <a href="/recipes" onClick={(e) => e.preventDefault()}>
                      <i className="fas fa-home" />
                    </a>
                  </BreadcrumbItem>
                  
                  <BreadcrumbItem aria-current="page" className="active">
                    {name}
                  </BreadcrumbItem>
                </Breadcrumb>
              </Col>
              {/* <Col className="text-right" lg="6" xs="5"> */}
              {/* {currentUser &&<AddRecipe></AddRecipe>} */}
              {/* <Button
                  className="btn-neutral"
                  color="default"
                  href={link}
                
                  size="sm"
                >
                  {btnName}
                </Button>
               
              </Col> */}
            </Row>

           
          </div>
        </Container>
      </div>
    </>
  );
}

ContactHeader.propTypes = {
  name: PropTypes.string,
  parentName: PropTypes.string,
};

export default ContactHeader;