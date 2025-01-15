
import { Link } from 'react-router-dom'
import { IoChevronBack } from "react-icons/io5";

const Login = () => {
  return (
    <div>
        <Link to={"/"}><IoChevronBack size={35} color='red' /></Link><br /><br />
      Login page
    </div>
  )
}

export default Login
