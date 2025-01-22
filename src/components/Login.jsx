
import { Link } from 'react-router-dom'
import { IoChevronBack } from "react-icons/io5";
import { useContext } from 'react';
import { UserContext } from '../UserContext';

const Login = () => {
   const {setuser} = useContext(UserContext);
    const loginAsZohre=()=>{
      setuser("Zohre");
    }
  return (
    <div>
        {/* {mytext} */}
        <Link to={"/"}><IoChevronBack size={35} color='red' /></Link><br /><br />
      Login page
      <button onClick={()=>loginAsZohre()} className=' border border-black p-10'>
        login
      </button>
    </div>
  )
}

export default Login
