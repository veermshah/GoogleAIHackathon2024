import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="wrapper signUp">
      <div className="form">
        <div className="heading">CREATE AN ACCOUNT</div>
        <form action="/signup" method="post">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="name">E-Mail</label>
            <input type="text" email="name" placeholder="Enter your mail" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              password="password"
              placeholder="Enter you password"
            />
          </div>
          <Link to="/Home">
            <button type="submit">Submit</button>
          </Link>
          <h2 align="center" class="or">
            OR
          </h2> 
        </form>
        <p>
          Have an account ? 
          <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}