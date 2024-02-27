import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";

import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { bg } from "../utils/Constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errormsg, seterrormsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const isToggle = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleForm = () => {
    const msg = checkValidate(email.current.value, password.current.value);
    seterrormsg(msg);

    if (msg) return;

    if (!isSignInForm) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://media.licdn.com/dms/image/D5635AQFArdmqRZU-og/profile-framedphoto-shrink_400_400/0/1683221272624?e=1707998400&v=beta&t=HHr0V4fxBBvXCmstVKkmUx0gfh_1vgjMduhtqk5F-_k",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              seterrormsg(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormsg(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormsg(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img className="w-full" src={bg} alt="bg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-3/12 mx-auto right-0 left-0 my-36 text-white flex flex-col opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-600"
        />
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-600"
          />
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <p className="py-2 text-bold text-red-500 text-lg">{errormsg}</p>
        <button
          className="p-4 bg-red-700 w-full m-auto my-6 rounded-lg"
          onClick={handleForm}
        >
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
