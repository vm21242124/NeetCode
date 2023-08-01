import React, { useEffect, useState } from 'react'
import './ProblemPage.css'
import Navbar from '../../Component/Navbar/Navbar'

import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LeftProblemDis from '../../Component/LeftProblem/LeftProblemDis'
import RightProblemIDE from '../../Component/Rightproblemide/RightProblemIDE'


const ProblemPage = () => {
    const user = useSelector((state) => state.user.user)
    const nav = useNavigate()
    const [problem, setProblem] = useState([])
    const { id } = useParams()
    useEffect(() => {
        axios.get(`/problem/${id}`).then((res) => setProblem(res.data)).catch(e => console.log(e.message))

    })
    return (
        <div>
            <Navbar />
            <div className="problempage">
                <LeftProblemDis problem1={problem} />
                {user ?
                    <RightProblemIDE problem={problem} /> :
                    <div className="logindiv">
                        <p>please login to code</p>
                        <button onClick={() => nav('/login')} className='btnlogin' style={{ textTransform: "uppercase", border: "1px solid white", marginTop: "10px" }}>login</button>
                    </div>}
            </div>
        </div>
    )
}


export default ProblemPage