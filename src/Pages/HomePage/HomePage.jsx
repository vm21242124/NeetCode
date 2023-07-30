import React from 'react'
import './HomePage.css'
import Navbar from '../../Component/Navbar/Navbar'
import Allproblem from '../../Component/AllProblems/Allproblem'
import Greeting from '../../Component/greeting/Greeting'
const HomePage = () => {
  return (
    <div className="Homepage">
        <Navbar/>
        <Greeting/>
        <Allproblem/>
    </div>
  )
}

export default HomePage