import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

     let [restaurantList, setRestaurantList] = useState([])

     const [searchText, setsearchText] = useState("");

     let [filrestaurantList, setfilrestaurantList] = useState([])

     useEffect(() => {fetchData()},[] );

     fetchData = async () =>{
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
            if (!data.ok) {
                throw new Error(`HTTP error! status: ${data.status}`);
            }
    
            const json = await data.json();
    
            setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setfilrestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
     } 

     if(restaurantList.length === 0){
        return <Shimmer />
     }

    return (
        <div className="body">
            <div className="filter">

                <div>
                    <input type="text" className="search-box" value={searchText}  onChange={(e) =>setsearchText(e.target.value) }></input>
                    <button onClick={()=> {
                        
                            const filterdRes = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setfilrestaurantList(filterdRes)

                    }}>search</button>
                </div>

                <button className="filter-btn" onClick={ () => { 
                    const resData = restaurantList.filter((restaurant) =>restaurant.info.avgRating >= 4 )

                    setfilrestaurantList(resData);
                    
                }}>Top Rated Restaurants</button>
            </div>

            <div className="res-conatainer">

                { filrestaurantList.map( (restaurant) => 
                
                <Link key={restaurant.info.id} to={"restaurantmenu/"+restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>
                
                )}


            </div>
        </div>
    )
}

export default Body;
