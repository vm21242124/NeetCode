import React, { useEffect, useState } from 'react'
import './AdminPanel.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AdminPanel = () => {
  const [view, setView] = useState("create_problem")
  const nav=useNavigate()
  const user=useSelector((state)=>state.user.user)
  useEffect(()=>{
    if(!user){
      nav('/')
    }
    if(user?.role!=='ADMIN'){
      nav('/')
    }
  })
  return (
    <div className="adminpanel">
      <div className="adminpage">
        <div className="leftadminmenu">
          <span onClick={() => setView("create_problem")} className="adminmenuitem">create problem</span>
          <span onClick={() => setView("manage_event")} className="adminmenuitem">manage event</span>
          <span className="adminmenuitem">comptition</span>
        </div>
        <div className="rightview">
          {view === "create_problem" ? <CreateProblem /> : ""}
        </div>
      </div>
    </div>
  )
}
const CreateProblem = () => {

 
  const [page, setPage] = useState("first")
  const [title, setPtitle] = useState("")
  const [description, setPdes] = useState("")
  const [level, setLevel] = useState("")
  const [examples, setEg] = useState("")
  const [constraint, setConstraint] = useState("")
  const [stdin, setStdin] = useState("")
  const [stdout, setStdop] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({title,level,description,examples,constraint,stdin,stdout});
    axios.post('/problem/create',{title,level,description,examples,constraint,stdin,stdout}).then((res)=>console.log(res.data)).catch(e=>console.log(e.message))
  }
  return (
    <div className="createproblem">
      <h1 style={{ textAlign: "center", margin: "5px", textTransform: "uppercase" }}>create problem</h1>
      {page === "first" ? <div className="create-problem-frm">
        <p className="pheading">problem title</p>
        <input type="text"
          required={true}
          onChange={(e) => setPtitle(e.target.value)}
          className="problem_title" />
        <p className="pheading">problem discription</p>
        <textarea type="text"
          required={true} className="problem_discription"
          onChange={(e) => setPdes(e.target.value)} />
        <p className="pheading">choose levels</p>
        <div className="problem_levels">
          <div onClick={() => setLevel("easy")} style={{ color: "#4CAF50" }}>EASY</div>
          <div onClick={() => setLevel("medium")} style={{ color: "orange" }}>MEDIUM</div>
          <div onClick={() => setLevel("hard")} style={{ color: "red" }}>HARD</div>
        </div>
        <p className="pheading">constraint</p>
        <textarea type="text" className="problem_testcases"
          onChange={(e) => setConstraint(e.target.value)} />
        <button onClick={() => (setPage("second"))} className='nextbtn'>NEXT</button>
      </div> :

        <div className="second">
          <p className="pheading">input</p>
          <textarea type="text" className="problem_testcases"
            onChange={(e) => setStdin(e.target.value)} />
          <p className="pheading">expected output </p>
          <textarea type="text" className="problem_testcases"
            onChange={(e) => setStdop(e.target.value)} />
          <p className="pheading">Examples</p>
          <textarea type="text" className="problem_testcases"
            onChange={(e) => setEg(e.target.value)} />
          <div className="btns">
            <button onClick={() => setPage("first")} className='nextbtn'>BACK</button>
            <button onClick={handleSubmit} className='nextbtn'>SUBMIT</button>
          </div>

        </div>

      }

    </div>
  )
}

export default AdminPanel