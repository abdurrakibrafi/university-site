import { Card, Col, Container, Row } from "react-bootstrap";
import Image from "../assets/images/study-2.jpg";
import Img from "../assets/images/study-group.jpg";
import clases from "../styles/Third.module.css";

const Third = () => {
  return (
    <Container fluid className={clases.third}>
      <div className={clases.title}>
        <h1 className="text-center fw-bold">PROGRAMS WE OFFER</h1>
        <p className={`${clases.p} text-center mt-2`}>
          Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
          ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac.
          Morbi vitae tincidunt mi, et malesuada massa.
        </p>
      </div>
      <div className={clases.divider}>
        <Row>
          <Col className="mt-4" lg={6}>
            <Card className={clases.maincard}>
              <div class={clases.imgwrapper}>
                <Card.Img className={clases.cardimg} variant="top" src={Img} />
              </div>
              <Card.Body className={clases.column}>
                <Card.Title className="fw-bold">Faculty of Arts</Card.Title>
                <Card.Text>
                  Integer efficitur tellus metus, sed feugiat leo posuere ac.
                  Morbi vitae tincidunt mi, et malesuada massa. Sed blandit
                  placerat elit sit amet condimentum.
                </Card.Text>
                <p className={`${clases.link}`}>Learn More</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-4" lg={6}>
            <Card className={`${clases.maincard}`}>
              <div class={clases.imgwrapper}>
                <Card.Img
                  className={clases.cardimg}
                  variant="top"
                  src={Image}
                />
              </div>
              <Card.Body className={clases.column}>
                <Card.Title className="fw-bold">Faculty of Arts</Card.Title>
                <Card.Text>
                  Integer efficitur tellus metus, sed feugiat leo posuere ac.
                  Morbi vitae tincidunt mi, et malesuada massa. Sed blandit
                  placerat elit sit amet condimentum.
                </Card.Text>
                <p className={`${clases.link}`}>Learn More</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default Third;
