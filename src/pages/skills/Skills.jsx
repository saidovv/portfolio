import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Skills.css";
import pluspng from "./images/c++.png";
import htmlpng from "./images/html.png";
import csspng from "./images/css.png";
import tailwindpng from "./images/tailwind.png";
import jspng from "./images/js.png";
import reactpng from "./images/react.png";
import vuepng from "./images/vue.png";

const Skills = () => {
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
    <div id="skills">
      <div className="skillspage mx-auto bg-[#DBD9DC] dark:bg-slate-800 duration-500 h-[700px] sm:h-[400px]">
        <div className="w-[80%] mx-auto ">
          <h1 className="text-[#F35244] text-4xl font-serif text-start pt-[150px] sm:pt-[150px]">
            {t("MYSKILLS")}
          </h1>
        </div>
        <div className="marquee-infinite">
          <div>
            <span>
              <img
                className="w-[100px] h-[120px sm:w-[50px] sm:h-[50px]"
                src={pluspng}
              />
              <img
                className="w-[110px] h-[120px] sm:w-[50px] sm:h-[50px]"
                src={htmlpng}
              />
              <img
                className="w-[120px] h-[130px] sm:w-[50px] sm:h-[50px]"
                src={csspng}
              />
              <img className="w-[130px] sm:w-[50px]" src={tailwindpng} />
            </span>
            <span>
              <img className="w-[120px] sm:w-[50px]" src={jspng} />
              <img
                className="w-[130px] h-[120px] sm:w-[50px] sm:h-[50px]"
                src={reactpng}
              />
              <img
                className="w-[120px] h-[120px] sm:w-[50px] sm:h-[50px]"
                src={vuepng}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
