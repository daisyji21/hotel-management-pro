
import { useState } from "react";
import axios from "axios";

export default function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const submit=async()=>{
    const res = await axios.post("http://localhost:5000/api/auth/login",{email,password});
    alert(res.data.token);
  };

  return (
    <div>
      <input placeholder="email" onChange={e=>setEmail(e.target.value)}/>
      <input placeholder="password" onChange={e=>setPassword(e.target.value)}/>
      <button onClick={submit}>Login</button>
    </div>
  );
}
