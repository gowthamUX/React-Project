import React from 'react';
import { CDN_URL } from '../utils/constants';

function ItemLists({dataList}) {

  console.log(dataList)
  return (
    <div> 
      {dataList.map( (item) => (
        <div className='border-gray-400 border-b-2 text-left p-4 flex justify-between' key={item.card.info.id}>

          <div className='w-10/12'>
            <div className='py-2'>
              <span>{item.card.info.name} </span> 
              <span>- {item.card.info.price/100} rs</span>
            
            </div>
          

            <p className='text-xs'> {item.card.info.description} </p>
          </div>

         <div className='p-4 w-2/12'>

            <div className='absolute'>
            
              <button className='p-1 m-9 mt-20 h-8 bg-white text-green-500 shadow-lg rounded-lg'>Add +</button>
            </div>

           <img src={CDN_URL + item.card.info.imageId}/>
           
          </div>
          
        </div>


      ))}
    </div>
  )
}

export default ItemLists