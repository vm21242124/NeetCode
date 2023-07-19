import React from 'react'
import './Allproblem.css'
import { problemList } from '../../tempdata.js'
const Allproblem = () => {
    return (
        <div className="allproblems">
            <h3>Solve Problem</h3>
            <div className="problems">
                <div style={{ width: "10%", fontWeight: "700" }} className="pno">No</div>
                <div style={{ width: "50%", fontWeight: "700" }} className="pname">Name</div>
                <div style={{ width: "10%", fontWeight: "700" }} className="pdiff">Difficulty</div>
                <div style={{ width: "10%", fontWeight: "700" }} className="pcategory">Category</div>
                <div style={{ width: "10%", fontWeight: "700" }} className="ptryout">
                    TryOut
                </div>
            </div>

            {problemList.map((item, id) => (
                <div key={id} className="problems">
                    <div style={{ width: "10%" }} className="pno">{item.id}</div>
                    <div style={{ width: "50%", cursor: "pointer", color: "blueviolet" }} className="pname">{item.title}</div>
                    <div style={{ width: "10%" }} className="pdiff">{item.difficulty}</div>
                    <div style={{ width: "10%" }} className="pcategory">{item.category}</div>
                    <div style={{ width: "10%",cursor:"pointer",color:"blueviolet",textDecoration:"underline" }} className="ptryout">
                        Solve
                    </div>
                </div>

            ))}


        </div>
    )
}

export default Allproblem