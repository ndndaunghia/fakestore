// import firebase from "firebase/compat/app";
import Swal from 'sweetalert2';
import "firebase/compat/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        localStorage.setItem("at", user.accessToken);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("uid", getAuth().currentUser?.uid);
        navigate("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign in successfully!",
          showConfirmButton: false,
          timer: 1000,
          customClass: {
            popup: "swal",
          },
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Please check your account!",
          showConfirmButton: false,
          timer: 1000,
          customClass: {
            popup: "swal",
          },
        });
      });
  };

  return (
    <div className="form-wrapper d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleSubmit}
        className="container col-3 px-4 signUp-form"
      >
        <div className="mb-3">
          <p className="text-center mt-3">Have an account?</p>
          <h2 className="text-center">Sign In</h2>
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
        <div className="mb-3 d-flex justify-content-between">
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>
          <div className="">
            <Link href="" className="text-decoration-none" to="/reset-password">
              <span>Forgot password</span>
            </Link>
          </div>
        </div>
        <button type="submit" className="btn btn-primary signIn-btn mb-4">
          Sign In
        </button>
        <div className="text-center">
          <Link href="" className="text-decoration-none" to="/sign-up">
            <span>Or create an account</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
