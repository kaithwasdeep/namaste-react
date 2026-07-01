import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)

    const handleSignOut = () => {
        // dispatch(removeUser());
        // navigate("/login");
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }

    const handleGptSearch = () => {
        dispatch(toggleGptSearchView());
    }

    const handleChangeLanguage = (e) => {
        // console.log(e.target.value)
        dispatch(changeLanguage(e.target.value))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log("user === ", user)
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid, email, displayName, photoURL}));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        // Unsubscribe when component unmounts
        return () => unsubscribe();
    }, [])

    return (
        <div className="absolute bg-gradient-to-b from-black w-full z-10">
            <div className="flex justify-between mx-8">
                <div>
                    <img src={LOGO} alt="logo" className="w-48" />
                </div>
                {
                    user ? (
                        <div className="flex"> 
                            {
                                showGptSearch && (
                                    <select className="bg-gray-500 my-7 py-2 px-2 text-white font-semibold rounded-sm cursor-pointer" onChange={handleChangeLanguage}>
                                        {
                                            SUPPORTED_LANGUAGES.map(lang => <option value={lang.identifier} key={lang.identifier}>{lang.name}</option>)
                                        }
                                    </select>
                                )
                            }
                            <button className="bg-violet-700 text-white font-bold m-6 px-5 py-2 rounded-md" onClick={handleGptSearch}>{showGptSearch ? "Browse Movies" : "GPT Search"}</button>
                            <img className="w-10 h-10 mt-6" src={user.photoURL} alt="profile-img" />               
                            <button className="bg-red-600 text-white font-bold m-6 px-5 py-2 rounded-md" onClick={handleSignOut}>Sign Out</button>
                        </div>
                    ) : (
                        <div>                
                            <Link to="/login"><button className="bg-red-600 text-white font-bold m-6 px-5 py-2 rounded-md">Sign In</button></Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Header;