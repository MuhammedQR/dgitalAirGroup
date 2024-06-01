import { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next.png";
import back_icon from "../../assets/back.png";
import user_1 from "../../assets/user-1.png";
// import user_2 from "../../assets/user-2.png";
// import user_3 from "../../assets/user-3.png";
// import user_4 from "../../assets/user-4.png";

export const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const numSlides = slider.current?.children.length || 0; // Get number of slides

  const slideForward = () => {
    // Check if reached the last slide and loop back to first
    if (tx === -((numSlides - 1) * 25)) {
      tx = 0;
    } else if (tx >= -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Mohammed Qarwani 1</h3>
                  <span>company manager</span>
                </div>
              </div>
              <p>
                "I've been using Digital air conditioning for my heating and
                cooling needs for the past five years, and I've always been
                impressed with their service. They're always prompt,
                professional, and affordable. I highly recommend them to anyone
                looking for a reliable HVAC company."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Mohammed Qarwani 1</h3>
                  <span>company manager</span>
                </div>
              </div>
              <p>
                "I've been using Digital air conditioning for my heating and
                cooling needs for the past five years, and I've always been
                impressed with their service. They're always prompt,
                professional, and affordable. I highly recommend them to anyone
                looking for a reliable HVAC company."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Mohammed Qarwani 1</h3>
                  <span>company manager</span>
                </div>
              </div>
              <p>
                "I've been using Digital air conditioning for my heating and
                cooling needs for the past five years, and I've always been
                impressed with their service. They're always prompt,
                professional, and affordable. I highly recommend them to anyone
                looking for a reliable HVAC company."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Mohammed Qarwani 1</h3>
                  <span>company manager</span>
                </div>
              </div>
              <p>
                "I've been using Digital air conditioning for my heating and
                cooling needs for the past five years, and I've always been
                impressed with their service. They're always prompt,
                professional, and affordable. I highly recommend them to anyone
                looking for a reliable HVAC company."
              </p>
            </div>
          </li>
          {/* ... other slides ... */}
        </ul>
      </div>
    </div>
  );
};
