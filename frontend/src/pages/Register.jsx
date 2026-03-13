import { useState } from "react";
import API from "../api";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      const res = await API.post("/users/register", {
        email,
        password,
      });

      console.log(res.data);
      alert("Register success");

    } catch (err) {
      console.log(err);
      alert("Register error");
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button onClick={register}>
        Register
      </button>
    </div>
  );
}

export default Register;