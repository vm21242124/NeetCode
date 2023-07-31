import React, { useEffect, useState } from 'react'
import './Allproblem.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Allproblem = () => {
  const nav=useNavigate()
    const [problems,setProblems]=useState([])
  
    
    useEffect(()=>{
        axios.get('/problem/all').then((res)=>setProblems(res.data)).catch((e)=>console.log(e.message))
    })
    
    return (
        <div className="allproblems">
            <h3>Solve Problem</h3>
            <div className="problems">
                <div style={{ width: "10%", fontWeight: "700" }} className="pno">No</div>
                <div style={{ width: "50%", fontWeight: "700" }} className="pname">Name</div>
                <div style={{ width: "10%", fontWeight: "700" }} className="pdiff">Difficulty</div>
                <div style={{ width: "10%", fontWeight: "700" }} className="ptryout">
                    TryOut
                </div>
            </div>

            {problems.map((item, id) => (
                <div key={id} className="problems">
                    <div style={{ width: "10%" }} className="pno">{id+1}</div>
                    <div onClick={()=>nav(`/problem/${item._id}`)} style={{ width: "50%", cursor: "pointer", color: "blueviolet",textTransform:"uppercase" }} className="pname" >{item.title}</div>
                    <div style={{ width: "10%" ,textTransform:"capitalize"}} className="pdiff">{item.level}</div>
                    
                    <div style={{ width: "10%",cursor:"pointer",color:"blueviolet",textDecoration:"underline" }} className="ptryout" onClick={()=>nav(`/problem/${item._id}`)}>
                        Solve
                    </div>
                </div>

            ))}


        </div>
    )
}

export default Allproblem