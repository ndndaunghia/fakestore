import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase";
import "./style.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    if (password === confirmPw) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          alert("Successfully sign up an account");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          //   const errorMessage = error.message;
          alert(errorCode);
        });
    } else {
      alert("Check your password");
    }
  };
  return (
    <div className="form-wrapper d-flex justify-content-center align-items-center">
      <form onSubmit={onSubmit} className="container col-3 px-4 signUp-form">
        <div className="mb-3">
          <h2 className="text-center mt-3">Sign Up</h2>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            required
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            onChange={(e) => setConfirmPw(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary signIn-btn mb-4">
          Sign Up
        </button>
        <div className="text-center">
          <Link href="" className="text-decoration-none" to="/sign-in">
            <span>Back to sign in</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
