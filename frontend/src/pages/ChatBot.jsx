import { useState } from "react";
import axios from "axios";

export default function ChatBot() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);
  const [open, setOpen] = useState(false);

  const sendMessage = async () => {
    if (!msg) return;

    const userMsg = { sender: "user", text: msg };
    setChat((prev) => [...prev, userMsg]);

    const res = await axios.post("http://localhost:5000/api/ai", {
      message: msg,
    });

    const botMsg = { sender: "bot", text: res.data.reply };
    setChat((prev) => [...prev, botMsg]);

    setMsg("");
  };

  return (
    <>
      {/* 💬 Toggle Button */}
      <button style={styles.toggleBtn} onClick={() => setOpen(!open)}>
        💬Query
      </button>

      {open && (
        <div style={styles.container}>
          <div style={styles.header}>AI Assistant 🤖</div>

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

          <div style={styles.inputBox}>
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Ask about hotels..."
              style={styles.input}
            />
            <button onClick={sendMessage} style={styles.sendBtn}>
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
    background: "#216435",
    color: "white",
    border: "none",
    borderRadius: "30%",
    width: "100px",
    height: "100px",
    fontSize: "20px",
    hover: { background: "#223528" },
    cursor: "pointer"
    ,
  },
  container: {
    position: "fixed",
    bottom: "80px",
    right: "20px",
    width: "320px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
    overflow: "hidden",
  },
  header: {
    background: "#0071c2",
    color: "white",
    padding: "10px",
    fontWeight: "bold",
  },
  chatBox: {
    height: "250px",
    overflowY: "auto",
    padding: "10px",
    background: "#f5f5f5",
  },
  msg: {
    padding: "8px 12px",
    borderRadius: "15px",
    margin: "5px",
    maxWidth: "70%",
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
  },
  sendBtn: {
    background: "#0071c2",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
  },
};