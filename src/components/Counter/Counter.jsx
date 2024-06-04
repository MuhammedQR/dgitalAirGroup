import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./Counter.css";
import { useTranslation } from "react-i18next";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

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
      <div
        className="conters"
       
      >
        <div
          className={` counter animate__animated ${
            isScrolled ? "animate__slideInDown" : ""
          }`}
        >
          <h1>{t("residentialProjects")}</h1>
          <h2 className="count">
            {counterOn && (
              <CountUp start={0} end={1000} duration={3} delay={false} />
            )}
            +
          </h2>
        </div>
        <div
          className={` counter animate__animated ${
            isScrolled ? "animate__slideInDown" : ""
          }`}
        >
          <h1>{t("publicProjects")}</h1>
          <h2 className="count">
            {counterOn && (
              <CountUp start={0} end={64} duration={3} delay={false} />
            )}
            +
          </h2>
        </div>
        <div
          className={`counter animate__animated ${
            isScrolled ? "animate__slideInDown" : ""
          }`}
        >
          <h1>{t("governmentProjects")}</h1>
          <h2 className="count">
            {counterOn && (
              <CountUp start={0} end={42} duration={3} delay={false} />
            )}
            +
          </h2>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
