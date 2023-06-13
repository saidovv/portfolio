import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "./Work.css";
import softclub from "./images/logo.b868cdac12fed2b1b282c21428865f97.svg";
import rebus from "./images/logo.svg";

const Work = () => {
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
    <div id="work">
      <div
        className="aboutpage mx-auto bg-[#DBD9DC] dark:bg-slate-800 duration-500 h-[800px] 
      sm:h-[900px] sm:pt-[10px] md:h-[950px] lg:h-[950px]"
      >
        <div className="w-[80%] mx-auto">
          <h1 className="text-[#F35244] text-4xl font-serif text-start pt-[150px]">
            {t("WORK EXPERINCE")}
          </h1>
          <div className="flex justify-around mt-[120px] sm:flex-wrap sm:mt-[50px] md:flex-wrap lg:flex-wrap xl:gap-12">
            <div className="glow">
              <div
                className="w-[480px] h-[280px] bg-[white] dark:bg-[#060116] duration-500 mx-auto absolute rounded-lg 
                sm:w-[95%] xl:w-[95%]"
              >
                <img
                  className="w-[400px] mt-[55px] ml-[50px] sm:w-[80%] xl:w-[85%]"
                  src={softclub}
                  alt=""
                />
              </div>
            </div>
            <div className="glow">
              <div
                className="w-[480px] h-[280px] bg-[white] dark:bg-[#060116] duration-500 mx-auto absolute rounded-lg 
              sm:w-[95%] xl:w-[95%]"
              >
                <img
                  className="w-[400px] mt-[55px] ml-[50px] sm:w-[80%] xl:w-[85%]"
                  src={rebus}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
