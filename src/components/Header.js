import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../reduxjs/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const nagivate = useNavigate();
  const dispatch = useDispatch();
  const naviagte = useNavigate();
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

  return (
    <div className="absolute w-screen px-8 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-40" src={LOGO} alt="" />

      {user && (
        <div className="p-4 m-2 flex">
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
