import { useSelector } from "react-redux";
import { LANG } from "../utils/languageConstant";
import { useRef } from "react";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const lang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    const chatGtpResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: "search funny india movie" }],
      model: "gpt-3.5-turbo",
    });
  };

  return (
    <div className="pt-[12%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={LANG[lang].searchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-800 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {LANG[lang].searchBtn}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
