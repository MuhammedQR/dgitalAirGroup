import "./Hero.css";
import arrow_icon from "../../assets/arrow.png";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import BtnI18n from "../translateBtn/BtnI18n";
const Hero = () => {
  const { t } = useTranslation();
  return (
    <>

      <div className="hero container">  
      
        <div className="hero-text">
          <h1>{t("Hero_Title")}</h1>
          <h3>{t("Hero_Subtitle")}</h3>
          <p>{t("Hero_Description")}</p>

          <Link
            className="btn"
            to="services"
            smooth={true}
            offset={-280}
            duration={500}
          >
            {t("Explore_More")} <img src={arrow_icon} className="arrow" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
