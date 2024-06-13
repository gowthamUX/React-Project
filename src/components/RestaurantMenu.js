import React from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

function RestaurantMenu() {

    const {id} = useParams();

    const resMenu = useRestaurantMenu(id);


     if (resMenu === null){
        return <Shimmer />
     }

    

    const {name, avgRating, costForTwoMessage, city, cuisines} = resMenu.cards[2].card.card.info;


    const {itemCards} = resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    const restaurantCategory = resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter( (cat) => cat?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

     console.log(restaurantCategory);

  return (
    <div className='text-center'>
        <h1 className=' font-bold my-6 text-2xl'> {name}</h1>
         <p className=' font-bold text-xl'>
           {cuisines.join(",")} - {costForTwoMessage}
         </p>

         {restaurantCategory.map((res) => (<RestaurantCategory data={res?.card?.card} />))}
         
    </div>
  )
}

export default RestaurantMenu