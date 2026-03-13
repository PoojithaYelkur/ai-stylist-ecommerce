import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await API.post("/users/login", {
        email: email,
        password: password,
      });

      console.log("LOGIN RESPONSE:", res.data);

      // ✅ store token only if exists
      if (res.data && res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      alert("Login success");

      // ✅ redirect after success
      navigate("/products");

    } catch (err) {
      console.log("LOGIN ERROR:", err);
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button onClick={login}>
        Login
      </button>
    </div>
  );
}

export default Login;