import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RequireAuth(props) {
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const protectedRoute = () => {
    const token = localStorage.getItem("token");
    axios({
      method: "POST",
      url: `http://localhost:${process.env.REACT_APP_PORT}/auth/protected`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        setAccess(result.data.access);
        //   navigate("/admin-controler/articles")
      })
      .catch((err) => {
        setAccess(false);
        navigate("/admin");
      });
  };

  useEffect(() => {
    protectedRoute();
  }, []);

  return <>{access ? props.children : null}</>;
}

export default RequireAuth;
