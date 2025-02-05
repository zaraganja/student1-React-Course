import {useState} from "react";
import { Link,Outlet } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useSelector } from "react-redux";

const Header = () => {
    const [showSubMenu, setshowSubMenu] = useState(false)
    const [mytext, setmytext] = useState(0);

    const username= useSelector((state)=> state.user.username);
    const basketNum= useSelector((state)=>state.basketNum.basketNum);

  return (
    <div className=" w-[100vw] h-screen bg-gray-500 ">
      <ul className=" flex flex-row gap-10 list-none">
        <li  ><Link to={"/"}>صفحه اصلی</Link></li>
        <li><Link to={"comments"} >نظرات</Link></li>
        <li><Link to={"/login"}>ورود</Link></li>
        <li><Link to={"*"}>۴۰۴</Link></li>
        <li><Link to={"useref"}>useref</Link></li>
        <li><Link to={"usecallbackSample"}>go to usecallback sample</Link></li>
        <li><Link to={"useMemosample"}>go to useMEMO sample</Link></li>
        <li><Link to={"addToBasket"} >صفحه محصولات</Link></li>
        <li><Link to={"basketList"} >سبد خرید </Link></li>

        
        


        

{/* 
        <li onClick={()=> {setshowSubMenu(!showSubMenu);setmytext("hi")}} className=" hover:cursor-pointer "><IoMdMenu size={32} /></li>
        <section className= {`flex-col w-20 h-20 bg-white absolute top-[3%] left-[30%] ${showSubMenu ? `flex`:`hidden`} `} >
            <p> {mytext} </p>
        </section> */}
      </ul>
      {/* <h1 className=" p-20 bg-red-200" > نام کاربری ریداکس {username} </h1>
      <h1> تعداد محصولات ریداکس {basketNum} </h1> */}
      <Outlet/>
    </div>
  );
};

export default Header;
