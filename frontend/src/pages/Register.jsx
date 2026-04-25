import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await axios.post(
        "https://hotel-management-pro-backend.onrender.com/api/auth/register",
        { name, email, password }
      );

      alert("Registered Successfully ✅");

      navigate("/login");
    } catch (err) {
      alert("Registration Failed ❌");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={submit}>Register</button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "250px",
    margin: "100px auto",
  },
};