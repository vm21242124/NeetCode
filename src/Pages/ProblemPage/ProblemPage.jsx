import React, { useEffect, useState } from 'react'
import './ProblemPage.css'
import Navbar from '../../Component/Navbar/Navbar'
import { cppsnippet } from '../../tempdata.js'
import CodeMirror from '@uiw/react-codemirror'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { cpp } from '@codemirror/lang-cpp'
import { useSelector } from 'react-redux'

const ProblemPage = () => {
    const user = useSelector((state) => state.user.user)
    const nav=useNavigate()
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
const LeftProblemDis = ({ problem1 }) => {

    return (
        <div className="leftproblemdis">
            <div className="leftproblemMenu">
                <span >Description</span><span>Editorial</span><span>Comments</span>
            </div>
            <div className="problemStatement">
                <h3 className="ptitle">{problem1?.title}</h3>
                <p style={{ margin: "5px", color: "blue", fontSize: '20px', textTransform: "capitalize" }}>{problem1?.level}</p>
                <p className='pdescription'>{problem1?.description}</p>
            </div><div className="problem-examples">

                <div className="peg">
                    <h4>Examples:</h4>
                    <div className="pegexp">
                        {problem1?.examples?.split("\n").map((item, key) => (
                            <React.Fragment key={key}>
                                {item}
                                <br />
                            </React.Fragment>
                        ))}
                    </div>
                </div>

            </div><div className="problem_constraints">
                <h4>Constaints</h4>
                <div>{problem1?.constraint}</div>
                <span>o(n)</span>
            </div>

        </div>
    )
}
const RightProblemIDE = ({ problem }) => {
    const [lang, setLang] = useState("cpp")

    const [code, setCode] = useState(cppsnippet)


    const handleSubmit = (e) => {
        e.preventDefault();
        const stdin = problem?.stdin
        axios.post(`/problem/submit/${problem._id}`, { code, stdin, lang })
    }
    return (
        <div className="leftproblemdis">
            <div className="rightidetop">
                <div className="lang">
                    <select className='langsel'>
                        <option onClick={() => setLang("cpp")} >cpp</option>
                        <option onClick={() => setLang("java")} >java</option>
                        <option onClick={() => setLang("python")}>python</option>
                    </select>
                </div>
            </div>
            <div className="codepallete">
                {/* <CodeEditor/> */}
                <CodeMirror value={cppsnippet}
                    className='pcode'
                    theme="dark"
                    extensions={[cpp({ cpp: true })]}
                    onChange={(val) => setCode(val)} />
            </div>
            <div className="idebottom">
                <span>console</span>
                <div className="btnss">

                    <button className="runbtn" onClick={() => console.log(code)}>Run</button>
                    <button className="submitbtn" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}
export default ProblemPage