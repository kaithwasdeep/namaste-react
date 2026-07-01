import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { DEFAULT_USER_AVATAR, LOGIN_BACKGROUND_IMAGE } from "../utils/constants";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // console.log(email.current.value);
        // console.log(password.current.value);
        const message = validateData(email.current.value, password.current.value);
        setErrorMessage(message);
        // console.log(message);
        if(message) return;

        if(!isSignInForm){
            // console.log("auth === ", auth)
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // console.log("created user === ", user)
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: DEFAULT_USER_AVATAR
                        }).then(() => {
                            const user = auth.currentUser;
                            // console.log("current user === ", user)
                            dispatch(addUser({uid: user.uid, displayName: user.displayName, email: user.email, photoURL: user.photoURL}))
                            // navigate("/browse");
                        }).catch((error) => {
                            setErrorMessage(error.message);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+" - "+errorMessage);
                });
        }else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    dispatch(addUser({uid: user.uid, displayName: user.displayName, email: user.email, photoURL: user.photoURL}))
                    // console.log("login user === ", user)
                    // navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+" - "+errorMessage);
                });

        }
    }

    const handleSignIn = () => {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <>
        <Header />
        
        <div className="absolute bg-black w-3/12 h-4/6 my-44 mx-auto right-0 left-0 bg-opacity-75">
            <form className="m-12" onSubmit={(e) => e.preventDefault()}>
                <label className="text-white text-2xl mb-4 font-semibold"> { isSignInForm ? "Sign In" : "Sign Up" }</label>
                {
                    !isSignInForm && (
                        <div className="mt-3">
                            <input type="text" ref={name} className="w-full px-1 py-2 rounded-sm font-light bg-gray-800 text-white"  placeholder="Full Name" />
                        </div>        
                    )
                }
                <div className="mt-3">
                    <input type="text" ref={email} className="w-full px-1 py-2 rounded-sm font-light bg-gray-800 text-white" placeholder="Email Address" />
                </div>
                <div className="mt-3">
                    <input type="password" ref={password} className="w-full px-1 py-2 rounded-sm font-light bg-gray-800 text-white" placeholder="Password" />
                </div>
                <p className="text-red-500 font-semibold py-2 text-sm">{errorMessage}</p>
                <button className="text-white bg-red-600 px-4 py-3 mt-4 w-full rounded-sm font-semibold" onClick={handleButtonClick}>{ isSignInForm ? "Sign In" : "Sign Up" }</button>
                <p className="text-white mt-3 cursor-pointer" onClick={handleSignIn}>{ isSignInForm ? "New to Netflix? Sign Up Now" : "Already registerd? Sign In now" }</p>
            </form>
        </div>

        <div className="">
            <img src={LOGIN_BACKGROUND_IMAGE} alt="back-image" />
        </div>
    </>
  )
}

export default Login;