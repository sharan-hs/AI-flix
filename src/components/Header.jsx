import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { CHEVRON_DOWN, LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import {
  clearGPTResults,
  homePageView,
  toggleGptView,
} from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const [showSignout, setShowSignout] = useState(false);
  const user = useSelector((store) => store.user);
  const gptSearchValue = useSelector((store) => store.gpt.gptSearchView);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const auth = getAuth();
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
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    dispatch(toggleGptView());
    dispatch(clearGPTResults());
  };

  const languageHandler = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const homePageHandler = () => {
    dispatch(homePageView());
  };

  return (
    <div className="absolute w-full z-20 flex flex-row justify-between">
      <div>
        <img
          onClick={homePageHandler}
          className="w-24 ml-5 lg:w-48 cursor-pointer font-extrabold my-3"
          src={LOGO}
        />
      </div>
      {user && (
        <div className="my-2 lg:p-4 mx-4 lg:my-8 ">
          <div className="flex gap-2 lg:gap-6 items-center">
            {gptSearchValue && (
              <select
                onChange={languageHandler}
                className="p-2 lg:py-2 lg:px-4 btn-secondary text-black font-semibold rounded-lg"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.language}
                  </option>
                ))}
              </select>
            )}
            {!gptSearchValue && (
              <button
                onClick={handleGPTSearchClick}
                className="px-2 py-1 lg:px-4 lg:py-2 btn-secondary font-semibold text-black rounded-lg"
              >
                GPT Search
              </button>
            )}
            <img
              onClick={() => setShowSignout(!showSignout)}
              className="w-5 h-5 lg:w-10 lg:h-10 hover:cursor-pointer"
              src={user.photoURL}
            />
          </div>
          {showSignout && (
            <div className="my-4 p-2 bg-white cursor-pointer border border-black rounded">
              <button onClick={signOutHandler} className="text-lg">
                Sign out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
