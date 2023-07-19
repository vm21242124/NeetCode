import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import HomePage from "./Pages/HomePage/HomePage";
import ProblemPage from "./Pages/ProblemPage/ProblemPage";
import LoginPage from "./Pages/LoginPage/LoginPage";

function App() {
  return (
    <>
    {/* <HomePage/> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/problem" element={<ProblemPage />} />
          <Route exact path="/admin" element={<AdminPanel />} />
          <Route exact path="/login" element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
