import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./Counter.css";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollPercent = (scrollTop / windowHeight) * 100;

      if (scrollPercent >= 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
      className="counter-dev"
    >
      <div className="conters">
        <div
          className={` counter animate__animated ${
            isScrolled ? "animate__slideInDown" : ""
          }`}
        >
          <h1>Residential Projects</h1>
          <h2 className="count">
            {counterOn && (
              <CountUp start={0} end={199} duration={3} delay={false} />
            )}
            +
          </h2>
        </div>
        <div
          className={` counter animate__animated ${
            isScrolled ? "animate__slideInDown" : ""
          }`}
        >
          <h1>Public Projects</h1>
          <h2 className="count">
            {counterOn && (
              <CountUp start={0} end={50} duration={3} delay={false} />
            )}
            +
          </h2>
        </div>
        <div
          className={`counter animate__animated ${
            isScrolled ? "animate__slideInDown" : ""
          }`}
        >
          <h1>Government Projects</h1>
          <h2 className="count">
            {counterOn && (
              <CountUp start={0} end={30} duration={3} delay={false} />
            )}
            +
          </h2>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
