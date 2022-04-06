import { Carousel } from "react-bootstrap";
import img2 from "../assets/images/landing2.jpg";
import img3 from "../assets/images/landing3.jpg";
import classes from "../styles/Landing.module.css";

const carusleContainer = () => {
  return (
    <Carousel
      fade={true}
      controls={false}
      pause={false}
      style={{ height: "100vh" }}
    >
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 position-absolute "
          src={img3}
          style={{
            height: "100vh",
            width: "20px",
            backgroundAttachment: "fixed",
          }}
          alt="First slide"
        />
        <div
          className={`caption position-relative ${classes.maincaption}`}
          style={{ height: "100vh" }}
        >
          <h3 className={classes.caption}>EDUCATION & SCHOOL</h3>
          <p className={classes.caption1}>
            SHOWCASE COURSES, <br />
            EVENT AND MORE!
          </p>
          <p className={`${classes.para} text-white`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse{" "}
            <br /> varius enim in eros elementum tristique.
          </p>
          <button className={`${classes.but} p-2 px-3 py-3`}>
            {" "}
            Get Started Now
          </button>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 position-absolute"
          src={img2}
          style={{ height: "100vh" }}
          alt="Second slide"
        />
        <div
          className={`caption position-relative ${classes.maincaption}`}
          style={{ height: "100vh" }}
        >
          <h3 className={classes.caption}>EDUCATION & SCHOOL</h3>
          <p className={classes.caption1}>
            SHOWCASE COURSES, <br />
            EVENT AND MORE!
          </p>
          <p className={`${classes.para} text-white`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse{" "}
            <br /> varius enim in eros elementum tristique.
          </p>

          <button className={`${classes.but} p-2 px-3 py-3`}>
            {" "}
            Get Started Now
          </button>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};
export default carusleContainer;
