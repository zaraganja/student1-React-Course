// import React from 'react'

import MyButton from "./components/MyButton"
import CommentsList from "./components/CommentsList"
import CommentAPI from "./components/CommentAPI"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./components/Login"
import NotFound from "./components/NotFound"
import LearnUseref from "./components/LearnUseref"
import Header from "./components/Header"

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
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>}  >
        <Route index element={<CommentsList/>}  ></Route>
        <Route path="comments" element={<CommentAPI/>} ></Route>
        <Route path="useref" element={<LearnUseref/>} ></Route>
      </Route>
      <Route path="login" element={<Login/>} ></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    </BrowserRouter>
    // <div className=" flex flex-col bg-red-100 w-screen h-auto min-h-screen  " >
    //   <h1>hi</h1>
    //   {/* <button onClick={()=>sayHi()} className="w-[300px] h-[30px] border-[2px] border-blue-700 mt-10 ml-10 bg-white " >سلام</button> */}
    //   {/* <p id="myP"></p> */}
    //   {/* <MyButton mytitle={"آلرت کن"} myfunction={alertHi} /> */}
    //   {/* <MyButton mytitle={"افزودن به سبد خرید"} myfunction={addToBasket} /> */}
    //   {/* <CommentsList /> */}
    //   <CommentAPI />
    // </div>
  )
}

export default App