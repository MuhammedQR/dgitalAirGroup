import about_img from "../../assets/about-image.jpg";
import "./About.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="about">
        <div className="about-left">
          <img src={about_img} alt="" className="about-img" />
        </div>
        <div
          className="about-right"
          dir={`${i18next.language === "ar" ? "rtl" : "ltr"}`}
        >
          <h3>{t("aboutUsTitle")}</h3>
          <h2>{t("aboutUsSubTitle")}</h2>
          <p>{t("companyDescription")}</p>

          <p>{t("serviceExpertise")}</p>

          <p>{t("innovationCommitment")}</p>
          <p>{t("trainingInvestment")}</p>
        </div>
      </div>
    </>
  );
};

export default About;
