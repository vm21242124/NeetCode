import React, { useEffect, useState} from 'react'
import './ProblemPage.css'
import Navbar from '../../Component/Navbar/Navbar'
import { javasnipet, problem } from '../../tempdata.js'
import CodeMirror from '@uiw/react-codemirror'
import {javascript} from "@codemirror/lang-javascript";
import { java } from '@codemirror/lang-java'
import { python } from '@codemirror/lang-python'


const ProblemPage = () => {
    return (
        <div>
            <Navbar />
            <div className="problempage">
                <LeftProblemDis />
                <RightProblemIDE />
            </div>
        </div>
    )
}
const LeftProblemDis = () => {
    return (
        <div className="leftproblemdis">
            <div className="leftproblemMenu">
                <span >Description</span><span>Editorial</span><span>Comments</span>
            </div>


            <div className="problemStatement">
                <h3 className="ptitle">{problem.title}</h3>
                <p style={{ margin: "5px" }}>{problem.difficulty}</p>
                <p className='pdescription'>{problem.discription}</p>
            </div>
            <div className="problem-examples">
                {problem.examples.map((item, key) => (
                    <div key={key} className="peg">
                        <h4>Example: {item.id}</h4>
                        <div className="pegexp">
                            <span>Input: {item.input}</span>
                            <span>Output: {item.output}</span>
                            <span>Explanation:{item.Explanation}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="problem_constraints">
                <h4>Constaints</h4>
                {problem.constraint.map((item, key) => (
                    <span key={key}>👉{item.title}</span>
                ))}
                <span>{problem.expectedtc}</span>
            </div>

        </div>
    )
}
const RightProblemIDE = () => {
    const [lang,setLang]=useState("cpp")
    const handlechange=()=>{

    }

    return (
        <div className="leftproblemdis">
            <div className="rightidetop">
                <div className="lang">
                    <select className='langsel'>
                        <option onClick={()=>setLang("cpp")} value="c++">cpp</option>
                        <option onClick={()=>setLang("java")} value="java">java</option>
                        <option onClick={()=>setLang("python")}value="python">python</option>
                    </select>
                </div>
            </div>
            <div className="codepallete">
                {/* <CodeEditor/> */}
                <CodeMirror value={javasnipet}
                    className='pcode'
                    theme="dark"
                    extensions={[java({java:true})]}
                    onChange={handlechange} />
            </div>
            <div className="idebottom">
                <span>console</span>
                <div className="btnss">

                    <button className="runbtn">Run</button>
                    <button className="submitbtn">Submit</button>
                </div>
            </div>
        </div>
    )
}
export default ProblemPage