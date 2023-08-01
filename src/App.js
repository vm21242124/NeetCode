import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import HomePage from "./Pages/HomePage/HomePage";
import ProblemPage from "./Pages/ProblemPage/ProblemPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import axios from "axios";
import IDE from "./Pages/IDE/IDE";
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      {/* <HomePage/> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/problem/:id" element={<ProblemPage />} />
          <Route exact path="/admin" element={<AdminPanel />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/ide" element={<IDE/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
