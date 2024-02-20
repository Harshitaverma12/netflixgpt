import React, { useEffect } from "react";
import logo from "./../Assets/logo.png";
import signout from "./../Assets/signout.png";
import { signOut } from "firebase/auth";
import { auth } from "./../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./../utils/UserSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

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
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component will unmount
    return () => unsubscribe();
  }, []);

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
