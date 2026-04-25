import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ChatBot from "./pages/ChatBot";

export default function App() {
  return (
    <BrowserRouter>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Chatbot (global) */}
      <ChatBot />

    </BrowserRouter>
  );
}