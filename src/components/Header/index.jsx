import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Category from "../Category";
// import Cart from "../Cart/index";
import { useNavigate } from "react-router-dom";
import "./style.css";
// import HomeProducts from "../HomeProducts";
export default function Header() {
  const accessToken = localStorage.getItem("at");
  // const [showCart, setShowCart] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(accessToken ? true : false);
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("at");
    localStorage.removeItem("uid");
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
    setIsLoggedIn(false);
  };
  const handleCartClick = (e) => {
    if(!isLoggedIn)
      navigate('/sign-in');
    else
      navigate('/cart');
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    setIsLoggedIn(isLoggedIn === 'true');
  }, [])

  return (
    <div className="position-fixed" style={{width: '100vw', zIndex : '2', boxShadow: '0 3px 5px rgba(57, 63, 72, 0.3)'}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid px-4">
          <Link className="navbar-brand" href="#" to="/">
            Aihgn
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/about'>
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <Category />
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <div className="dropdown d-flex justify-content-center">
              <button className="btn header-button" data-bs-toggle="dropdown">
                <span className="material-symbols-outlined">
                  account_circle
                </span>
              </button>

              {isLoggedIn ? (
                <ul className="dropdown-menu" style={{ minWidth: "100px" }}>
                  <li>
                    <Link className="dropdown-item" to="/change-password">
                      Newpassword
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="dropdown-item" to="/change-password">
                      Change password
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/"
                      onClick={logOut}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="dropdown-menu" style={{ minWidth: "100px" }}>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/sign-in"
                    >
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sign-up">
                      Sign up
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <button className="btn header-button" onClick={handleCartClick}>
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
