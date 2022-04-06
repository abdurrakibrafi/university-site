import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Form, Row } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import logo from "../assets/images/logo2.webp";
import classes from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <Container fluid className={classes.footer}>
      <ScrollToTop
        smooth
        top="120"
        color="white"
        style={{ backgroundColor: "#0e8165" }}
      />
      ;
      <Row>
        <Col>
          <div className={classes.footer2}>
            <img className={classes.logo} src={logo} alt="" />
            <div className={classes.quick}>
              <h4 className={`${classes.title} text-white`}>Quick Links</h4>
              <ul className={classes.ulli}>
                <li className="mt-1">Work</li>
                <li className="mt-3">Services</li>
                <li className="mt-3">Products</li>
                <li className="mt-3">Tips & Tricks</li>
              </ul>
            </div>
            <div className={classes.quick}>
              <h4 className={`${classes.title} text-white`}>Progarms</h4>
              <ul className={classes.ulli}>
                <li className="mt-3">Air freight</li>
                <li className="mt-3">Ocean freight</li>
                <li className="mt-3">Large projects</li>
              </ul>
            </div>
            <div className={classes.quick}>
              <h4 className={`${classes.title} text-white`}>Resourses</h4>
              <ul className={classes.ulli}>
                <li className="mt-3">FAQ</li>
                <li className="mt-3">Submit Ticket</li>
                <li className="mt-3">Contact Us</li>
              </ul>
            </div>
            <div className={classes.quick}>
              <h4 className={`${classes.title} text-white`}>Newsletter</h4>
              <ul className={classes.ulli}>
                <p className="mt-1">Subscribe newsletter to get updates.</p>
                <Form.Group
                  className="mb-3 mt-3 d-flex flex-row"
                  controlId="formBasicEmail py-4"
                >
                  <Form.Control
                    className={`${classes.form}`}
                    type="email"
                    placeholder="Enter email"
                  />
                  <FontAwesomeIcon
                    className={`${classes.paper} fs-4 text-white`}
                    icon={faPaperPlane}
                  />
                </Form.Group>

                <FontAwesomeIcon
                  className={`${classes.ic} px-2 fs-4 mt-2`}
                  icon={faFacebook}
                />
                <FontAwesomeIcon
                  className={`${classes.ic} px-2 fs-4`}
                  icon={faInstagram}
                />
                <FontAwesomeIcon
                  className={`${classes.ic} px-2 fs-4`}
                  icon={faTwitter}
                />
                <FontAwesomeIcon
                  className={`${classes.ic} px-2 fs-4`}
                  icon={faYoutube}
                />
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      <hr className={`${classes.hrr} text-white`}></hr>
      <p className={`${classes.copyright}`}>
        Copyright ©2022 All rights reserved | This template is made with by Rafi
      </p>
    </Container>
  );
};
export default Footer;
