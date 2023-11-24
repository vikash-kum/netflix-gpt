import { useRef, useState } from "react";
import Header from "./Header";
import { signInDataValid } from "../utils/validation";

const Login = () => {
  const [isSignInForm, setIsLoggedInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsLoggedInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);

  const isFormValidClick = () => {
    const message = signInDataValid(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/3 absolute p-12 m-12 bg-black my-24 mx-auto right-0 left-0 text-white opacity-80"
      >
        <h1 className="text-bold py-4 text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-gray-900 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-900 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-gray-900 rounded-md"
        />

        <p className="text-lg text-bold p-2 text-red-800">{errorMessage}</p>
        <button
          className="bg-red-700 p-3 my-6 w-full rounded-md"
          type="submit"
          onClick={isFormValidClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-12 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already refgistered? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
