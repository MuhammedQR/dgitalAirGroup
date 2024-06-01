import about_img from "../../assets/about-image.jpg";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <img src={about_img} alt="" className="about-img" />
        </div>
        <div className="about-right">
          <h3>About Us</h3>
          <h2>
            Digital Air Condition: Your Trusted Partner for Climate Control
            Solutions
          </h2>
          <p>
            Founded in the early 2004s, Digital Air Condition has established
            itself as a leader in the building services industry. We combine a
            highly skilled workforce with a commitment to cutting-edge
            engineering practices to deliver exceptional service to a diverse
            clientele.
          </p>

          <p>
            Our team's expertise spans all aspects of air conditioning systems,
            from single split units in domestic settings to complex
            close-control systems and large-scale chiller installations for
            entire office buildings. We leverage the latest technology
            throughout the design, estimation, costing, and communication
            phases, ensuring a swift and professional response to all inquiries,
            regardless of project size.
          </p>

          <p>
            Digital Air Condition is at the forefront of building management
            system advancements. We integrate these innovative solutions into
            our designs, resulting in cost-effective implementations that
            benefit our clients. To maintain our team's exceptional skillset, we
            actively invest in ongoing engineering and health & safety training
            for all personnel.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
