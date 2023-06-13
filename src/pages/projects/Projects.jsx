import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Projects.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import selling from "./images/selling.jpg";
import xiaomi from "./images/xiaomi.jpg";
import todo from "./images/todo.jpg";
import form from "./images/form.jpg";
import usf from "./images/usf.jpg";

export default function Projects() {
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
    <div id="projects" className="bg-[#DBD9DC] dark:bg-slate-800 duration-500">
      <div className="w-[80%] mx-auto">
        <h1 className="text-[#F35244] text-4xl font-serif text-start pt-[150px]">
          {t("PROJECTS")}
        </h1>
      </div>
      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <a href="https://selling-tj.netlify.app/" target="_blank">
              <img src={selling} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://xiaomi-tj.netlify.app/" target="_blank">
              <img src={xiaomi} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://todo-is.netlify.app/" target="_blank">
              <img src={todo} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <img src={form} />
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://ufs-com.netlify.app/" target="_blank">
              <img src={usf} />
            </a>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}
