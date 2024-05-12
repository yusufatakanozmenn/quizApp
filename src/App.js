import "./App.css";
import Introduce from "./pages/introduce/introduce";
import Quiz from "./pages/quiz/quiz";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Introduce />} />
          <Route path="/quiz:difficulty/:amount" element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
