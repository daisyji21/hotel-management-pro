// 
import { useState } from "react";
import axios from "axios";

export default function ChatBot() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);
  const [open, setOpen] = useState(false);

  const sendMessage = async () => {
    if (!msg.trim()) return;

    const userMsg = { sender: "user", text: msg };
    setChat((prev) => [...prev, userMsg]);

    try {
      const res = await axios.post(
        "https://hotel-management-pro-backend.onrender.com/api/ai",
        { message: msg }
      );

      const botMsg = { sender: "bot", text: res.data.reply };
      setChat((prev) => [...prev, botMsg]);
    } catch (err) {
      const botMsg = { sender: "bot", text: "Server error ❌" };
      setChat((prev) => [...prev, botMsg]);
    }

    setMsg("");
  };

  return (
    <>
      {/* 🔵 Floating Button */}
      <button
        style={styles.toggleBtn}
        onClick={() => setOpen(!open)}
        onMouseOver={(e) => (e.target.style.background = "#004a99")}
        onMouseOut={(e) => (e.target.style.background = "#0071c2")}
      >
        💬
      </button>

      {/* 💬 Chat Window */}
      {open && (
        <div style={styles.container}>
          {/* Header */}
          <div style={styles.header}>
            <span>Hotel Assistant 🤖</span>
            <button style={styles.closeBtn} onClick={() => setOpen(false)}>
              ✖
            </button>
          </div>

          {/* Chat Messages */}
          <div style={styles.chatBox}>
            {chat.map((c, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent:
                    c.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    ...styles.msg,
                    background:
                      c.sender === "user" ? "#0071c2" : "#e5e5ea",
                    color: c.sender === "user" ? "white" : "black",
                  }}
                >
                  {c.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div style={styles.inputBox}>
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Ask about hotels..."
              style={styles.input}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              style={styles.sendBtn}
              onMouseOver={(e) => (e.target.style.background = "#004a99")}
              onMouseOut={(e) => (e.target.style.background = "#0071c2")}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  toggleBtn: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#3c6236",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    fontSize: "24px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    transition: "0.3s",
  },

  container: {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "320px",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
    overflow: "hidden",
    animation: "fadeIn 0.3s ease",
  },

  header: {
    background: "#0071c2",
    color: "white",
    padding: "10px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  closeBtn: {
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
  },

  chatBox: {
    height: "280px",
    overflowY: "auto",
    padding: "10px",
    background: "#f4f6f8",
  },

  msg: {
    padding: "8px 12px",
    borderRadius: "15px",
    margin: "5px",
    maxWidth: "70%",
    fontSize: "14px",
  },

  inputBox: {
    display: "flex",
    borderTop: "1px solid #ddd",
  },

  input: {
    flex: 1,
    padding: "10px",
    border: "none",
    outline: "none",
    fontSize: "14px",
  },

  sendBtn: {
    background: "#0071c2",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    transition: "0.3s",
  },
};