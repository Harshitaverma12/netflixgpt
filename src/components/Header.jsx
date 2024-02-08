import React from "react";
import logo from "./../Assets/logo.png";
import signout from "./../Assets/signout.png";
import { signOut } from "firebase/auth";
import { auth } from "./../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute flex justify-between w-full bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        style={{ marginTop: "-4rem" }}
        src={logo}
        alt="hello"
      />
      {user && (
        <div className="flex p-2 pt-4">
          <img className="h-12 w-12 " src={user?.photoURL} alt="" />
          <button
            onClick={handleSignOut}
            className="font-bold text-white pb-16"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
