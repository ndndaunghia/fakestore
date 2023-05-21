import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Swal from "sweetalert2";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Please check your email to reset password!",
          showConfirmButton: false,
          timer: 1000,
          customClass: {
            popup: "swal",
          },
        });
        navigate("/sign-in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: errorMessage,
          showConfirmButton: false,
          timer: 1000,
          customClass: {
            popup: "swal",
          },
        });
      });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center form-wrapper"
      style={{ height: "100vh" }}
    >
      <form action="" className="resetPassword-form" onSubmit={onSubmit}>
        <h2 className="text-center mb-3">Reset password</h2>
        <div className="mb-3">
          <label htmlFor="yourEmail" className="form-label">
            Your email
          </label>
          <input
            type="email"
            className="form-control"
            id="yourEmail"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-primary reset-btn" style={{ width: "100%" }}>
          Accept
        </button>
      </form>
    </div>
  );
}
