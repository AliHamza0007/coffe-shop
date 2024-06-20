import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [isNavbarScroll, setNavbarScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarScroll(true);
      } else {
        setNavbarScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`${isNavbarScroll ? "navbarScroll" : "navbarFixed"}`}>
      <div className={`bg-green-dark  position-relative  `}>
        <div
          className={`py-md-5 py-0   bg-brown-normal   ${
            isNavbarScroll ? "hide-nav-com" : "show-nav-com d-lg-block  d-none"
          }    `}
        ></div>
        <nav className="container navbar navbar-expand-lg navbar-normal ">
          <div className="container-fluid">
            <NavLink className="navbar-brand d-lg-none   d-block" to="#">
              <p className="mb-0 text-brown-normal fw-bold fs-2">
                {" "}
                Coffee Shop
              </p>
            </NavLink>
            <NavLink
              className={`navbar-brand navbar-brand-logo  
               ${
                 isNavbarScroll
                   ? "hide-nav-com"
                   : "show-nav-com d-lg-block  d-none"
               }   
                            `}
              to="#"
            >
              <img className="img-fluid" src={logo} alt="logo" />
            </NavLink>

            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-lg-auto  mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="#"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link  active"
                    aria-current="page"
                    to="#"
                  >
                    News
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link  active"
                    aria-current="page"
                    to="#"
                  >
                    Menus
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link  active"
                    aria-current="page"
                    to="#"
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="#">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
