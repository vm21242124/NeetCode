import React, { useState } from 'react'
import axios from 'axios'
import { cppsnippet, javasnippet, pythonsnippet } from '../../tempdata.js'
import CodeMirror from '@uiw/react-codemirror'
import { cpp } from '@codemirror/lang-cpp'
import { java } from '@codemirror/lang-java'
import { python } from '@codemirror/lang-python'
import './RightProblemIDE.css'
import { AiOutlineClose } from 'react-icons/ai'


const RightProblemIDE = ({ problem }) => {
    const [lang, setLang] = useState("cpp")

    const [code, setCode] = useState(cppsnippet)
    const [cons, setConsole] = useState(false)
    const [op, setOp] = useState("")
    const [loader, setLoader] = useState(false)
    const [err,setError]=useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setConsole(true)
        setOp("")
        setLoader(true)
        setError(null)
        const stdin = problem?.stdin
        const codeBase64 = btoa(unescape(encodeURIComponent(code)));
        const stdinBase64 = btoa(unescape(encodeURIComponent(stdin)));
        console.log({ code: codeBase64, stdin: stdinBase64, lang });


        try {
            const res = await axios.post(`/problem/submit/${problem._id}`, { code: codeBase64, stdin: stdinBase64, lang })
            console.log(res);
            const token = res.data.token
            
        setTimeout(async () => {
            try {
                const op = await axios.get(`/problem/getop/${token}`);
               if(op.status===200){

                setOp(op.data.stdout);
               }else{
                setError("Compilation Error Check Your Code")
               }     
            } catch (e) {
                setError("Compilation Error Check Your Code");
            } finally {
                console.log(err);
                setLoader(false);
            }
        }, 15000);
        } catch (error) {
           
            setLoader(false);
        }   
    }
    const handelchange = (e) => {
        e.preventDefault();
        setLang(e.target.value)
    }
    return (
        <div className="leftproblemdis">
            <div className="rightidetop">
                <div className="lang">
                    <select className='langsel' value={lang} onChange={handelchange} >
                        <option value='cpp' >cpp</option>
                        <option value='java'>java</option>
                        <option value='python'>python</option>
                    </select>
                </div>
            </div>
            <div className="codepallete">
                {/* <CodeEditor/> */}
                {lang === 'cpp' ? <CodeMirror
                    value={cppsnippet}
                    className='pcode'
                    theme='dark'
                    extensions={[cpp({ cpp: true })]}
                    onChange={(val) => setCode(val)}
                /> : ""}
                {lang === 'java' ? <CodeMirror
                    value={javasnippet}
                    className='pcode'
                    theme='dark'
                    extensions={[java({ java: true })]}
                    onChange={(val) => setCode(val)}
                /> : ""}
                {lang === 'python' ? <CodeMirror
                    value={pythonsnippet}
                    className='pcode'
                    theme='dark'
                    extensions={[python({ py: true })]}
                    onChange={(val) => setCode(val)}
                /> : ""}

            </div>
            <div className="idebottom">
                <span>console</span>
                <div className="btnss">

                    <button className="runbtn" onClick={() => console.log(code)}>Run</button>
                    <button className="submitbtn" onClick={handleSubmit}>Submit</button>
                </div>
                {cons ? <div className="output">
                    {loader ? <div className="loader">
                        <div className="l"></div>
                        <p>submiting your solution</p>
                    </div> : ""}
                    <div className="close"><AiOutlineClose onClick={() => setConsole(false)} fontSize={"20px"} cursor={"pointer"} fontWeight={"800"} color='red'/></div>
                    {err!==null? <div className="op1">
                        {err}
                    </div>:
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
                        <div className="stdout">{op}</div>
                    </div>




                </div> : ""}

            </div>

        </div>
    )
}
export default RightProblemIDE