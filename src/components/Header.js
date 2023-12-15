import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../reduxjs/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../reduxjs/gptSlice";
import { changeLanguage } from "../reduxjs/configSlice";

const Header = () => {
  const nagivate = useNavigate();
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const showGptSearches = useSelector((store) => store.gpt.showGptSearches);

  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        naviagte("/browse");
      } else {
        dispatch(removeUser());
        naviagte("/");
      }
    });

    // unsubscribe when component is unmounted we have to done because unsubscribe is a enventListener
    // this is good practice
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        nagivate("/");
      })
      .catch((error) => {
        nagivate("/error");
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const gptSearchHandleClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute w-screen px-8 bg-gradient-to-b from-black z-10 flex justify-between">
      <Link to="/browse">
        <img className="w-40" src={LOGO} alt="" />{" "}
      </Link>

      {user && (
        <div className="p-4 m-2 flex">
          {showGptSearches && (
            <select
              className="p-3 bg-gray-900 text-white m-2 rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="my-2 mx-2 p-2 text-white rounded-lg bg-purple-800 hover:bg-slate-100 hover:text-black "
            onClick={gptSearchHandleClick}
          >
            {showGptSearches ? "Homepage" : "Gpt Search"}
          </button>
          <img className="w-10 h-10 m-2" src={USER_AVATAR} alt="" />
          <button className="font-blod text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
