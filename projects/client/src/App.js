import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import ForgotPassword from "./pages/ForgotPassword";
import SuccessPage from "./pages/guest/SuccessPage";
import ResetPasswordPage from "./pages/guest/ResetPasswordPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/forgotPassword/emailSent" element={<SuccessPage purpose="email"/>} />
        <Route path="/forgotPassword/passwordReset" element={<SuccessPage purpose="reset"/>} />
        <Route path="/forgotPassword/resetPassword" element={<ResetPasswordPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
