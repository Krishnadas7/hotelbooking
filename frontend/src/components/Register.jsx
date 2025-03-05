import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    await axios.post("http://localhost:5000/api/auth/register", { email, password });
    alert("Registered successfully!");
  };

  return (
    <div>
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={registerUser}>Register</button>
    </div>
  );
};

export default Register;
