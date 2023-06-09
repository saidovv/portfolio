import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
import netlify from "./images/netlify.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
  // translate
  const [lng, setLng] = useState("en");
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => i18n.changeLanguage(language);

  const handleChange = (event) => {
    const { value } = event.target;
    changeLanguage(value);
    setLng(value);
  };

  const [agreed, setAgreed] = useState(false);

  return (
    <div
      id="contact"
      className="isolate bg-[white] dark:bg-slate-800 duration-500 lg:px-8"
    >
      <div className="w-[85%] mx-auto">
        <h1 className="text-[#F35244] text-4xl font-serif text-start pt-[150px]">
          {t("CONTACT")}
        </h1>
      </div>
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight dark:text-[white] text-[#101033] sm:text-4xl">
          {t("text1")}
        </h2>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <span className="block text-sm font-semibold leading-6 dark:text-[white] text-[#101033]">
              {t("First name")}
            </span>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 dark:text-[white] text-[#101033] bg-[white] dark:bg-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <span className="block text-sm font-semibold leading-6 dark:text-[white] text-[#101033]">
              {t("Last name")}
            </span>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 dark:text-[white] text-[#101033] bg-[white] dark:bg-slate-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <span className="block text-sm font-semibold leading-6 dark:text-[white] text-[#101033]">
              {t("Company")}
            </span>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 dark:text-[white] text-[#101033] bg-[white] dark:bg-slate-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <span className="block text-sm font-semibold leading-6 dark:text-[white] text-[#101033]">
              {t("Email")}
            </span>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 dark:text-[white] text-[#101033] bg-[white] dark:bg-slate-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <span className="block text-sm font-semibold leading-6 dark:text-[white] text-[#101033]">
              {t("Phone number")}
            </span>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <span className="sr-only">{t("Country")}</span>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 dark:text-[white] text-[#101033] bg-[white] dark:bg-slate-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <span className="block text-sm font-semibold leading-6 dark:text-[white] text-[#101033]">
              {t("Message")}
            </span>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 dark:text-[white] text-[#101033] bg-[white] dark:bg-slate-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {t("Lets talk")}
          </button>
        </div>
      </form>
      <div className="mt-[80px] w-[100%] h-[140px] bg-[#e0dcf1] dark:bg-slate-900 rounded-xl">
        <h2 className="dark:text-[white] text-[#101033] text-center pt-[30px]">
          © Copyright 2023 − Ilhom Saidov
        </h2>
        <div className="flex justify-center mt-[50px] gap-6">
          <a href="https://github.com/saidovv" target="_blank">
            <img className="w-[30px]" src={github} alt="" />
          </a>
          <a
            href="https://app.netlify.com/teams/saidovv97/overview"
            target="_blank"
          >
            <img className="w-[30px]" src={netlify} alt="" />
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <img className="w-[30px]" src={linkedin} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
