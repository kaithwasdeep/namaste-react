import {LOGO_URL} from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
 
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const userData = useContext(UserContext);
    // console.log("Header render()");
    
    const cartItems = useSelector(store => store.cart.items);
    // console.log("cartItems === ", cartItems);
    // If no dependency array => useEffect is called on every render
    // If dependency array is empty = [] => useEffect is called on initial render(just once)
    // If dependency array is [btnName] => useEffect is called everytime when btnName is updated
    // Note: useEffect is called on every initial render
    useEffect(() => {
        // console.log("useEffect called")
    }, [btnName])

    return (
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        {onlineStatus === true ? <button className="online-btn">Online</button> : <button className="offline-btn">Offline</button>}
                    </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart"><strong>Cart - ({cartItems.length} items)</strong></Link></li>
                    <li>
                        <button className="login-btn" onClick={
                            () => {
                                btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
                            }
                        }>{btnName}</button>
                    </li>
                    <li><b>{userData.loggedInUser}</b></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;