import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Seacrh
 * - RestaurantContainer
 *   - RestaurantCard
 *      -image
 *      -name of res, Star Rating, Cuisine, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Contact
 */

const Header = () => {
    return(
        <div className="header">
            <div className ="logo-container">
                <img className="logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = () => {
    return (
        <div className="res-card" style={styleCard}>
            <img
            className="res-logo" 
            alt= "res-logo" 
            src="https://media.istockphoto.com/id/488481490/photo/fish-biryani-with-basmati-rice-indian-food.jpg?s=612x612&w=0&k=20&c=9xEw3VOQSz9TP8yQr60L47uExyKF9kogRhQdlghlC00="></img>
            <h3>Nawabs Kitchen</h3>
            <h4> Biryani. North Indian, Asian</h4>
            <h4> 4.5 stars</h4>
            <h4> 38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Seacrh</div>

            <div className="res-conatainer">
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">

            <Header/>

            <Body/>
          
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
