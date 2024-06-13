import React, { useState } from 'react';
import ItemLists from './ItemLists';

function RestaurantCategory({data}) {

    const [itemList, setItemList] = useState(false);

    const toggleAccordion =  () => {
        setItemList(!itemList);
    }

  return (
    <div>
        
        <div className='bg-gray-100 p-4 m-4 w-6/12 mx-auto'>
            <div className=' cursor-pointer flex justify-between' onClick={toggleAccordion}>
                <span className=' font-bold text-xl'> {data?.title} ({data?.itemCards.length}) </span>
                <span> ⬇️ </span>
            </div>

            <div>
                {itemList && <ItemLists dataList={data?.itemCards} />}
            </div>
        </div>
        
    
        
    </div>
  )

}

export default RestaurantCategory