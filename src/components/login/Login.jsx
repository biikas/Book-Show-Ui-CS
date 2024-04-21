import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("signed in");
  };
  return (
    <div className="container">
      {/* image */}
      <div className="image-container">
        <img className="img" src="./assets/LeftArt.png" />
      </div>
      {/* form */}
      <div className="form-container">
        <form className="form-container" onSubmit={handleSubmit}>
          <h1 className="heading">Sign In</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Type username here"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Type password here"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input id="signed-in" type="radio" />
          <label htmlFor="signed-in">Keep me signed in</label>

          <span>Forgot password?</span>
          <br />
          <button>Submit</button>
          <br />
          <span>Register Now</span>
        </form>
      </div>
    </div>
  );
}

export default Login;
