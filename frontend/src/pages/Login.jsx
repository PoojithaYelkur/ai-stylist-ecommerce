import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // ✅ inside component

  const login = async () => {
    const res = await API.post("/users/login", {
      email,
      password,
    });

    localStorage.setItem("token", res.data.token);

    navigate("/profile");
  };

  return (
    <div>
      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;