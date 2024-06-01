import { useState, useEffect } from "react";
import "./Services.css";
import serviceImgeOne from "../../assets/AirConditionService.jpeg";
import serviceImgeTwo from "../../assets/DesignService.jpeg";
import serviceImgeThree from "../../assets/MechanicalService.jpeg";
import serviceImgeFour from "../../assets/ProjectService.jpg";
import whatsapp_icon from "../../assets/icons8-whatsapp-94.png";
import arrow_white_icon from "../../assets/icons8-arrow-24.png";

const Services = () => {
  const serviceData = [
    {
      title: "Air Conditioning Services",
      image: serviceImgeOne,
      description:
        "Complete AC solutions for UAE homes & businesses. Installation, maintenance & more for optimal comfort!",
      listOne: "Split cooling / heat pump systems",
      listTwo: "VRF inc. gas fired installations",
      listThree: "Chiller replacement",
      listFour: "Domestic cooling solutions",
      listFive: "Server farm close control cooling",
    },
    {
      title: "Design Services",
      image: serviceImgeTwo,
      description:
        "We harness advanced technologies to enable our engineers to provide professional services that include:",
      listOne: "Feasibility studies",
      listTwo: "Energy audits",
      listThree: "Detailed engineering designs",
      listFour: "engineering design review",
      listFive: "system component design and construction",
    },
    {
      title: "Mechanical Services",
      image: serviceImgeThree,
      description:
        "Complete AC solutions: Installation, maintenance, repair & energy-efficient programming.",
      listOne: "Clean and maintain AC components ",
      listTwo: "Troubleshoot and fix AC issues ",
      listThree: "Adjust and program AC ",
      listFour: "Assess AC efficiency",
      listFive: "Repair AC components",
    },
    {
      title: "Project Management",
      image: serviceImgeFour,
      description:
        "Delivering AC projects on time and within budget with expert project managers and a skilled support team of tradespeople.",
      listOne: "On-Time and Budget-Friendly Delivery",
      listTwo: "Expert Project Management",
      listThree: "Skilled Tradespeople Support Team",
      listFour: "Streamlined AC Project Execution",
      listFive: "Guaranteed Client Satisfaction",
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
          <div className="service-details ">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              <li>{service.listOne}</li>
              <li>{service.listTwo}</li>
              <li>{service.listThree}</li>
              <li>{service.listFour}</li>
              <li>{service.listFive}</li>
            </ul>
            <div className="btn-div">
              <button onClick={handleWhatsAppClick}>
                Service Request
                <img src={arrow_white_icon} />
              </button>
              <img
                src={whatsapp_icon}
                alt="whatsappIcon"
                className="whatsapp-btn"
                onClick={handleWhatsAppClick}
              />
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
          <div className="service-details ">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              <li>{service.listOne}</li>
              <li>{service.listTwo}</li>
              <li>{service.listThree}</li>
              <li>{service.listFour}</li>
              <li>{service.listFive}</li>
            </ul>
            <div className="btn-div" onClick={handleWhatsAppClick}>
              <button>
                Service Request <img src={arrow_white_icon} />
              </button>
              <img
                src={whatsapp_icon}
                alt="whatsappIcon"
                className="whatsapp-btn"
                onClick={handleWhatsAppClick}
              />
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
