import React from 'react'
import { useSelector } from 'react-redux'

const BasketList = () => {
    const basketArr= useSelector((state)=>state.basketArr.basketArr)

  return (
    <div className=' flex flex-col w-full h-screen bg-violet-300 '  >
        <h1>{basketArr.length} </h1>
      {basketArr?.map((item,index)=>{
        return(
            <div key={index} >
                <h1>{item.name} </h1>
                <span>{item.price.toLocaleString("fa-IR")}{"تومان"} </span>
            </div>
        )
      
      })}
    </div>
  )
}

export default BasketList
