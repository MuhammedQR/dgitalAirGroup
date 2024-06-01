import React from "react";
import "./Contact.css";
import message_icon from "../../assets/message.png";
import mob_icon from "../../assets/icons8-iphone-14-96.png";
import tel_icon from "../../assets/icons8-phone-94.png";
import fax_icon from "../../assets/icons8-fax-96.png";
import email_icon from "../../assets/icons8-email-94.png";
import location_icon from "../../assets/icons8-location-96.png";
import white_arrow_icon from "../../assets/icons8-arrow-24.png";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d11c9de9-d10d-413e-be61-f3c117563615");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={message_icon} alt="message icon" />
        </h3>
        <p>
          Contact us today for a free consultation. Our expert team is happy to
          assist you and answer all your questions.
        </p>

        <ul>
          <li>
            <img src={email_icon} alt /> info@digitalgroup.com
          </li>
          <li>
            <img src={tel_icon} alt /> 02-6227176
          </li>
          <li>
            <img src={mob_icon} alt /> 050-8003356
          </li>
          <li>
            <img src={fax_icon} alt /> 02-555-8229
          </li>
          <li>
            <img src={location_icon} alt />
            Mazyad mall , tower 2 , 7th floor,
            <br /> Muhamad Bin Zayd, ABU DHABI,
            <br /> United Arab Emirates.
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your Message</label>
          <textarea
            name="message"
            id=""
            rows={6}
            placeholder="Enter your Message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow_icon} />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
