import { Col, Container, Row } from "react-bootstrap";
import image from "../assets/images/teacher.jpg";
import clases from "../styles/Secend.module.css";

const Secend = () => {
  return (
    <Container fluid className={clases.secend}>
      <div className={clases.divider}>
        <Row>
          <Col className={clases.column} lg={6}>
            <img className={clases.teacher} src={image} alt="teacher" />
          </Col>
          <Col className={clases.column} lg={6}>
            <h1 className="fw-bold">A COMPREHENSIVE TEACHING APPROACH</h1>
            <p className={`${clases.p} mt-4 `}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              felis felis, vulputate sit amet mauris et, semper aliquam ligula.
            </p>
            <p className={`${clases.p} mt-4 `}>
              Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
              ligula. Integer efficitur tellus metus, sed feugiat leo posuere
              ac.{" "}
            </p>
            <p className={`${clases.link}`}>Learn More</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default Secend;
