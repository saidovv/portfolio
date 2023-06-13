import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./About.css";

const About = () => {
  // translate
  const [lng, setLng] = useState("en");
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => i18n.changeLanguage(language);

  const handleChange = (event) => {
    const { value } = event.target;
    changeLanguage(value);
    setLng(value);
  };

  return (
    <div id="about">
      <div
        className="aboutpage mx-auto bg-[#DBD9DC] dark:bg-slate-800 duration-500 h-[700px] 
      sm:h-[650px] md:h-[970px] lg:h-[900px]"
      >
        <div className="w-[80%] mx-auto sm:w-[90%]">
          <h1 className="text-[#F35244] text-4xl font-serif text-start pt-[150px] sm:pt-[150px]">
            {t("ABOUT")}
          </h1>
          <p
            className="dark:text-[white] text-[#101033] text-lg leading-10 mt-[20px] font-mono 
          sm:text-sm sm:text-center"
          >
            {t("myself")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
