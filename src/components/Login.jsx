import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate, validateName } from "../utils/Validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_BACKGROUND_IMG, USER_PIC } from "../utils/constants";

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const loginHandler = () => {
    let msg;
    if (newUser) {
      msg = validateName(
        fullName.current.value,
        email.current.value,
        password.current.value
      );
      if (msg !== null) setErrorMsg(msg);
      else {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;

            updateProfile(user, {
              displayName: fullName.current.value,
              photoURL: USER_PIC,
            })
              .then(() => {
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
                setErrorMsg(error);
              });
          })

          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorCode + " - " + errorMessage);
          });
      }
    } else {
      msg = validate(email.current.value, password.current.value);
      if (msg !== null) setErrorMsg(msg);
      else {
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
            setErrorMsg(errorCode + " - " + errorMessage);
          });
      }
    }
  };

  return (
    <div className="h-[100vh]">
      <Header />
      <div className="grad"></div>
      <div>
        <div>
          <img
            className="h-screen object-cover lg:h-auto"
            src={NETFLIX_BACKGROUND_IMG}
            alt="netflixBackgroundImage"
          />
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" text-white bg-black opacity-80 absolute right-0 left-0 
            m-0 w-[80%] lg:my-24 mx-auto lg:w-3/12 py-6 px-16 top-40 lg:top-6"
        >
          <h1 className="z-30 py-5 text-[36px] font-bold">
            {newUser ? "Sign Up" : "Sign In"}
          </h1>
          {newUser && (
            <input
              type="text"
              className="px-2 py-4 my-3 bg-gray-700 border border-white w-full rounded-lg"
              ref={fullName}
              placeholder="Enter your Full Name"
            />
          )}
          <input
            type="email"
            className="px-2 py-4 my-3 bg-gray-700 border border-white w-full rounded-lg"
            ref={email}
            placeholder="Enter your Email"
          />
          <input
            type="password"
            className="px-2 py-4 my-3 bg-gray-700  w-full rounded-lg border border-white"
            ref={password}
            placeholder="Enter your Password"
          />
          {errorMsg && (
            <p className="py-2 text-red-600 font-semibold text-lg">
              {errorMsg}
            </p>
          )}
          <button
            onClick={loginHandler}
            className="mt-3 btn-color font-semibold w-full py-3 rounded-lg"
          >
            {newUser ? "Sign Up" : "Sign In"}
          </button>
          <p
            onClick={() => setNewUser(!newUser)}
            className="my-3 py-5 cursor-pointer font-semibold text-lg"
          >
            {newUser
              ? "Already Registered? Log in here."
              : "New to Netflix? Sign up now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
