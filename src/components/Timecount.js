import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "../styles/Time.module.css";

const Timecount = () => {
  const [timerday, setTimerday] = useState("00");
  const [timerhrs, setTimerhrs] = useState("000");
  const [timermin, setTimermin] = useState("0");
  const [timersec, setTimersec] = useState("00");

  let intervel = useRef();

  const starttimer = () => {
    const countdownDate = new Date("May 5, 2021 00:00:00").getTime();

    intervel = setInterval(() => {
      const newdate = new Date().getTime();
      const distance = countdownDate - newdate;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hrs = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const sec = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance > 0) {
        clearInterval(intervel.current);
      } else {
        setTimerday(days);
        setTimerhrs(hrs);
        setTimermin(min);
        setTimersec(sec);
      }
    }, 1000);
  };

  useEffect(() => {
    starttimer();
    return () => {};
  });

  return (
    <Container fluid className={classes.timecount}>
      <div className={classes.divider}>
        <Row>
          <Col className={`${classes.col1} text-white`}>
            <h6 className={classes.maintitle}>
              <span className={classes.title}>ENDS TOMORROW:</span> Join
              Teachable for $4,800 in bonus content
            </h6>
            <div className="counter">
              <div className={classes.days}>
                <div className={`${classes.tager} px-2 mt-3`}>
                  <p>
                    {" "}
                    {timerday}
                    <p className={`${classes.tagger2} `}>Days</p>
                  </p>
                </div>
                <div className={`${classes.tager} px-2 mt-3`}>
                  <p className={classes.tager}>
                    {" "}
                    {timerhrs}
                    <p className={`${classes.tagger2} `}>Houres</p>
                  </p>
                </div>
                <div className={`${classes.tager} px-2 mt-3`}>
                  <p>
                    {" "}
                    {timermin}
                    <br />
                    <p className={`${classes.tagger2} `}>Minutes</p>
                  </p>
                </div>
                <div className={`${classes.tager} px-2 mt-3`}>
                  <p>
                    {timersec} <br />
                    <p className={`${classes.tagger2} `}>Seconds</p>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Timecount;
