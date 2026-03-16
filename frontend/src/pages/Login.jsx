import { useState } from "react";
import API from "../api";

export default function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const login = async () => {

    const res = await API.post("/users/login", {
      email,
      password
    });

    localStorage.setItem("token", res.data.token);

    window.location = "/products";
  };

  return (

    <div className="form">

      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={e=>setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        onChange={e=>setPassword(e.target.value)}
      />

      <button onClick={login}>
        Login
      </button>

    </div>
  );
}