import React from "react";
import { useState } from "react";

const obj = {
  email: "",
  username: "",
  password: "",
  confirmpassword: "",
};

function Signup() {
  const [form, setForm] = useState(obj);

  function handleInput(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleBtn(e) {
    e.preventDefault();
    console.log(form);
    const { password, confirmpassword } = form;
    if (password != confirmpassword) {
      alert("password should match");
    } else {
      AddDataUser(form);
    }
  }

  function AddDataUser(data) {
    fetch("https://json-deploy-fr7l.onrender.com/users", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => alert(" user signup sucessfully "));
  }

  return (
    <div className="signup">
   
      <form id="form" onSubmit={(e) => handleBtn(e)}>
      <h2 >Signup </h2>
      <p  >signup is here signup first</p>
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
        <label>Username</label>
        <br />
        <input
          type="text"
          placeholder="Username"
          name="username"
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
        <label>Confirm Password</label>
        <br />
        <input
          type="text"
          placeholder="confirm password"
          name="confirmpassword"
          onChange={(e) => handleInput(e)}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Signup;