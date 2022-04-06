import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import img1 from "../assets/images/part1.webp";
import img3 from "../assets/images/part3.webp";
import img4 from "../assets/images/part4.webp";
import img5 from "../assets/images/part5.webp";
import classes from "../styles/Partners.module.css";

const options = {
  margin: 30,
  responsiveClass: true,
  dots: false,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
};

export class Partenrs extends Component {
  render() {
    return (
      <div className={classes.partenrs}>
        <div class="container">
          <h2 className="text-center fw-bold">OUR PERTNERS</h2>
          <p className={`${classes.p} text-center mt-2`}>
            Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
            ligula. Integer efficitur tellus metus, sed feugiat leo posuere.
          </p>
        </div>
        <div class={`${classes.cont} container pt-3`}>
          <OwlCarousel className={classes.cont} {...options}>
            <div className={classes.logo}>
              <img src={img1} alt="img1" />
            </div>
            <div className={classes.logo}>
              <img src={img5} alt="img2" />
            </div>
            <div className={classes.logo}>
              <img src={img3} alt="img3" />
            </div>
            <div className={classes.logo}>
              <img src={img4} alt="img1" />
            </div>
            <div className={classes.logo}>
              <img src={img5} alt="img2" />
            </div>
            <div className={classes.logo}>
              {" "}
              <img src={img3} alt="img3" />
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Partenrs;
