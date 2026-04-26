// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const submit = async () => {
//     try {
//       await axios.post(
//         "https://hotel-management-pro-backend.onrender.com/api/auth/register",
//         { name, email, password }
//       );

//       alert("Registered Successfully ✅");

//       navigate("/login");
//     } catch (err) {
//       alert("Registration Failed ❌");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Register</h2>

//       <input
//         placeholder="Name"
//         onChange={(e) => setName(e.target.value)}
//       />

//       <input
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button onClick={submit}>Register</button>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//     width: "250px",
//     margin: "100px auto",
//   },
// };
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    if (!name || !email || !password) {
      return alert("All fields required ❌");
    }

    try {
      await axios.post(
        "https://hotel-management-pro-backend.onrender.com/api/auth/register",
        { name, email, password }
      );

      alert("Registered Successfully ✅");
      navigate("/login");
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("Registration Failed ❌");
    }
  };

  return (
    <div style={styles.container}>
      {/* LEFT */}
      <div style={styles.left}>
        <h1 style={styles.logo}>HotelBooking</h1>
        <p style={styles.tagline}>
          Join us and book the best hotels instantly.
        </p>
      </div>

      {/* RIGHT CARD */}
      <div style={styles.card}>
        <h2>Create an account</h2>
        <p style={styles.sub}>It's quick and easy.</p>

        <input
          placeholder="Full Name"
          style={styles.input}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email address"
          style={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.signupBtn} onClick={submit}>
          Sign Up
        </button>

        <p style={styles.login} onClick={() => navigate("/login")}>
          Already have an account?
        </p>
      </div>
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    height: "100vh",
    background: "#f0f2f5",
    alignItems: "center",
    justifyContent: "center",
    gap: "80px",
  },

  left: {
    width: "400px",
  },

  logo: {
    fontSize: "42px",
    color: "#1877f2",
    marginBottom: "10px",
  },

  tagline: {
    fontSize: "18px",
  },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "10px",
    width: "350px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  sub: {
    fontSize: "14px",
    color: "gray",
  },

  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "14px",
  },

  signupBtn: {
    background: "#42b72a",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  login: {
    textAlign: "center",
    color: "#1877f2",
    cursor: "pointer",
    marginTop: "10px",
  },
};