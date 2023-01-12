import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const obj = {
  email: "",
  password: "",

};
function Login() {

  const [form, setForm] = useState(obj);
  const [users, setUsers] = useState([]);

  function handleInput(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleBtn(e) {
    e.preventDefault();
    const { email, password } = form;
    let check = users.find((e) => e.email === email && e.password === password);
    if (check) {
      alert(" users login  Successfull");
    } else {
      alert("wrong credientials");
    }
  }

  function verify() {
    fetch("https://json-deploy-fr7l.onrender.com/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }
  useEffect(() => {
    verify();
  }, []);
  return (
    <div className="signup">
   
      <form  id="form" onSubmit={(e) => handleBtn(e)}>
      <h2>Login </h2>
      <p>Login is here lorem jpsm</p>
        <label>Email</label>
        <br />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={(e) => handleInput(e)}
        />
        <br />
        <br />

        <label>Password</label>
        <br />
        <input
          type="text"
          placeholder="password"
          name="password"
          onChange={(e) => handleInput(e)}
        />
        <br />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;