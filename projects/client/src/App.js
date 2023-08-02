import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";
<<<<<<< Updated upstream
=======
import ForgotPassword from "./pages/ForgotPassword";
import SuccessPage from "./pages/guest/SuccessPage";
import ResetPasswordPage from "./pages/guest/ResetPasswordPage";
import AdminDashboard from "./pages/adminDashboard";
import CashierDashboard from "./pages/cashierDashboard";
>>>>>>> Stashed changes

function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get(
  //       `${process.env.REACT_APP_API_BASE_URL}/greetings`
  //     );
  //     setMessage(data?.message || "");
  //   })();
  // }, []);
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       {message}
  //     </header>
  //   </div>
  // );
  return (
<<<<<<< Updated upstream
    <div className="App">
      <header className="App-header">
        <LandingPage/>
      </header>
    </div>
=======
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route
          path="/forgotPassword/emailSent"
          element={<SuccessPage purpose="email" />}
        />
        <Route
          path="/forgotPassword/passwordReset"
          element={<SuccessPage purpose="reset" />}
        />
        <Route path="/auth/reset-password/:token" element={<ResetPasswordPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/cashier/dashboard" element={<CashierDashboard />} />
      </Routes>
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;
