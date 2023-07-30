import React, { useEffect, useState} from 'react'
import './ProblemPage.css'
import Navbar from '../../Component/Navbar/Navbar'
import { cppsnippet} from '../../tempdata.js'
import CodeMirror from '@uiw/react-codemirror'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { cpp } from '@codemirror/lang-cpp'


const ProblemPage = () => {
    const [problem,setProblem]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`/problem/${id}`).then((res)=>setProblem(res.data)).catch(e=>console.log(e.message))
    })
    return (
        <div>
            <Navbar />
            <div className="problempage">
                <LeftProblemDis problem1={problem}/>
                <RightProblemIDE />
            </div>
        </div>
    )
}
const  LeftProblemDis = ({problem1}) => {
    
    return (
        <div className="leftproblemdis">
            <div className="leftproblemMenu">
                <span >Description</span><span>Editorial</span><span>Comments</span>
            </div>
          <div className="problemStatement">
                    <h3 className="ptitle">{problem1?.title}</h3>
                    <p style={{ margin: "5px" ,color:"blue",fontSize:'20px',textTransform:"capitalize"}}>{problem1?.level}</p>
                    <p className='pdescription'>{problem1?.description}</p>
                </div><div className="problem-examples">
                        {problem1.examples?.map((item, key) => (
                            <div key={key} className="peg">
                                <h4>Example: {item.id}</h4>
                                <div className="pegexp">
                                    <span>Input: {item.input}</span>
                                    <span>Output: {item.output}</span>
                                    <span>Explanation:{item.explanation}</span>
                                </div>
                            </div>
                        ))}
                    </div><div className="problem_constraints">
                        <h4>Constaints</h4>
                        {problem1?.constraint?.map((item, key) => (
                            <span key={key}>👉{item.title}</span>
                        ))}
                        <span>o(n)</span>
                    </div>

        </div>
    )
}
const RightProblemIDE = () => {
    const [lang,setLang]=useState("cpp")
  
    const [code,setCode]=useState("")
    // console.log(code)

    
    return (
        <div className="leftproblemdis">
            <div className="rightidetop">
                <div className="lang">
                    <select className='langsel'>
                        <option onClick={()=>setLang("cpp")} >cpp</option>
                        <option onClick={()=>setLang("java")} >java</option>
                        <option onClick={()=>setLang("python")}>python</option>
                    </select>
                </div>
            </div>
            <div className="codepallete">
                {/* <CodeEditor/> */}
                <CodeMirror value={cppsnippet}
                    className='pcode'
                    theme="dark"
                    extensions={[cpp({cpp:true})]}
                    onChange={(val)=>setCode(val)} />
            </div>
            <div className="idebottom">
                <span>console</span>
                <div className="btnss">

                    <button className="runbtn" onClick={()=>console.log(code)}>Run</button>
                    <button className="submitbtn">Submit</button>
                </div>
            </div>
        </div>
    )
}
export default ProblemPage