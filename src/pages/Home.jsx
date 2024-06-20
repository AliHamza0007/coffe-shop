import sectionbg1 from "../assets/section-bg-1.png";
import sectionbg2 from "../assets/section-bg-2.png";
import sectionImage1 from "../assets/sectionImage1.png";
import sectionImage2 from "../assets/section-image-2.png";
import logo from "../assets/logo.png";
import menu_img_1 from "../assets/menu_img_1.png";
import menu_img_2 from "../assets/menu_img_2.png";
import menu_img_3 from "../assets/menu_img_3.png";
import menu_img_4 from "../assets/menu_img_4.png";
import menus_BG_botom from "../assets/menus_BG_botom.png";
import menus_BG_top from "../assets/menus_BG_top.png";
import section_mg_4 from "../assets/section_mg_4.png";
import menu_5_img from "../assets/menu_5_img.png";
import section_7_img from "../assets/section_7_img.png";
import section_8_img from "../assets/section-img-8.png";
import "./Home.css";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div>
      {/* section-1 starts */}
      <section className=" bg-brown-normal ">
        <div className="   position-relative">
          <div className="col-md-7 col-12 ms-md-auto ">
            <img src={sectionbg1} alt="img" className="img-fluid" />
          </div>
          <div className="parent-content pb-3  ">
            <div className=" row  pb-md-0 pb-5  h-100 ">
              <div className="col-md-6 col-12 order-md-1 order-2 d-flex justify-content-end">
                <img
                  src={sectionImage1}
                  alt={sectionImage1}
                  className="img-fluid img-section1 d-xs-block "
                />
              </div>
              <div className="col-md-6 col-12 order-md-2 order-1 d-flex justify-content-start align-items-center ">
                <div className="text-content ">
                  <h2 className="text-brown-dark heading_section_1 fw-semibold">
                    Come check its perfect taste
                  </h2>
                  <p className="text-brown-normal ">
                    discover the spectrum of tastes waiting to be explored. Join
                    us as we unravel the complexities of coffee's taste,
                    inviting you to indulge in every nuanced note and embrace
                    the richness that each cup has to offer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-dark py-5      "></div>
      </section>
      {/* section-1 ends */}

      {/* section-2 starts  */}
      <section className="bg-brown-normal position-relative  overflow-hidden">
        <img
          src={sectionbg2}
          alt={sectionbg2}
          className="img-fluid section-bg-2"
        />
        <div className="container  position-relative  py-sm-5  ">
          <div className="row py-sm-5 py-4">
            <div className="col-md-6 col-12 p-md-4 p-3  d-flex justify-content-end">
              <img
                src={sectionImage2}
                alt="sectionImage2"
                className="img-fluid border-custom"
              />
            </div>
            <div className=" bg-brown-normal  col-md-6 col-12 d-flex align-items-center justify-content-center ">
              <div className="">
                <h1 className="text-green-dark fw-bold text-center">
                  With the finest selection of coffee bean
                </h1>
                <p className="text-green-normal">
                  Join us on a voyage of taste and aroma, where every brew is a
                  celebration of craftsmanship and dedication. Whether you're a
                  seasoned connoisseur or just beginning your coffee adventure,
                  we invite you to explore the world of coffee with us and
                  discover the magic in every bean.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section-2 ends  */}

      {/* section-3-starts */}
      <section>
        <div className="bg-green-dark py-5      "></div>
        <div className=" bg-brown-normal  ">
          <h1 className="text-brown-dark display-3 fw-semibold text-center py-2 m-0">
            Menu
          </h1>
        </div>
        <div className="position-relative overflow-hidden">
          <div className="row  px-0 mx-0 bg-brown-normal">
            <div className="col-xl-3 col-md-6 col-12 border-0 outline-0 p-0 h-menu-custom">
              <h2 className="bg-green-dark text-brown-dark  text-md-start text-center fw-semibold fs-5 text-uppercase py-3 px-5">
                Our Basics
              </h2>

              <div className="px-5">
                <ul className="list-unstyled">
                  <li className="d-flex justify-content-between align-items-center  text-green-dark fs-4">
                    <p className="fw-medium mb-0 ">Espresso</p>
                    <p className="fw-semibold mb-0">1,60</p>
                  </li>
                  <li className="d-flex justify-content-between align-items-center  text-green-dark fs-4">
                    <p className="fw-medium mb-0 ">Double Espresso</p>
                    <p className="fw-semibold mb-0">2,60</p>
                  </li>
                  <li className="d-flex justify-content-between align-items-center  text-green-dark fs-4">
                    <p className="fw-medium mb-0 ">Brewed Coffee</p>
                    <p className="fw-semibold mb-0">2,20</p>
                  </li>
                  <li className="d-flex justify-content-between align-items-center  text-green-dark fs-4">
                    <p className="fw-medium mb-0 ">American Coffee</p>
                    <p className="fw-semibold mb-0">2,50</p>
                  </li>
                  <li className="d-flex justify-content-between align-items-center  text-green-dark fs-4">
                    <p className="fw-medium mb-0 ">Macchiato</p>
                    <p className="fw-semibold mb-0">1,80</p>
                  </li>
                  <li className="d-flex justify-content-between align-items-center  text-green-dark fs-4">
                    <p className="fw-medium mb-0 ">Latte</p>
                    <p className="fw-semibold mb-0">2,50</p>
                  </li>
                  <li className="d-flex justify-content-between align-items-center  text-green-dark fs-4">
                    <p className="fw-medium mb-0 ">Cappuccino</p>
                    <p className="fw-semibold mb-0"></p>
                  </li>
                </ul>

                <div className="fixed-bottom-custom text-center py-2">
                  <img
                    src={menu_img_1}
                    alt={menu_img_1}
                    className=" img-fluid border-custom "
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 border-0 outline-0 p-0 h-menu-custom">
              <h2 className="bg-green-dark text-brown-dark  text-md-start text-center fw-semibold fs-5 text-uppercase py-3 px-5">
                Our Specials
              </h2>

              <div className="px-5">
                <ul className="list-unstyled">
                  <li className="d-flex justify-content-between align-items-center  text-green-dark fs-4">
                    <p className="fw-medium mb-0 ">Kopi Luwek</p>
                    <p className="fw-semibold mb-0">10,50</p>
                  </li>
                  <li className="d-flex justify-content-between align-items-center  text-green-dark fs-4">
                    <p className="fw-medium mb-0 ">jamiacan Blue Mount</p>
                    <p className="fw-semibold mb-0">8,50</p>
                  </li>
                  <li className="d-flex justify-content-between align-items-center  text-green-dark fs-4">
                    <p className="fw-medium mb-0 ">yemen</p>
                    <p className="fw-semibold mb-0">5,50</p>
                  </li>
                  <li className="d-flex justify-content-between align-items-center  text-green-dark fs-4">
                    <p className="fw-medium mb-0 ">Zimbabwe</p>
                    <p className="fw-semibold mb-0">6,00</p>
                  </li>
                  <li className="d-flex justify-content-between align-items-center  text-green-dark fs-4">
                    <p className="fw-medium mb-0 ">Mocha Java</p>
                    <p className="fw-semibold mb-0">4,00</p>
                  </li>
                  <li className="d-flex justify-content-between align-items-center  text-green-dark fs-4">
                    <p className="fw-medium mb-0 ">Guatemala Coban</p>
                    <p className="fw-semibold mb-0"></p>
                  </li>
                </ul>

                <div className="fixed-bottom-custom text-center py-2">
                  <img
                    src={menu_img_2}
                    alt={menu_img_2}
                    className=" img-fluid border-custom "
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 border-0 outline-0 p-0 h-menu-custom">
              <h2 className="bg-green-dark text-brown-dark  text-md-start text-center fw-semibold fs-5  text-uppercase py-3 px-5">
                Our Dairy free Milks
              </h2>

              <div className="px-5">
                <ul className="list-unstyled">
                  <li className="d-flex justify-content-between align-items-center  text-green-dark fs-4">
                    <p className="fw-medium mb-0 ">Soya</p>
                    <p className="fw-semibold mb-0">1,50</p>
                  </li>
                  <li className="d-flex justify-content-between align-items-center  text-green-dark fs-4">
                    <p className="fw-medium mb-0 ">Oat</p>
                    <p className="fw-semibold mb-0">2,50</p>
                  </li>
                  <li className="d-flex justify-content-between align-items-center  text-green-dark fs-4">
                    <p className="fw-medium mb-0 ">Almond</p>
                    <p className="fw-semibold mb-0">2,50</p>
                  </li>
                  <li className="d-flex justify-content-between align-items-center  text-green-dark fs-4">
                    <p className="fw-medium mb-0 ">Coconut</p>
                    <p className="fw-semibold mb-0">3,00</p>
                  </li>
                  <li className="d-flex justify-content-between align-items-center  text-green-dark fs-4">
                    <p className="fw-medium mb-0 ">Rice</p>
                    <p className="fw-semibold mb-0"></p>
                  </li>
                </ul>

                <div className="fixed-bottom-custom text-center py-2">
                  <img
                    src={menu_img_3}
                    alt={menu_img_3}
                    className=" img-fluid border-custom "
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 border-0 outline-0 p-0 h-menu-custom">
              <h2 className="bg-green-dark text-brown-dark  text-md-start text-center fw-semibold fs-5 text-uppercase py-3 px-5">
                to pair With...
              </h2>

              <div className="px-5">
                <ul className="list-unstyled">
                  <li className="d-flex justify-content-between align-items-center  text-green-dark fs-4">
                    <p className="fw-medium mb-0 ">Pistachio Muffin</p>
                    <p className="fw-semibold mb-0">5,00</p>
                  </li>
                  <li className="d-flex justify-content-between align-items-center  text-green-dark fs-4">
                    <p className="fw-medium mb-0 ">Coulant</p>
                    <p className="fw-semibold mb-0">4,50</p>
                  </li>
                  <li className="d-flex justify-content-between align-items-center  text-green-dark fs-4">
                    <p className="fw-medium mb-0 ">black Forest Cake</p>
                    <p className="fw-semibold mb-0">5,50</p>
                  </li>
                  <li className="d-flex justify-content-between align-items-center  text-green-dark fs-4">
                    <p className="fw-medium mb-0 ">Crispy Cake</p>
                    <p className="fw-semibold mb-0"></p>
                  </li>
                </ul>

                <div className="fixed-bottom-custom text-center py-2">
                  <img
                    src={menu_img_4}
                    alt={menu_img_4}
                    className=" img-fluid border-custom "
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            src={menus_BG_botom}
            alt="menus_BG_botom"
            className=" menus_BG_botom"
          />
        </div>
      </section>
      <div className="py-5 bg-green-dark"></div>
      {/* section-3-ends */}
      {/* section-4-starts */}
      <section>
        <div className=" bg-brown-normal  position-relative overflow-hidden">
          <img
            src={menus_BG_top}
            alt="menus_BG_top"
            className=" menus_BG_top"
          />

          <div className="container pb-md-5 position-relative z-3">
            <h1 className="text-brown-dark display-3 fw-semibold text-center py-2 m-0 py-3">
              The art of coffee your cup
            </h1>

            <div className="row py-5">
              <div className="col-md-6 col-12 d-flex justify-content-center align-items-center px-xxl-5">
                <div>
                  <p className="text-brown-dark">
                    Discover the artistry of coffee with every sip from your
                    cup. Indulge in the rich flavors, intricate aromas, and
                    exquisite craftsmanship that elevate your coffee experience
                    to new heights. Embrace the journey of taste and refinement
                    with us.
                  </p>
                  <h1 className="text-green-normal   fw-semibold display-4 text-center pt-5">
                    Open Everyday <br /> from 7 AM to 8 PM
                  </h1>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <img
                  className="img-fluid border-custom"
                  src={section_mg_4}
                  alt={section_mg_4}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-5 bg-green-dark"></div>
      {/* section-4-ends */}
      {/* section-5-starts */}
      <section>
        <div className=" bg-brown-normal  position-relative overflow-hidden">
          <img
            src={menus_BG_botom}
            alt="menus_BG_botom"
            className=" menus_BG_botom_5"
          />

          <div className="container pb-md-5 position-relative z-3">
            <h1 className="text-brown-dark display-3 fw-semibold text-center py-2 m-0 py-3  section_5_heading mx-auto">
              now you can also buy our coffee and brew it at home
            </h1>

            <div className="text-center px-md-0 p-5 pt-2 position-relative">
              <div className="order-now-btn">
                <button className="px-3 py-1">Order Now</button>
              </div>

              <div className="border-custom off-offer-badge ">
                This Month 10% OFF
              </div>
              <img
                className="img-fluid border-custom"
                src={menu_5_img}
                alt={menu_5_img}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="py-5 bg-green-dark"></div>
      {/* section-5-ends */}

      {/* section-7 starts  */}
      <section className="bg-brown-normal position-relative  overflow-hidden">
        <img
          src={sectionbg2}
          alt={sectionbg2}
          className="img-fluid section-bg-2"
        />
        <div className="container  position-relative   py-sm-5  ">
          <div className="row py-sm-5 py-4">
            <div className="col-md-6 col-12 p-md-4 p-3  d-flex justify-content-end">
              <img
                src={section_7_img}
                alt="sectionImage2"
                className="img-fluid border-custom"
              />
            </div>
            <div className=" bg-brown-normal  col-md-6 col-12 d-flex align-items-center justify-content-lg-start justify-content-center ">
              <div className="w-75">
                <h1 className="text-brown-dark fw-bold text-center display-4">
                  Tasting day May2 - 4 PM
                </h1>
                <p className="text-green-normal">
                  Savor the moment with our exclusive Tasting Day event, May
                  2nd, from 2 to 4 PM. Join us as we explore a symphony of
                  flavors, tantalizing aromas, and brewing techniques, making
                  every sip an unforgettable experience. Reserve your spot
                  today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section-7 ends  */}
      {/* section-8 starts  */}
      <section className="bg-brown-normal position-relative  overflow-hidden">
        <img
          src={sectionbg2}
          alt={sectionbg2}
          className="img-fluid section-bg-8"
        />
        <div className="container  position-relative   py-sm-5  ">
          <div className="row py-sm-5 py-4">
            <div className="col-md-6 col-12 p-md-4 p-3 order-2 d-flex justify-content-end">
              <img
                src={section_8_img}
                alt="section_8_img"
                className="img-fluid border-custom"
              />
            </div>
            <div className=" bg-brown-normal order-1  col-md-6 col-12 d-flex align-items-center justify-content-lg-start justify-content-center ">
              <div className="p-4">
                <h1 className="text-brown-dark fw-bold  display-5">
                  Receive our offers <br className="d-lg-block d-none" />
                  every week
                </h1>
                <div className="">
                  <button className="btn_section_8 ">Receive</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section-8 ends  */}
      <div className="py-5 bg-green-dark"></div>

      <footer className="footer">
        <div className="text-center">
          <img
            className="img-fluid border-custom border-top-0"
            src={logo}
            alt={logo}
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6-col-12 order-2 text-center pt-5 text-brown-dark fs-5">
              <h1 className="fw-bold hover-effect">
                Open Everyday From 7 AM to 8 PM
              </h1>
            </div>
            <div className="col-lg-4 col-md-6-col-12 text-brown-dark fs-5  pt-md-0 pt-4  ">
              <div className="d-flex justify-content-center flex-column align-items-lg-start align-items-center">
                <h1 className="fw-bold hover-effect pt-lg-0 pt-md-4">
                  Contact
                </h1>
                <p className="mb-0 ">Glorious Street,30 -City(Country)</p>
                <p className="mb-0">(+555) 555 555 555</p>
                <p className="mb-0"> Coffee.Shop@mail.com</p>
                <ul className="list-unstyled d-flex gap-3 fs-3 py-3  social-links">
                  <li>
                    <i className=" fa-brands fa-facebook-f   "></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-instagram"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-pinterest-p"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-twitter"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6-col-12 order-3 text-brown-dark fs-5">
              <div className="footer-nav d-flex   pt-4  justify-content-evenly align-items-center ">
                <ul className="list-unstyled">
                  <li>
                    <NavLink>Home</NavLink>{" "}
                  </li>
                  <li>
                    <NavLink>News</NavLink>{" "}
                  </li>
                  <li>
                    <NavLink>Menu</NavLink>{" "}
                  </li>
                  <li>
                    <NavLink>Blog</NavLink>{" "}
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li>
                    <NavLink>Privacy Policy</NavLink>{" "}
                  </li>
                  <li>
                    <NavLink>Cookies</NavLink>{" "}
                  </li>
                  <li>
                    <NavLink>Conditions</NavLink>{" "}
                  </li>
                  <li>
                    <NavLink>map Site</NavLink>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
