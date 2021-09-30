import React from "react";
import classnames from "classnames";
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import firebase from 'firebase'
// reactstrap components
import {  Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
   Form,FormGroup, Button, Modal, ModalBody, ModalFooter,CardHeader, CardBody} from "reactstrap";
import GoogleAuth from './GoogleAuth'
function LoginModal() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const { register, handleSubmit, reset, watch, formState, errors} = useForm({
   		mode          : 'onChange'
	});
  const { isValid, isDirty } = formState;
  const [focusedEmail, setfocusedEmail] = React.useState(false);
  const [focusedPassword, setfocusedPassword] = React.useState(false);
  // const submitLoginForm = ({email, password}) => {
  // if (userExist) {} else {}

  // }
  

  const signUp = async ({email, password}) => {
    console.log(email)
  console.log(password)
    firebase.auth().createUserWithEmailAndPassword(email,password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });}

  const signIn = async ({email, password} )=> {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
  return (
    <>
      <Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
    Login
      </Button>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
         
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody><CardHeader className="bg-transparent pb-5">
                <div className="text-muted text-center mt-2 mb-3">
                  <small>Sign in with</small>
                </div>
                <div className="btn-wrapper text-center">
                  {/* <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="btn-inner--icon mr-1">
                      <Image
                        alt="..."
                        src={require("assets/img/icons/common/github.svg")}
                      />
                    </span>
                    <span className="btn-inner--text">Github</span>
                  </Button> */}
                  {/* <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="btn-inner--icon mr-1">
                      <Image
                        alt="..."
                        src={require("assets/img/icons/common/google.svg")}
                      />
                    </span>
                    <span className="btn-inner--text">Google</span>
                  </Button> */}
                  <GoogleAuth></GoogleAuth>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Or sign in/up with credentials</small>
                </div>
                <Form role="form" onSubmit={handleSubmit(signIn)}>
                  <FormGroup
                    className={classnames("mb-3", {
                      focused: focusedEmail,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="email"
                        name="email"
                        innerRef={register}
                        onFocus={() => setfocusedEmail(true)}
                        onBlur={() => setfocusedEmail(true)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: focusedPassword,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        name="password"
                        innerRef={register}
                        onFocus={() => setfocusedPassword(true)}
                        onBlur={() => setfocusedPassword(true)}
                      />
                    </InputGroup>
                  </FormGroup>
                  {/* <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id=" customCheckLogin"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor=" customCheckLogin"
                    >
                      <span className="text-muted">Remember me</span>
                    </label> 
                  </div>*/}
                  <div className="text-center">
                    <Button className="my-4" color="info" type="submit">
                      Sign in / Sign up
                    </Button>
                  </div>
                </Form>
              </CardBody>
       </ModalBody>
      </Modal>
    </>
  );
}




export default LoginModal
