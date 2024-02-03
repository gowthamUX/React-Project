import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

     let [restaurantList, setRestaurantList] = useState([])

     const [searchText, setsearchText] = useState("");

     let [filrestaurantList, setfilrestaurantList] = useState([])

     useEffect(() => {fetchData()},[] );

     fetchData = async () =>{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

            const json = await data.json();
            
            console.log(json)

            setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setfilrestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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

                { filrestaurantList.map( (restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)}


            </div>
        </div>
    )
}

export default Body;
