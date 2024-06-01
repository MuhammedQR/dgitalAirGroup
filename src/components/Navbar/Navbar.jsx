import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logoWithBg.jpg";
import { Link } from "react-scroll";
import menu_icon from "../../assets/burger-menu-5.svg";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  });

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "nav-dark" : ""}`}>
      <img src={logo} className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li className="">
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} offset={-280} duration={500}>
            Our Services
          </Link>
        </li>
        <li className="">
          <Link to="counter" smooth={true} offset={-290} duration={500}>
            Our Achievements
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-100} duration={500}>
            About us
          </Link>
        </li>

        <li>
          <Link to="testimonials" smooth={true} offset={-210} duration={500}>
            Testimonials
          </Link>
        </li>

        <li>
          <Link
            className="btn"
            to="contact"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
