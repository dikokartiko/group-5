import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import ForgotPassword from "./pages/ForgotPassword";
import SuccessPage from "./pages/guest/SuccessPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/forgotPassword/emailSent" element={<SuccessPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
