import React from 'react';
import { useState, useEffect } from 'react';
import { MENU_URL } from '../utils/constants';

function useRestaurantMenu(id) {

    const [resMenu, setResMenu] = useState(null);

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

     return resMenu;
}

export default useRestaurantMenu