import { useState } from "react";
import { NavLink } from "react-router-dom";
import burger from "../../assets/../Assets/burger-bar.png";
import logo from "../../assets/../Assets/logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import "./HomePageHeader.css";

const HomePageHeader = ({ scroll }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo-header">
          <img src={logo} alt="" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={burger} alt="" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link
                activeClass="Home"
                to="bannerWrapper"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="Home"
                to="features"
                spy={true}
                smooth={true}
                offset={-140}
                duration={500}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                activeClass="Home"
                to="pricing"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                activeClass="Home"
                to="howItWorks"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                activeClass="Home"
                to="contact"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <NavLink to="/login">
              <li className="login_nav">Login</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HomePageHeader;
