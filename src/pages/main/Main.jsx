import React, { useState } from "react";
import "./Main.css";
import programmer from "./images/560216.png";
import globus from "./images/pngwing.com.png";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";

const Main = () => {
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
    <div id="main">
      <div
        className="mainpage flex justify-evenly mx-auto bg-[#DBD9DC] dark:bg-slate-800 duration-500 pt-[130px] h-[700px] 
      sm: flex-wrap sm:h-[850px] md:h-[800px] lg:h-[900px]"
      >
        <div className="mt-[90px]">
          <h3
            className="dark:text-[white] text-[#101033] text-xl font-serif
     sm:text-center sm:mt-[-100px] md:text-center md:mt-[-100px] lg:mt-[-100px]"
          >
            {t("hello")}
            <span className="text-[#F35244]"> {t("i")}</span>
          </h3>
          <h1 className="text-[#F35244] text-6xl mt-[20px] font-serif tracking-widest sm:text-center">
            {t("ilhom")}
          </h1>
          <h1
            className=" tracking-wide text-[30px] dark:text-[white] text-[#101033] font-[500] mt-[20px] 
          sm:text-center md:text-center lg:text-center"
          >
            <TypeAnimation
              sequence={[
                "Frontend Web Developer🧑‍💻",
                1000,
                "Designer🤩",
                2000,
                "Problem Solver🤔",
                3000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "30px",
                textAlign: "center",
                fontWeight: "500",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            />
          </h1>
          <div className="glob gap-2 flex">
            <h1 className="text-2xl dark:text-[white] text-[#101033] font-sans tracking-widest mt-[30px]">
              {t("welcome")}
            </h1>
            <img className="w-[40px] h-[40px] mt-[27px]" src={globus} />
          </div>
        </div>
        <div>
          <img className="img11 w-[450px] sm:w-[400px]" src={programmer} />
        </div>
      </div>
    </div>
  );
};
export default Main;
