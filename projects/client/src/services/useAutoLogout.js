import { useEffect } from "react";
import { Link as ReactRouterLink, useHistory } from "react-router-dom";

const AUTO_LOGOUT_TIME = 12 * 60 * 60 * 1000; // 5 minutes in milliseconds

const useAutoLogout = () => {
  const nav = useHistory();
  let logoutTimer = null;

  const resetTimer = () => {
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
    logoutTimer = setTimeout(() => {
      nav.push("/");
      localStorage.removeItem("token");
    }, AUTO_LOGOUT_TIME);
  };

  useEffect(() => {
    resetTimer();
    window.addEventListener("click", resetTimer);
    return () => {
      window.removeEventListener("click", resetTimer);
    };
  }, []);
};

export default useAutoLogout;
