import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!email || !password) {
      return alert("Please fill all fields ⚠️");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "https://hotel-management-pro-backend.onrender.com/api/auth/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      alert("Login Successful ✅");
      navigate("/");
    } catch (err) {
      alert("Login Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* LEFT SIDE (BIG IMAGE) */}
      <div style={styles.left}>
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.O_dp5Kf4BPevQeh192RwFAHaHQ?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="hotel"
          style={styles.heroImg}
        />

        <h2 style={styles.title}>Welcome to HotelBooking</h2>
        <p style={styles.tagline}>
          Discover amazing hotels, book instantly & enjoy your stay 
        </p>
      </div>

      {/* RIGHT SIDE (LOGIN CARD) */}
      <div style={styles.right}>
        <div style={styles.card}>
          <h2 style={{ textAlign: "center" }}>Login</h2>

          <input
            type="text"
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

          <button
            style={styles.loginBtn}
            onClick={submit}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log in"}
          </button>

          <p style={styles.forgot}>Forgotten password?</p>

          <hr />

          <button
            style={styles.signupBtn}
            onClick={() => navigate("/register")}
          >
            Create new account
          </button>
        </div>
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
    flexWrap: "wrap",
  },

  left: {
    width: "350px",
    textAlign: "center",
  },

  heroImg: {
    width: "280px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
  },

  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#1877f2",
  },

  tagline: {
    fontSize: "16px",
    color: "#444",
    marginTop: "10px",
  },

  right: {
    display: "flex",
    justifyContent: "center",
  },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    width: "360px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "16px",
    outline: "none",
  },

  loginBtn: {
    background: "#1877f2",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "6px",
    fontSize: "18px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  forgot: {
    textAlign: "center",
    color: "#1877f2",
    cursor: "pointer",
    fontSize: "14px",
  },

  signupBtn: {
    background: "#336f27",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};