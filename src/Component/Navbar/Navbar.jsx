import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="Navbar">
        <h3>NeetCode</h3>
        <div className="leftnav">
            <span>Problems</span><span>Contest</span><span>POTD</span><span>IDE</span>
        </div>
        <div className="rightnav">
            <button className="btnlogin">LOG IN</button>
            <button className="btnlogin">SIGN UP</button>
        </div>
    </div>
  )
}

export default Navbar