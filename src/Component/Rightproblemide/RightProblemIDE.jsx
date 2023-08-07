import React, { useState } from 'react'
import axios from 'axios'
import { cppsnippet, javasnippet, pythonsnippet } from '../../tempdata.js'
import { AiOutlineClose } from 'react-icons/ai'
import Editor from '@monaco-editor/react';
import './RightProblemIDE.css'


const RightProblemIDE = ({ problem }) => {

    const [lang, setLang] = useState("cpp")
    const [code, setCode] = useState(cppsnippet)
    const [cons, setConsole] = useState(false)
    const [op, setOp] = useState("")
    const [loader, setLoader] = useState(false)
    const [err, setError] = useState(null)
    const [result, setResult] = useState(true)
    const changeLang = (e) => {
        e.preventDefault();
        console.log(lang);
        setLang(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setConsole(true)
        setOp("")
        setLoader(true)
        setError(null)
        const stdin = problem?.stdin
        const codeBase64 = btoa(unescape(encodeURIComponent(code)));
        const stdinBase64 = btoa(unescape(encodeURIComponent(stdin)));



        try {
            const res = await axios.post(`/problem/submit/${problem._id}`, { code: codeBase64, stdin: stdinBase64, lang })

            const token = res.data.token

            setTimeout(async () => {
                try {
                    const op = await axios.get(`/problem/getop/${token}`);
                    if (op.status === 200) {
                        setOp(op.data.stdout);
                        let expop = problem.stdout.split("\n");
                        let acop = op.data.stdout.split("\n");

                        for (let i = 0; i < expop.length; i++) {
                            if (expop[i] !== acop[i]) {
                                setResult(false)
                                break;
                            }
                        }

                    } else {
                        setError("Compilation Error Check Your Code")
                    }
                } catch (e) {
                    setError("Compilation Error Check Your Code");
                } finally {

                    setLoader(false);
                }
            }, 15000);
        } catch (error) {

            setLoader(false);
        }
    }
    const handelchange = (value, e) => {
        setCode(value)
        
    }
    return (
        <div className="leftproblemdis">
            <div className="rightidetop">
                <div className="lang">
                    <select className='langsel' value={lang} onChange={changeLang} >
                        <option value='cpp' >cpp</option>
                        <option value='java'>java</option>
                        <option value='python'>python</option>
                    </select>
                </div>
            </div>
            <div className="codepallete">
                {lang === "cpp" ? <Editor
                    height="90%"
                    width="100%"
                    defaultLanguage="cpp"
                    defaultValue={cppsnippet}
                    onChange={handelchange}

                /> : ""}
                {lang === "java" ? <Editor
                    height="90%"
                    width="100%"
                    defaultLanguage="java"
                    defaultValue={javasnippet}
                    onChange={handelchange}

                /> : ""}
                {lang==="python"?<Editor
                    height="90%"
                    width="100%"
                    defaultLanguage="python"
                    defaultValue={pythonsnippet}
                    onChange={handelchange}

                />:""}

            </div>
            <div className="idebottom">
                <span>console</span>
                <div className="btnss">

                    <button className="runbtn" onClick={() => console.log(code)}>Run</button>
                    <button className="submitbtn" onClick={handleSubmit}>Submit</button>
                </div>
                {cons ? <div className="output">
                    {op ? <span style={{ color: "black", fontWeight: "700", fontSize: "20px", margin: "5px" }}>{result ? "successfully done 🎉🎉" : "oops wrong Output try again😓"}</span> : ""}
                    {loader ? <div className="loader">
                        <div className="l"></div>
                        <p>submiting your solution</p>
                    </div> : ""}
                    <div className="close"><AiOutlineClose onClick={() => setConsole(false)} fontSize={"20px"} cursor={"pointer"} fontWeight={"800"} color='red' /></div>
                    {err !== null ? <div className="op1">
                        {err}
                    </div> :
                        <div className="op1">
                            <p>stdin</p>
                            <p>expected op</p>
                            <p>your op</p>
                        </div>}
                    <div className="op">
                        <div className="stdin">
                            {problem?.stdin?.split("\n").map((item, key) => (
                                <React.Fragment key={key}>
                                    {item}
                                    <br />
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="stdout"> {problem?.stdout?.split("\n").map((item, key) => (
                            <React.Fragment key={key}>
                                {item}
                                <br />
                            </React.Fragment>
                        ))}</div>
                        <div className="stdout">{op?.split("\n").map((item, key) => (
                            <React.Fragment key={key}>
                                {item}
                                <br />
                            </React.Fragment>
                        ))}</div>
                    </div>





                </div> : ""}

            </div>

        </div>
    )
}
export default RightProblemIDE