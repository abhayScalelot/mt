import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Interior from "../Components/Interior";
import Exteior from "../Components/Exteior";
import Garden from "../Components/Garden";
import FloorPlangenration from "../Components/FloorPlangenration";

const MegaMenu = () => {
  return (
    <div>
      <div className="main relative bg-[#090E1A] pt-24">
        {/* <!-- paticale animation  --> */}
        <div id="particles-js" className="fixed inset-0 w-full h-screen"></div>

        {/* <!-- header  --> */}
        {/* <header className="w-full absolute inset-x-0 top-0 z-50">
          <div className="px-4 sm:px-6 lg:px-14">
            <div className="flex h-24 items-center justify-between">
              <div className="flex-1 md:flex md:items-center md:gap-12">
                <a className="block text-white text-3xl font-bold" href="#">
                  3D CANVA
                </a>
              </div>
              <div className="md:flex md:items-center md:gap-12">
                <nav
                  aria-label="Site Nav"
                  id="nav"
                  className="scale-0 anim bg-[#131622]/90 py-20 p-10 fixed inset-0 w-full h-full md:scale-100 md:py-0 md:p-0 flex items-center justify-center md:bg-transparent md:relative md:block"
                >
                  <span
                    onclick="removeActive('#nav','open');"
                    id="close_pop"
                    className="absolute top-7 right-7 inline-block md:hidden w-8 h-8 anim z-20"
                  >
                    <svg
                      className="w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlnsSvgjs="http://svgjs.com/svgjs"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 28 28"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <switch>
                          <g>
                            <path
                              d="m15.4 14 8.3-8.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L14 12.6 5.7 4.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l8.3 8.3-8.3 8.3c-.4.4-.4 1 0 1.4s1 .4 1.4 0l8.3-8.3 8.3 8.3c.4.4 1 .4 1.4 0s.4-1 0-1.4z"
                              fill="#ffffff"
                              data-original="#ffffff"
                            ></path>
                          </g>
                        </switch>
                      </g>
                    </svg>
                  </span>
                  <ul className="md:flex items-center space-y-6 md:space-y-0 md:gap-8 text-sm">
                    <li className="relative group text-center md:text-left">
                      <a className="nav_link" href="javascript:void(0)">
                        About
                      </a>
                      <span className="list_border anim"></span>
                    </li>
                    <li className="relative group text-center md:text-left">
                      <a className="nav_link" href="javascript:void(0)">
                        Careers
                      </a>
                      <span className="list_border anim"></span>
                    </li>
                    <li className="relative group text-center md:text-left">
                      <a className="nav_link" href="javascript:void(0)">
                        History
                      </a>
                      <span className="list_border anim"></span>
                    </li>
                    <li className="relative group text-center md:text-left">
                      <a className="nav_link" href="javascript:void(0)">
                        Services
                      </a>
                      <span className="list_border anim"></span>
                    </li>
                  </ul>
                </nav>
                <div className="block md:hidden">
                  <button onclick="addActive('#nav','open');" className="anim">
                    <svg
                      className="w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlnsSvgjs="http://svgjs.com/svgjs"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 24 24"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <path
                          fill="#ffffff"
                          fillRule="evenodd"
                          d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"
                          clipRule="evenodd"
                          data-original="#ffffff"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header> */}

        <section className="relative px-4 lg:px-10 lg:py-20 z-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-semibold capitalize text-center mb-8 xl:mb-10">
            Generator
          </h2>
          <ul id="tabs-nav" className="w-full flex flex-wrap justify-center">
            <li className="g_btn">
              <NavLink to="/interior" className="anim">
                Interior
              </NavLink>
            </li>
            <li className="g_btn">
              <NavLink to="/exterior" className="anim">
                Exterior
              </NavLink>
            </li>
            <li className="g_btn">
              <NavLink to="/garden" className="anim">
                Garden
              </NavLink>
            </li>
            <li className="g_btn">
              <NavLink to="/floorplangenration" className="anim">
                Floor plan Generation
              </NavLink>
            </li>
          </ul>
          <div
            id="form_div"
            className="max-w-7xl mx-auto p-5 sm:p-10 lg:p-14 py-8 rounded-2xl -mt-8"
          >
            <div className="flex flex-wrap -mx-5">
              <div className="w-full md:w-1/2 p-5 md:py-6 max-w-2xl mx-auto">
                {/* <Routes>
                  <Route path="/">
                    <Route index element={<Interior />} />
                    <Route path="exteior" element={<Exteior />} />
                    <Route path="garden" element={<Garden />} />
                    <Route
                      path="floorplangenration"
                      element={<FloorPlangenration />}
                    />
                  </Route>
                </Routes> */}
              </div>
              {/* <!-- privew section  --> */}
              <div
                id="preview"
                className="w-full md:w-1/2 p-5 md:py-6 max-w-2xl mx-auto md:border-l-4 border-[#5046E5] hidden"
              >
                <div className="w-full max-w-xs mx-auto rounded-lg overflow-hidden">
                  <img
                    src="assest/images/card1.jpg"
                    className="w-full"
                    alt="contects3"
                  />
                </div>
                <div className="w-full max-w-xs mx-auto rounded-lg overflow-hidden mt-4">
                  <img
                    src="assest/images/card1.jpg"
                    className="w-full"
                    alt="contects3"
                  />
                </div>
                <div className="text-center space-x-5 mt-6 flex justify-center">
                  <button
                    type="submit"
                    className="w-40 my-1.5 rounded-lg hover:opacity-80 anim bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                  >
                    Save
                  </button>
                  <button
                    type="submit"
                    className="w-40 my-1.5 rounded-lg hover:opacity-80 anim bg-red-600 px-5 py-3 text-sm font-medium text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-6 lg:px-10 py-16 lg:py-28 z-20">
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="hover_card group">
                  <img
                    src="assest/images/card1.jpg"
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full h-full"
                    alt="Creative_card"
                  />
                  <span className="block anim group-hover:translate-y-0">
                    Creative
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="hover_card group">
                  <img
                    src="assest/images/card2.jpg"
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full h-full"
                    alt="Creative_card"
                  />
                  <span className="block anim group-hover:translate-y-0">
                    Creative
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="hover_card group">
                  <img
                    src="assest/images/card3.jpg"
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full h-full"
                    alt="Creative_card"
                  />
                  <span className="block anim group-hover:translate-y-0">
                    Creative
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="hover_card group">
                  <img
                    src="assest/images/card4.jpg"
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full h-full"
                    alt="Creative_card"
                  />
                  <span className="block anim group-hover:translate-y-0">
                    Creative
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="hover_card group">
                  <img
                    src="assest/images/card1.jpg"
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full h-full"
                    alt="Creative_card"
                  />
                  <span className="block anim group-hover:translate-y-0">
                    Creative
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="hover_card group">
                  <img
                    src="assest/images/card2.jpg"
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full h-full"
                    alt="Creative_card"
                  />
                  <span className="block anim group-hover:translate-y-0">
                    Creative
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="hover_card group">
                  <img
                    src="assest/images/card3.jpg"
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full h-full"
                    alt="Creative_card"
                  />
                  <span className="block anim group-hover:translate-y-0">
                    Creative
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="hover_card group">
                  <img
                    src="assest/images/card4.jpg"
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full h-full"
                    alt="Creative_card"
                  />
                  <span className="block anim group-hover:translate-y-0">
                    Creative
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <a
          href="#"
          id="topscroll"
          className="animate-bounce inline-block p-2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-yellow-600 fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50"
        >
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlnsSvgjs="http://svgjs.com/svgjs"
            width="512"
            height="512"
            x="0"
            y="0"
            viewBox="0 0 24 24"
            style={{ enableBackground: "new 0 0 512 512" }}
            xmlSpace="preserve"
          >
            <g>
              <path
                d="m11 5.414-5.293 5.293a1 1 0 0 1-1.414-1.414l7-7a.999.999 0 0 1 1.414 0l7 7a1 1 0 0 1-1.414 1.414L13 5.414V21a1 1 0 0 1-2 0z"
                fill="#ffffff"
                data-original="#ffffff"
              ></path>
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default MegaMenu;
