import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import Image from "../assets/images/Forgein students.png";
import classes from "../styles/Fourth.module.css";

const Fourth = () => {
  return (
    <Container fluid className={classes.fourthmain}>
      <div className={classes.divider}>
        <Row>
          <Col>
            <h2 className={`${classes.h1}fw-bold mt-3`}>ESSENTIAL RESOURCES</h2>
            <p>
              Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
              ligula. Integer efficitur tellus metus, sed feugiat leo posuere.
            </p>
            <div className={`${classes.thirdcard} mt-4`}>
              <h4 className="ps-3 mt-3">First year students</h4>
              <p className="ps-3 mt-1">
                Integer efficitur tellus metus, sed feugiat leo posuere ac.
                Morbi vitae tincidunt mi, et malesuada massa.
              </p>

              <FontAwesomeIcon
                className={`${classes.iconarrow}  px-3 py-3`}
                icon={faAngleRight}
              />
            </div>
            <div className={`${classes.thirdcard} mt-4`}>
              <h4 className="ps-3 mt-3">Tuition Fee</h4>
              <p className="ps-3 mt-1">
                Integer efficitur tellus metus, sed feugiat leo posuere ac.
                Morbi vitae tincidunt mi, et malesuada massa.
              </p>
              <FontAwesomeIcon
                className={`${classes.iconarrow}  px-3 py-3`}
                icon={faAngleRight}
              />
            </div>
            <div className={`${classes.thirdcard} mt-4`}>
              <h4 className="ps-3 mt-3">International students</h4>
              <p className="ps-3 mt-1">
                Integer efficitur tellus metus, sed feugiat leo posuere ac.
                Morbi vitae tincidunt mi, et malesuada massa.
              </p>
              <FontAwesomeIcon
                className={`${classes.iconarrow}  px-3 py-3`}
                icon={faAngleRight}
              />
            </div>
          </Col>
          <Col className={classes.imgtag}>
            <img className={classes.img} src={Image} alt="std" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Fourth;
