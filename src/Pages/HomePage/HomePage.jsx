import React from 'react'
import './HomePage.css'
import Navbar from '../../Component/Navbar/Navbar'
import Allproblem from '../../Component/AllProblems/Allproblem'
const HomePage = () => {
  return (
    <div className="Homepage">
        <Navbar/>
        <Allproblem/>
    </div>
  )
}

export default HomePage