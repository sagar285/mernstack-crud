import React from 'react'
import { Link,useNavigate } from "react-router-dom"

const Navbar = () => {
    const auth =localStorage.getItem("user");
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear(); 
        navigate("/signup")
    }
   
    
  return (
    <div>
  {auth?  <ul className='flex  pr-6 text-white font-semibold text-xl py-5  bg-blue-900'>
    <Link to="/"><li className='ml-3 hover:shadow-sm hover:shadow-slate-50'>Product</li></Link>
    <li className='ml-3'><Link to="/add"> AddProduct</Link></li>
    <li className='ml-3'><Link to="/update"> UpdateProduct</Link></li>
    <li className='ml-3'><Link to="/profile">Profile</Link></li>
     <li className='ml-3 text-white'><Link to="/signup" onClick={logout}>Logout ({JSON.parse(auth).data.name})</Link></li></ul>
    :
    <ul className='flex justify-end  pr-[12rem] text-white font-semibold text-xl py-5  bg-blue-900'>
     <li className='ml-3'><Link to="/login">login</Link></li>
  <li className='ml-3'><Link to="/signup">Signup</Link>  </li> 
    </ul>}

    </div>
  )
}

export default Navbar