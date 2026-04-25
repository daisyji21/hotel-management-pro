// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

// import ChatBot from "./pages/ChatBot";

// export default function App() {
//   return (
//     <BrowserRouter>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Login />} />
        
//       </Routes>

//       {/* Chatbot (global) */}
//       <ChatBot />

//     </BrowserRouter>
//   );
// }
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChatBot from "./pages/ChatBot";

export default function App() {
  return (
    <BrowserRouter>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* Chatbot (global) */}
      <ChatBot />

    </BrowserRouter>
  );
}