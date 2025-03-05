import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
    localStorage.setItem("token", response.data.token);
    alert("Login successful!");
  };

  return (
    <div>
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={loginUser}>Login</button>
    </div>
  );
};

export default Login;
