import React, { useState } from "react";
import Header from "./Header";
import bg from "./../Assets/background.png";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const isToggle = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img className="w-full" src={bg} alt="bg" />
      </div>
      <form className="absolute p-12 bg-black w-3/12 mx-auto right-0 left-0 my-36 text-white flex flex-col opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-600"
        />
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-600"
          />
        )}
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <button className="p-4 bg-red-700 w-full m-auto my-6 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-4 cursor-pointer" onClick={isToggle}>
          {" "}
          {isSignInForm ? "New to Netflix? Sign Up" : "Already User? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
