// import React from 'react'

import MyButton from "./components/MyButton"

const App = () => {

  const sayHi=()=>{
    document.getElementById("myP").innerText="سلام ری اکت"
  }

  const alertHi=()=>{
    alert("Hello Component base Project")
  }

  const addToBasket=()=>{
    alert("added to basket")
  }

  return (
    <div className=" flex bg-red-100 w-screen h-auto min-h-screen  " >
      <h1>hi</h1>
      <button onClick={()=>sayHi()} className="w-[300px] h-[30px] border-[2px] border-blue-700 mt-10 ml-10 bg-white " >سلام</button>
      <p id="myP"></p>
      <MyButton mytitle={"آلرت کن"} myfunction={alertHi} />
      <MyButton mytitle={"افزودن به سبد خرید"} myfunction={addToBasket} />
    </div>
  )
}

export default App