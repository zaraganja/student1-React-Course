import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addBasketArr } from '../Redux/baskerArrSlice';
import { clearBasketArr } from '../Redux/baskerArrSlice';

const AddtoBasket = () => {
    const dispatch= useDispatch();
    const productList=[
        {
            id:1,
            name:"pro1",
            price:"1000",
            oldprice:"0"                       
        },
        {
            id:2,
            name:"pro2",
            price:"2000",
            oldprice:"2222"                   
        },
        {
            id:3,
            name:"prod3",
            price:"3000",
            oldprice:"2000"                   
        },
        {
            id:4,
            name:"prod4",
            price:"4000",
            oldprice:"300"                   
        }

    ]
    // const produc1={
    //     id:1,
    //     name:"T-Shirt",
    //     price:"1000",
    // }

    // const produc33={
    //     id:3,
    //     name:"shoes",
    //     price:"10333"
    // }
  return (
    <div className=' felx flex-col gap-10 bg-blue-200 w-full h-screen pt-20 ' >
      {/* <h1>{produc1.name} </h1>
      <button onClick={()=> dispatch(addBasketArr(produc1))} className=' border border-black p-10 hover:bg-red-200 ' >افزودن به سبد خرید </button>
      <h1>{produc33.name} </h1>
      <button onClick={()=> dispatch(addBasketArr(produc33)) } className=' border border-black p-10 hover:bg-red-200' >افزودن به سبد خرید</button> */}
      {productList?.map((item,index)=>{
        return(
            <div className=' bg-mainMyShopColor  mb-3' key={index}>
                <h1>{item.name} </h1>
                <h1>{item.price} </h1>
                <button onClick={()=> dispatch(addBasketArr(item))} className=' border border-black p-5  ' >افزودن به سبد خرید</button>
            </div>

        )
      })

      }
      <button onClick={()=> dispatch(clearBasketArr())} className=' border border-r-black p-5 mt-4' >پاک کردن همه محصولات</button>
    </div>
  )
}

export default AddtoBasket
