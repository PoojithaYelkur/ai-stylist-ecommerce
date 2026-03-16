import { useState } from "react";
import API from "../api";

export default function Register() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const register = async () => {

    await API.post("/users/register", {
      email,
      password
    });

    alert("Registered");
  };

  return (

    <div className="form">

      <h2>Register</h2>

      <input
        placeholder="Email"
        onChange={e=>setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        onChange={e=>setPassword(e.target.value)}
      />

      <button onClick={register}>
        Register
      </button>

    </div>
  );
}