import React, { useEffect } from 'react'

const Button = (props) => {
    useEffect(() => {
      console.log(props.location);
    }, [])

    const sendToServer=()=>{
        if(props.location === "basket"){console.log("send basket data to server")}
        else if(props.location === "slider"){console.log("slider value sent it to server")}
    }
    
  return (
    <>
    <button onClick={()=> sendToServer()} className= {`flex ${props.location === "basket" && `bg-red-400 text-white `} ${props.location === "slider" && ` bg-blue-400 text-black `} w-10 h-10 px-10 py-10 place-content-center place-items-center rounded-lg border border-black text-[18px]`}  >ثبت</button>
    {props.location === "basket" &&  <h1 onClick={()=> props.AlertMsg()} >از سبد خرید</h1> }
    {props.location === "slider" && <h1>از اسلایدر</h1> } 
    </>

  )
}

export default Button