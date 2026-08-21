import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SyllabusList from "./components/SyllabusList";
import EditSub from "./components/EditSub";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/syllabus" element={<SyllabusList />}></Route>
        <Route path="/subject/:id" element={<EditSub />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
