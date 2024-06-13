import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const onlineStatus = useOnlineStatus();
    const [loginout, setLoginout] = useState("Login");
    return(
        <div className="flex justify-between p-2 m-2 bg-green-50 shadow-lg">
            <div >
                <img className=" w-44" src= {LOGO_URL}></img>
            </div>
            <div className="flex  items-center">
                <ul className="flex p-4 m-8"> 
                    <li className="px-4">
                        Online Status {onlineStatus ? '✔️' : '❌'} 
                    </li>
                    
                    <li className="px-4">
                        <Link to="/">Home</Link></li>

                    <li className="px-4">
                        <Link to="/about">About Us</Link></li>

                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link></li>

                    <li className="px-4">
                        <Link>Cart</Link></li>

                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>

                    <button className="loginBtn" onClick={() => {
                        loginout === "Login"? setLoginout("Logout") : setLoginout("Login");
                    }}>{loginout} </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;