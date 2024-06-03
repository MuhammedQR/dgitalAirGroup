import { useState, useEffect } from "react";
import "./Services.css";
import serviceImgeOne from "../../assets/AirConditionService.jpeg";
import serviceImgeTwo from "../../assets/DesignService.jpeg";
import serviceImgeThree from "../../assets/MechanicalService.jpeg";
import serviceImgeFour from "../../assets/ProjectService.jpg";
import arrow_white_icon from "../../assets/icons8-arrow-24.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const Services = () => {
  const { t } = useTranslation();
  const serviceData = [
    {
      title: t("Service_1_Title"),
      image: serviceImgeOne,
      description: t("Service_1_Description"),
      listOne: t("Service_1_List_1"),
      listTwo: t("Service_1_List_2"),
      listThree: t("Service_1_List_3"),
      listFour: t("Service_1_List_4"),
      listFive: t("Service_1_List_5"),
      button: t("Service_Request"),
    },
    {
      title: t("Service_2_Title"),
      image: serviceImgeTwo,
      description: t("Service_2_Description"),
      listOne: t("Service_2_List_1"),
      listTwo: t("Service_2_List_2"),
      listThree: t("Service_2_List_3"),
      listFour: t("Service_2_List_4"),
      listFive: t("Service_2_List_5"),
      button: t("Service_Request"),
    },
    {
      title: t("Service_3_Title"),
      image: serviceImgeThree,
      description: t("Service_3_Description"),
      listOne: t("Service_3_List_1"),
      listTwo: t("Service_3_List_2"),
      listThree: t("Service_3_List_3"),
      listFour: t("Service_3_List_4"),
      listFive: t("Service_3_List_5"),
      button: t("Service_Request"),
    },
    {
      title: t("Service_4_Title"),
      image: serviceImgeFour,
      description: t("Service_4_Description"),
      listOne: t("Service_4_List_1"),
      listTwo: t("Service_4_List_2"),
      listThree: t("Service_4_List_3"),
      listFour: t("Service_4_List_4"),
      listFive: t("Service_4_List_5"),
      button: t("Service_Request"),
    },
  ];

  const [isVisibleServices, setIsVisibleServices] = useState(
    new Array(serviceData.length).fill(false)
  );

  const handleScroll = () => {
    const serviceDivs = document.querySelectorAll(".service");

    serviceDivs.forEach((div, index) => {
      const windowHeight = window.innerHeight;
      const divTop = div.getBoundingClientRect().top;

      isVisibleServices[index] = divTop < windowHeight;
    });

    setIsVisibleServices([...isVisibleServices]);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "+971508003356";
    const encodedNumber = encodeURIComponent(phoneNumber);
    const whatsappUrl = `https://wa.me/${encodedNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  const renderService = (service, index) => (
    <div
      key={index}
      className={`service   animate__animated ${
        isVisibleServices[index]
          ? "animate__fadeInLeftBig" // Reverse order for even divs (image on right)
          : ""
      }`}
    >
      {/* Conditionally render image and details based on index (even/odd) */}
      {index % 2 === 0 ? ( // Image on right for even divs
        <div className="reverse">
          <div
            className={`service-details ${
              i18next.language == "ar" ? "service-details-ar " : ""
            }`}
          >
            <h3>{service.title}</h3>
            <p dir={`${i18next.language === "ar" ? "rtl" : "ltr"}`}>
              {service.description}
            </p>
            <ul dir={`${i18next.language === "ar" ? "rtl" : "ltr"}`}>
              <li>{service.listOne}</li>
              <li>{service.listTwo}</li>
              <li>{service.listThree}</li>
              <li>{service.listFour}</li>
              <li>{service.listFive}</li>
            </ul>
            <div className="btn-div">
              <button onClick={handleWhatsAppClick}>
                {service.button}
                <img src={arrow_white_icon} />
              </button>
            </div>
          </div>

          <img
            src={service.image}
            alt="image"
            className="services-img"
            onClick={handleWhatsAppClick}
          />
        </div>
      ) : (
        // Image on left for odd divs
        <>
          <img src={service.image} alt="image" className="services-img" />
          <div
            className={`service-details ${
              i18next.language == "ar" ? "service-details-ar " : ""
            }`}
          >
            <h3>{service.title}</h3>
            <p dir={`${i18next.language === "ar" ? "rtl" : "ltr"}`}>
              {service.description}
            </p>
            <ul dir={`${i18next.language === "ar" ? "rtl" : "ltr"}`}>
              <li>{service.listOne}</li>
              <li>{service.listTwo}</li>
              <li>{service.listThree}</li>
              <li>{service.listFour}</li>
              <li>{service.listFive}</li>
            </ul>
            <div className="btn-div" onClick={handleWhatsAppClick}>
              <button>
                {service.button} <img src={arrow_white_icon} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="services-div">
      <div className="services">{serviceData.map(renderService)}</div>
    </div>
  );
};

export default Services;
