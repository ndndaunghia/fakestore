import React, { useState } from "react";
import "./style.css";
import {
  getAuth,
  updatePassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../Firebase";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Please check your password!",
        showConfirmButton: false,
        timer: 1000,
        customClass: {
          popup: "swal",
        },
      });
    }
    const auth = getAuth(app);
    const user = auth.currentUser;
    if (!user) {
        setError("User is not authenticated");
        return;
      }    
    const credentials = signInWithEmailAndPassword(
      auth,
      user.email,
      currentPassword
    );
    credentials
      .then(() => {
        updatePassword(user, newPassword)
          .then(() => {
            // Đổi mật khẩu thành công
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
            setError("");
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Change password successfully and you will back to sign in page in 4 seconds!",
                showConfirmButton: false,
                timer: 4000,
                customClass: {
                  popup: "swal",
                },
              });
            localStorage.removeItem("at");
            localStorage.removeItem("uid");
            localStorage.setItem("isLoggedIn", JSON.stringify(false));
            setTimeout(() => {
                navigate('/sign-in');
            }, 4000)
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Incorrect current password",
            showConfirmButton: false,
            timer: 2000,
            customClass: {
              popup: "swal",
            },
          });
      });
  };
  return (
    <div className="d-flex justify-content-center align-items-center form-wrapper">
      <form action="" className="changePassword-form" onSubmit={handleSubmit}>
        <h2 className="text-center mb-3">Change password</h2>
        <div className="mb-3">
          <label htmlFor="currentPassword" className="form-label">
            Current password
          </label>
          <input
            type="password"
            className="form-control"
            id="currentPassword"
            required
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">
            New password
          </label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            required
            value={newPassword}
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            required
            value={confirmPassword}
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary change-btn"
          style={{ width: "100%" }}
        >
          Accept
        </button>
      </form>
    </div>
  );
}
