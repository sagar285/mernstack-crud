import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

const PrivateComponet = () => {
    const auth =localStorage.getItem("user");
  return (
       auth?<Outlet/>:<Navigate to="/Signup"/>
  )
}

export default PrivateComponet