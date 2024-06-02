import React from "react";
import "./Contact.css";
import message_icon from "../../assets/message.png";
import mob_icon from "../../assets/icons8-iphone-14-96.png";
import tel_icon from "../../assets/icons8-phone-94.png";
import fax_icon from "../../assets/icons8-fax-96.png";
import email_icon from "../../assets/icons8-email-94.png";
import location_icon from "../../assets/icons8-location-96.png";
import white_arrow_icon from "../../assets/icons8-arrow-24.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const { t } = useTranslation();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(`${t("formSubmissionsetResult")}`);
    const formData = new FormData(event.target);

    formData.append("access_key", "d11c9de9-d10d-413e-be61-f3c117563615");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(`${t("formSubmissionResult")}`);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      className="contact"
      dir={`${i18next.language === "ar" ? "rtl" : "ltr"}`}
    >
      <div className="contact-col">
        <h3>
          {t("contactUsTitle")} <img src={message_icon} alt="message icon" />
        </h3>
        <p>{t("contactUsDescription")}</p>

        <ul>
          <li>
            <img src={email_icon} alt /> {t("emailAddress")}
          </li>
          <li>
            <img src={tel_icon} alt />
            {t("phoneNumberLandline")}
          </li>
          <li>
            <img src={mob_icon} alt /> {t("phoneNumberMobile")}
          </li>
          <li>
            <img src={fax_icon} alt /> {t("faxNumber")}
          </li>
          <li>
            <img src={location_icon} alt />
            {t("addressLine1")}
            <br /> {t("addressLine2")}
            <br /> {t("addressLine3")}
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form
          onSubmit={onSubmit}
          dir={`${i18next.language === "ar" ? "rtl" : "ltr"}`}
        >
          <label>{t("yourNamePlaceholder")}</label>
          <input
            type="text"
            name="name"
            placeholder={`${i18next.language === "ar" ? "الأسم" : "your name"}`}
            required
          />
          <label>{t("phoneNumberPlaceholder")}</label>
          <input type="tel" name="phone" placeholder="+971" required />
          <label>{t("writeYourMessagePlaceholder")}</label>
          <textarea
            name="message"
            id=""
            rows={6}
            placeholder={`${
              i18next.language === "ar" ? "أدخل رسالتك" : "your Message"
            }`}
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            {t("submitButtonLabel")} <img src={white_arrow_icon} />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
