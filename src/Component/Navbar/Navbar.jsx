import React from 'react'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../../ReduxSetUp/userSlice.js'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const user = useSelector((state) => state.user.user)
  const dispatch=useDispatch()
  const nav=useNavigate()
  return (
    <div className="Navbar">
      <h3 style={{cursor:"pointer"}} onClick={()=>nav('/')}>NeetCode</h3>
      <div className="leftnav">
        <span>Problems</span><span>Contest</span><span>POTD</span><span onClick={()=>nav('/ide')}>IDE</span>
      </div>
      <div className="rightnav">
        {user?<span className="btnlogin" style={{cursor:"pointer"}} >Hi..{user?.name}</span>:<span className="btnlogin" style={{cursor:"pointer"}} onClick={()=>nav('/login')}> LOG IN</span>}
        <span className="btnlogin" >{user ? <span style={{cursor:"pointer"}} onClick={()=>dispatch(removeUser())}>Logout</span> : "SIGN UP"}</span>

      </div>
    </div>
  )
}

export default Navbar