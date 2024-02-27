import React from "react";
import lang from "../utils/LanguageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.configLang.lang);
  return (
    <div className="flex justify-center pt-[10%] ">
      <form action="" className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-10"
          placeholder={lang[langKey].gptplaceholder}
        />
        <button className="py-2 m-4 px-4 col-span-2 bg-red-700 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
