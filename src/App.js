import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
