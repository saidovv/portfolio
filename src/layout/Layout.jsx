import "./Layout.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Switcher from "../Switcher";
import { Link } from "react-scroll";

const Layout = () => {
  // translate
  const [lng, setLng] = useState("en");
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => i18n.changeLanguage(language);

  const handleChange = (event) => {
    const { value } = event.target;
    changeLanguage(value);
    setLng(value);
  };

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <div className="header mx auto flex justify-around items-center h-[80px] w-[100%] bg-[#c4c4c4] dark:bg-slate-900 duration-500 sm:flex-wrap">
        <div>
          <h1 className="text-[#F35244] font-bold text-xl">
            <Link
              to="main"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
            >
              {t("portfolio")}
            </Link>
          </h1>
        </div>

        <nav ref={navRef} className="flex gap-9">
          <span className="dark:text-[white] text-[#101033]  font-medium text-lg">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
            >
              {t("about")}
            </Link>
          </span>
          <span className="dark:text-[white] text-[#101033] font-medium text-lg">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
            >
              {t("skills")}
            </Link>
          </span>
          <span className="dark:text-[white] text-[#101033] font-medium text-lg">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
            >
              {t("projects")}
            </Link>
          </span>
          <span className="dark:text-[white] text-[#101033] font-medium text-lg">
            <Link to="work" spy={true} smooth={true} offset={50} duration={700}>
              {t("work")}
            </Link>
          </span>
          <span className="dark:text-[white] text-[#101033] font-medium text-lg">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
            >
              {t("contact")}
            </Link>
          </span>

          <div className="flex gap-3">
            <select
              className="h-[30px] bg-[#e9e9ff] rounded-lg"
              value={lng}
              onChange={handleChange}
            >
              <option value="en">En</option>
              <option value="ru">Ru</option>
            </select>
            <Switcher />
          </div>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default Layout;
