import { useSelector } from "react-redux";
import { LANG } from "../utils/languageConstant";

const GptSearchBar = () => {
  const lang = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[12%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={LANG[lang].searchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-800 text-white rounded-lg">
          {LANG[lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
