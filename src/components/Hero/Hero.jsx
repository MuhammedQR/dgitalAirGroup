import "./Hero.css";
import arrow_icon from "../../assets/arrow.png";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <>
      <div className="hero container">
        <div className="hero-text">
          <h1>DIGITAL AIR CONDITION</h1>
          <h3>MAINTENANCE OF AC</h3>
          <p>
            Enjoy comfort and refreshment with one of the best air conditioning
            companies in the United Arab Emirates
          </p>

          <Link
            className="btn"
            to="services"
            smooth={true}
            offset={-280}
            duration={500}
          >
            Explore more <img src={arrow_icon} className="arrow" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
