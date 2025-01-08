import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./pages/AddStudent";
import AllStudents from "./pages/AllStudents";
import Navbar from "./components/Navbar";
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<AllStudents />} />
        <Route path="/add" element={<AddStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
