import React from 'react'
import { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom'
import { MENU_URL } from '../utils/constants';

function RestaurantMenu() {

    const [resMenu, setResMenu] = useState(null);

    const {id} = useParams();


    useEffect(() => {fetchData()},[] );

    fetchData = async () =>{
        try {
            const data = await fetch(MENU_URL+id);
    
            if (!data.ok) {
                throw new Error(`HTTP error! status: ${data.status}`);
            }
    
            const json = await data.json();

            console.log(json);
    
            setResMenu(json?.data);
           
        } catch (error) {
            console.error("Error fetching data:", error);
        }
     } 

     if (resMenu === null){
        return <Shimmer />
     }

    const {name, avgRating, costForTwoMessage, city, cuisines} = resMenu.cards[2].card.card.info;


    const {itemCards} = resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;


  return (
    <div>
        <h1> {name}</h1>
        <h3>{avgRating}</h3>
        <h5>{costForTwoMessage}</h5>
        <h5>{city}</h5>
        <h5>{cuisines.join(',')}</h5>
        <br>
        </br>

        <h1>Menu</h1>
         {itemCards.map( (item) => (
             <li key = {item.card.info.id}>
                {item.card.info.name} - { "Rs." }
                {item.card.info.price/100}
             </li>
             ))}
    </div>
  )
}

export default RestaurantMenu