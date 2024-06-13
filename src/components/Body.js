import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

     console.log(restaurantList)

     const onlineStatus = useOnlineStatus();

     if(onlineStatus === false){
        return <h1>looks like you are offline</h1>
     }

     if(restaurantList.length === 0){
        return <Shimmer />
     }

    return (
        <div className="body">
            <div className="p-3 m-3 flex justify-between">

                <div>
                    <input type="text" className="border border-solid border-black m-3" value={searchText}  onChange={(e) =>setsearchText(e.target.value) }></input>
                    <button className=" bg-green-200 rounded-lg px-4 py-1" onClick={()=> {
                        
                            const filterdRes = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setfilrestaurantList(filterdRes)

                    }}>search</button>
                </div>

                <button className="mx-8 bg-gray-100 px-4 rounded-lg" onClick={ () => { 
                    const resData = restaurantList.filter((restaurant) =>restaurant.info.avgRating >= 4 )

                    setfilrestaurantList(resData);
                    
                }}>Top Rated Restaurants</button>
            </div>

            <div className="flex flex-wrap">

                { filrestaurantList.map( (restaurant) => 
                
                <Link key={restaurant.info.id} to={"restaurantmenu/"+restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>
                
                )}


            </div>
        </div>
    )
}

export default Body;
