
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

let users = [];

export const register = async (req,res)=>{
  const {name,email,password} = req.body;
  const hashed = await bcrypt.hash(password,10);
  users.push({name,email,password:hashed});
  res.json({msg:"Registered"});
};

export const login = async (req,res)=>{
  const {email,password} = req.body;
  const user = users.find(u=>u.email===email);
  if(user && await bcrypt.compare(password,user.password)){
    const token = jwt.sign({email}, "secret");
    res.json({token});
  } else {
    res.status(401).json({msg:"Invalid"});
  }
};
