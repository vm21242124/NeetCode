import React from 'react'
import './Navbar.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const user = useSelector((state) => state.user.user)
  const nav=useNavigate()
  return (
    <div className="Navbar">
      <h3 onClick={()=>nav('/')}>NeetCode</h3>
      <div className="leftnav">
        <span onClick={()=>nav('/')}>Problems</span><span>Contest</span><span>POTD</span><span>IDE</span>
      </div>
      <div className="rightnav">

        <span className="btnlogin">{user ? `Hii.. ${user.name}` : "LOG IN"}</span>
        <span className="btnlogin">{user ? "" : "SIGN UP"}</span>

      </div>
    </div>
  )
}

export default Navbar