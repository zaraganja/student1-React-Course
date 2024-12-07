/* eslint-disable react/prop-types */
// import React from 'react'

const MyButton = (props) => {
  return (
   <button onClick={()=> props.myfunction()}  className=' w-[300px] h-[30px] border bg-green-400 rounded-3xl border-black mt-10 ml-14 ' >
        {props.mytitle}
   </button>
  )
}

export default MyButton