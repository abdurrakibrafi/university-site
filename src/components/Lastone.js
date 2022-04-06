import { Col, Container, Row } from "react-bootstrap";
import img from "../assets/images/Lastone.jpg";
import classes from "../styles/Lastone.module.css";

const Lastone = () => {
  return (
    <Container fluid className={classes.lastone}>
      <Row>
        <Col className={classes.col1}>
          <img className={classes.img} src={img} alt="img" />
        </Col>
        <Col className={classes.col2}>
          <div className={classes.Coldivit}>
            <h2 className="text-white fw-bold">
              TRUSTED BY OVER<br></br> 6000+ STUDENTS
            </h2>
            <p className={classes.p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              felis felis, vulputate sit amet mauris et, semper aliquam ligula.
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt malesuada massa.
            </p>
            <p className={classes.p}>
              Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
              ligula. Integer efficitur tellus metus, sed feugiat leo posuere
              ac. Morbi vitae tincidunt mi, et malesuada massa.
            </p>
            <p className={`${classes.link}`}>Join Now</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Lastone;
