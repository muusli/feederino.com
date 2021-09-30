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
  InputGroupAddon,
  Button,
  Container,
  Row,
  Input,
  InputGroup,
  Modal, ModalBody,
  Col,
  InputGroupText,
  ModalFooter,
} from "reactstrap";

function ContactHeader({ name, parentName,btnName ,link,meals, btnMethod, phoneNumber2}) {
    const [modalOpen, setModalOpen] = React.useState(false)
    const [phoneNumber, setPhoneNumber] = React.useState(phoneNumber2)
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
              <Col className="text-right" lg="6" xs="5">
              {/* {currentUser &&<AddRecipe></AddRecipe>} */}
              {/* <Button
                  className="btn-neutral"
                  color="default"
                  href={link}
                onClick={() => setModalOpen(!modalOpen)}
                  size="sm"
                >
                  {btnName}
                </Button> */}
               
              </Col>
            </Row>
<Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}><ModalBody><label className="form-control-label" htmlFor="exampleFormControlTextarea1">
									Wie lautet deine Telefonnummer?
								</label><InputGroup><Input placeholder="z.B. +491234567889"defaultValue={phoneNumber2} onChange={(e)=>{setPhoneNumber(e.target.value)}}></Input><InputGroupAddon addonType="append">
                              <InputGroupText>
                                <i className="fas fa-phone" />
                              </InputGroupText>
                            </InputGroupAddon></InputGroup></ModalBody><ModalFooter><Button color="primary" onClick={()=> btnMethod(phoneNumber)}>Senden</Button></ModalFooter></Modal>
           
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