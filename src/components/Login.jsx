
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { IoChevronBack } from "react-icons/io5";
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import {setUsername,clearUsername} from "../Redux/userSlice";
import {setbasketNum,clearbasketNum} from "../Redux/basketNumSlice"
import { useDispatch } from 'react-redux';


const Login = () => {

// context 
   const {setuser} = useContext(UserContext);
    const loginAsZohre=()=>{
      setuser("Zohre");
    }
    // context *******

    const dispatch= useDispatch();

    const LogOut=()=>{
      dispatch(clearUsername());
      dispatch(clearbasketNum());
    }

    const [color, setcolor] = useState("red-100");

  return (
    <div className=' w-full h-screen flex flex-col' >
        {/* {mytext} */}
        <Link to={"/"}><IoChevronBack size={35} color='red' /></Link><br /><br />
      Login page
      <button onClick={()=>loginAsZohre()} className=' border border-black p-10'>
        login
      </button><br /><br />
      <button className=' border border-blue-100 p-10' onClick={()=> dispatch(setUsername("مانی"))} >ورود به عنوان کاربر شماره یک</button><br /><br />
      <button onClick={()=> LogOut()} className=' border p-10 border-gray-400' >خروج</button>
      <button onClick={()=> dispatch(setbasketNum(2))} >افزودن به سبد خرید</button><br /><br />
      <button onClick={()=> setcolor("blue-100")} >تغییر رنگ به آبی</button>
      <div className={`flex w-20 h-20 border border-black self-center ${color==="red-100" ? ` bg-red-100`:` bg-blue-200`} `} style={{backgroundColor:color}} >
        {color}
      </div>
    </div>
  )
}

export default Login
