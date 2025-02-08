// import React from 'react'

import MyButton from "./components/MyButton"
import CommentsList from "./components/CommentsList"
import CommentAPI from "./components/CommentAPI"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./components/Login"
import NotFound from "./components/NotFound"
import LearnUseref from "./components/LearnUseref"
import Header from "./components/Header"
import { UserProvider } from "./UserContext"
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux"
import { store,persistor } from "./Redux/store"
import UseCallBackSample from "./components/UseCallBackSample"
import UseMemoSample from "./components/UseMemoSample"
import AddtoBasket from "./components/AddtoBasket"
import BasketList from "./components/BasketList"
import SliderRange from "./components/SliderRange"

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
    <Provider store={store} >
    <PersistGate loading={null} persistor={persistor} >
      <UserProvider>
        <BrowserRouter>
           <Routes>
                 <Route path="/" element={<Header/>}  >
                   <Route index element={<CommentsList/>}  ></Route>
                   <Route path="comments" element={<CommentAPI/>} ></Route>
                   <Route path="useref" element={<LearnUseref/>} ></Route>
                   <Route path="usecallbackSample" element={<UseCallBackSample/>} ></Route>
                   <Route path="useMemosample" element={<UseMemoSample/>} ></Route>
                   <Route path="addToBasket" element={<AddtoBasket/>} ></Route>
                   <Route path="basketList" element={<BasketList/>} ></Route>
                   <Route path="sliderRange" element={<SliderRange/>} ></Route>
                 </Route>
                 <Route path="login" element={<Login/>} ></Route>
                 <Route path="*" element={<NotFound/>}></Route>
              </Routes>
                </BrowserRouter>
                </UserProvider>
     </PersistGate>
    </Provider>
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