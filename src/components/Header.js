import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    const [loginout, setLoginout] = useState("Login");
    return(
        <div className="header">
            <div className ="logo-container">
                <img className="logo" src= {LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="loginBtn" onClick={() => {
                        loginout === "Login"? setLoginout("Logout") : setLoginout("Login");
                    }}>{loginout} </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;