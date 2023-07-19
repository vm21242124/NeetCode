import React, { useState } from 'react'
import './AdminPanel.css'
const AdminPanel = () => {
  const [view, setView] = useState("create_problem")
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
  const [ptitle, setPtitle] = useState("")
  const [pdes, setPdes] = useState("")
  const [level, setLevel] = useState("")
  const [eg, setEg] = useState("")
  const [testcase, setTestcase] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title: ptitle, level, description: pdes, sampleEg: eg, testcases: testcase })
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
        <button onClick={() => (setPage("second"))} className='nextbtn'>NEXT</button>
      </div> :
        <div className="second">
          <p className="pheading">add test cases</p>
          <textarea type="text" className="problem_testcases"
            onChange={(e) => setTestcase(e.target.value)} />
          <p className="pheading">add examples</p>
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