import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/admin/login", { replace: true });
    } else {
      setIsAuthenticated(true); // ✅ Assume token is valid
    }
  }, [navigate]);

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;
