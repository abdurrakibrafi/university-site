import { Col, Container, Row } from "react-bootstrap";
import img from "../assets/images/Event1.webp";
import img2 from "../assets/images/Event2.webp";
import classes from "../styles/Video.module.css";

const Event = () => {
  return (
    <Container className={classes.event}>
      <h1 className="fw-bold text-center">Upcoming Events</h1>
      <p className={`${classes.p} text-center mt-2`}>
        {" "}
        Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
        ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac.
      </p>
      <Row>
        <Col>
          <div className={classes.col1}>
            <h5 className={`${classes.date} px-4 py-4`}>
              07 <br></br>Jun
            </h5>
            <div className={`${classes.divide}`}>
              <h4>Student Festival</h4>
              <p>Grand Central Park</p>
              <p className="mt-4 text-muted">
                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                vitae <br></br>tempor nisl ligula vel nunc. Proin quis mi
                malesuada, finibus tortor.
              </p>
            </div>
            <img className={classes.eventimg} src={img2} alt="event1" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={classes.col2}>
            <h5 className={`${classes.date} px-4 py-4`}>
              07 <br></br>Jun
            </h5>
            <div className={`${classes.divide}`}>
              <h4>Student Festival</h4>
              <p>Grand Central Park</p>
              <p className="mt-4 text-muted">
                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                vitae <br></br>tempor nisl ligula vel nunc. Proin quis mi
                malesuada, finibus tortor.
              </p>
            </div>
            <img className={classes.eventimg} src={img} alt="event1" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={classes.col2}>
            <h5 className={`${classes.date} px-4 py-4`}>
              07 <br></br>Jun
            </h5>
            <div className={`${classes.divide}`}>
              <h4>Student Festival</h4>
              <p>Grand Central Park</p>
              <p className="mt-4 text-muted">
                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                vitae <br></br>tempor nisl ligula vel nunc. Proin quis mi
                malesuada, finibus tortor.
              </p>
            </div>
            <img className={classes.eventimg} src={img2} alt="event1" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Event;
