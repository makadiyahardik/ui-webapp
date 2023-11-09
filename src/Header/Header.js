// import Signup from "../Signup/Signup";
import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { Link as LinkScroll } from "react-scroll";
function Header(props) {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  const onMoboClick = () => {
    props.onMoboClicks();
  };

  return (
    <>
      <div
        className={
          "md:fixed md:top-0 md:w-full md:py-[10px]  md:transition-all " +
          (scrollActive ? " md:z-[1000] md:shadow-md  md:bg-white" : " pt-4")
        }>
        <div className="md:max-w-[1400px] w-full bg-white md:px-10 px-5 mx-auto ">
          <div className="flex  justify-between  md:items-center  ">
            <div className="flex justify-start items-center ">
            <div className="md:hidden block mx-4 " onClick={onMoboClick}>
                {props.showNav ? (
                  <AiOutlineCloseCircle size={24} />
                ) : (
                  <AiOutlineMenu size={24} />
                )}
              </div>
              <img
                src="./assets/images/logo.png"
                className="h-[2rem] w-auto "
                alt="logo-holipho"
              />
              <h1 className="text-[28px] md:flex hidden font-extrabold leading-normal text-primary mx-3">Helfio</h1>
            </div>
            <div className=" md:flex hidden ">
              <div className=" text-[18px] font-medium leading-[20px]  cursor-pointer">
                <LinkScroll
                  activeClass="active"
                  to="O nas"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onSetActive={() => {
                    setActiveLink("O nas");
                  }}
                  className={
                    "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                    (activeLink === "O nas"
                      ? " text-primary animation-active "
                      : " text-black")
                  }>
                  O nas
                </LinkScroll>
              </div>

              <div className="text-[18px] font-medium leading-[20px] text-black mx-4 cursor-pointer">
                <LinkScroll
                  activeClass="active"
                  to="Blog"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onSetActive={() => {
                    setActiveLink("Blog");
                  }}
                  className={
                    "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                    (activeLink === "Blog"
                      ? " text-primary animation-active "
                      : " text-black")
                  }>
                  Blog
                </LinkScroll>
              </div>
              <div className="text-[18px] font-medium leading-[20px] text-black mx-4 cursor-pointer">
                <LinkScroll
                  activeClass="active"
                  to="Biznes"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onSetActive={() => {
                    setActiveLink("Biznes");
                  }}
                  className={
                    "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                    (activeLink === "Biznes"
                      ? " text-primary animation-active "
                      : " text-black")
                  }>
                  Biznes
                </LinkScroll>
              </div>
             
                <div className="text-[18px] font-medium leading-[20px] text-black mx-4 cursor-pointer">
                  <LinkScroll
                    activeClass="active"
                    to="Kontakt"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onSetActive={() => {
                      setActiveLink("Kontakt");
                    }}
                    className={
                      "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                      (activeLink === "Client"
                        ? " text-primary animation-active "
                        : " text-black")
                    }>
                    Kontakt
                  </LinkScroll>
                </div>
              

              <div className="text-[18px] font-medium leading-[20px] text-black mx-4 cursor-pointer">
                <LinkScroll
                  activeClass="active"
                  to="Cennik"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onSetActive={() => {
                    setActiveLink("Cennik");
                  }}
                  className={
                    "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                    (activeLink === "Cennik"
                      ? " text-primary animation-active "
                      : " text-black")
                  }>
             Cennik
                </LinkScroll>
              </div>
            </div>
            <div className=" cursor-pointer ">


            <div className="flex justify-start items-center bg-[#F7F7F7] rounded-full p-2">
              <img
                src="./assets/images/internet.png"
                className="h-[1.5rem] w-auto "
                alt="internet"
              />
              <p className="text-[18px] font-normal leading-[19px] text-bgSeconday mx-3">Zmień na angielski</p>
            </div>
           
            </div>

            <div
              className={
                props.showNav
                  ? "fixed top-[4rem] left-0 bg-[#293C32] w-full ease-in-out duration-500 z-[1000]"
                  : "fixed top-[-100%]"
              }>
              <ul className="md:hidden flex text-white p-5  flex-col mx-auto justify-center items-center">
                <li className="my-2 text-[18px] font-medium leading-[20px] text-black ">
                  {" "}
                  <LinkScroll
                    activeClass="active"
                    to="O nas"
                    spy={true}
                    offset={-100}
                    smooth={true}
                    duration={500}
                    onSetActive={() => {
                      setActiveLink("O nas");
                    }}
                    className={
                      "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                      (activeLink === "O nas"
                        ? " text-[#ea2b4f] animation-active "
                        : " text-white")
                    }>
                    O nas
                  </LinkScroll>
                </li>
                <li className="my-2 text-[18px] font-medium leading-[20px] text-black">
                  {" "}
                  <LinkScroll
                    activeClass="active"
                    to="Blog"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onSetActive={() => {
                      setActiveLink("Blog");
                      props.setShowNav(false);
                    }}
                    className={
                      "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                      (activeLink === "Blog"
                        ? " text-[#ea2b4f] animation-active "
                        : " text-white")
                    }>
                Blog
                  </LinkScroll>
                </li>
                <li className="my-2 text-[18px] font-medium leading-[20px] text-black">
                  {" "}
                  <LinkScroll
                    activeClass="active"
                    to="Biznes"
                    offset={-100}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onSetActive={() => {
                      setActiveLink("Biznes");
                      props.setShowNav(false);
                    }}
                    className={
                      "px-4 py-2 Work cursor-pointer animation-hover inline-block relative" +
                      (activeLink === "Biznes"
                        ? " text-[#ea2b4f] animation-active "
                        : " text-white")
                    }>
                    Biznes
                  </LinkScroll>
                </li>
                  <li
                    className="my-2 le
                ading-[30px] text-[18px] font-semibold">
                    {" "}
                    <LinkScroll
                      activeClass="active"
                      to="Kontakt"
                      offset={-100}
                      spy={true}
                      smooth={true}
                      duration={500}
                      onSetActive={() => {
                        setActiveLink("Kontakt");
                        props.setShowNav(false);
                      }}
                      className={
                        "px-4 py-2 Work cursor-pointer animation-hover inline-block relative" +
                        (activeLink === "Kontakt"
                          ? " text-[#ea2b4f] animation-active "
                          : " text-white")
                      }>
                      Kontakt
                    </LinkScroll>
                  </li>

            
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
