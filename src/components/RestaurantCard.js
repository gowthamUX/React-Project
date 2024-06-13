import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {

    const {resData} = props

    const {name, cuisines, costForTwo, avgRating, cloudinaryImageId} = resData?.info
    return (
        <div className="w-[250px] h-[500px] p-4 m-4 bg-gray-100 hover:bg-gray-200">
            <img className="h-[300px]"
        
            alt= "res-logo" 
            src={ CDN_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4> {cuisines.join(", ")}</h4>
            <h4> {costForTwo}</h4>
            <h4> {avgRating}</h4>
        </div>  
    )
}

export default RestaurantCard