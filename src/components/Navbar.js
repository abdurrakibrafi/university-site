import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  Form,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import img from "../assets/images/download.webp";
import classes from "../styles/Navbar.module.css";

const Navbars = () => {
  const [modal, setModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <Navbar bg="light" className={classes.mainnavbar} expand="lg" sticky="top">
      <Container fluid className={classes.navbar}>
        <Navbar.Brand className={classes.logo} href="#home">
          <img src={img} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link className="text-black fs-6" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-black fs-6" href="#link">
              About
            </Nav.Link>
            <Nav.Link className="text-black fs-6" href="#link">
              Programs
            </Nav.Link>
            <Dropdown
              onMouseLeave={() => setShowDropdown(false)}
              onMouseOver={() => setShowDropdown(true)}
              style={{ width: "156px" }}
            >
              <Dropdown.Toggle
                className={classes.drop}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "black",
                }}
                id="dropdown-basic"
              >
                Why Choose Us
              </Dropdown.Toggle>

              <Dropdown.Menu show={showDropdown} style={{ width: "155px" }}>
                <Dropdown.Item href="#/action-1" className={classes.dropbtn}>
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" className={classes.dropbtn}>
                  Another action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" className={classes.dropbtn}>
                  Something else
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Modal size="5px" isOpen={modal} toggle={() => setModal(!modal)}>
              <ModalHeader
                className={classes.head}
                toggle={() => setModal(!modal)}
              >
                LogIn Your Dashboard
              </ModalHeader>
              <ModalBody>
                <p className="text-center">
                  <img src={img} alt="logo" />
                </p>
                <Form>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    required={true}
                    placeholder="Enter email"
                  />
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    required={true}
                    placeholder="Password"
                  />
                  <Form.Check
                    type="checkbox"
                    className="mt-2"
                    label="Agree with privacy policy"
                  />
                  <Button className={`${classes.button} mt-4`} type="submit">
                    Login
                  </Button>
                </Form>
              </ModalBody>
            </Modal>
            <Nav.Link
              onClick={() => setModal(true)}
              className="text-black fs-6"
              href="#link"
            >
              Log in
            </Nav.Link>
          </Nav>
          <div className={`${classes.contact}} d-flex flex-row mt-1 `}>
            <p className={` ${classes.p2}  `}>
              Call Us : 0 (78) 675 3674 <div class="vr fw-bold p-"></div>
            </p>

            <FontAwesomeIcon
              className={`p-2  fs-4 ${classes.font1}`}
              icon={faFacebookSquare}
            />
            <FontAwesomeIcon
              className={`p-2  fs-4 ${classes.font2}`}
              icon={faTwitterSquare}
            />
            <FontAwesomeIcon
              className={`p-2  fs-4 ${classes.font3}`}
              icon={faInstagramSquare}
            />
            <FontAwesomeIcon
              className={`p-2  fs-4 ${classes.font4}`}
              icon={faYoutubeSquare}
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
