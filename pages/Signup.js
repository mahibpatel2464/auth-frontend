import { useState } from "react";
import { signup } from "../services/authService";

function Signup() {
  const [data, setData] = useState({ name:"", email:"", password:"" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(data);
    alert("Signup successful");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" onChange={handleChange} />
      <button>Signup</button>
    </form>
  );
}

export default Signup;
