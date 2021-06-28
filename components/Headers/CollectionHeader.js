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
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Modal,
  ModalFooter,
  ModalBody,
  Form,
  FormGroup,
  InputGroup, Input
  
} from "reactstrap";
import classnames from 'classnames';
function CardsHeader({ name, parentName }) {
    const [ modalOpen, setModalOpen ] = React.useState(false);
    const [ title, setTitle ] = React.useState(false);
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
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fas fa-home" />
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      {parentName}
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem aria-current="page" className="active">
                    {name}
                  </BreadcrumbItem>
                </Breadcrumb>
              </Col>
              <Col className="text-right" lg="6" xs="5">
               
                <Button
                  className="btn-neutral"
                  color="default"
                  href="#pablo"
                  onClick={() => setModalOpen(true)}
                  size="sm"
                >
                  Neu
                </Button>
                <Modal className="modal-lg" toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
				<div className=" modal-header">
					<h5 className=" modal-title" id="exampleModalLabel">
						Kochbuch hinzufügen
					</h5>
					<button
						aria-label="Close"
						className=" close"
						type="button"
						onClick={() => setModalOpen(!modalOpen)}
					>
						<span aria-hidden={true}>×</span>
					</button>
				</div>
				<Form >
					<ModalBody>
						{' '}
						<Row>
							<Col md="12">
								<FormGroup>
									{/* <label className="form-control-label" htmlFor="exampleFormControlTextarea1">
										Kochbuchtitel
									</label> */}
									<InputGroup
										className={classnames('input-group-merge', {
											focused : title
										})}
									>
										{/* <InputGroupAddon addonType="prepend">
											<InputGroupText>
												<i classname="fas fa-user" />
											</InputGroupText>
										</InputGroupAddon> */}
										<Input
											placeholder="Titel"
											type="text"
											name="title"
											onFocus={(e) => setTitle(true)}
											onBlur={(e) => setTitle(false)}
										/>
									</InputGroup>
								</FormGroup>
							
							</Col>
						</Row>
					</ModalBody>
					<ModalFooter>
						<Button color="secondary" type="button" onClick={() => setModalOpen(!modalOpen)}>
							Close
						</Button>
						<Button type="submit" color="primary">
							Hinzufügen
						</Button>
					</ModalFooter>
				</Form>
			</Modal>
              </Col>
            </Row>

           
          </div>
        </Container>
      </div>
    </>
  );
}

CardsHeader.propTypes = {
  name: PropTypes.string,
  parentName: PropTypes.string,
};

export default CardsHeader;
