import React, { useState } from "react";
import { Link } from "react-router-dom";
import Category from "../Category";
import Cart from "../Cart/index";
import { useNavigate } from "react-router-dom";
import HomeProducts from "../HomeProducts";
export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(!showCart);
    navigate('/cart');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
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
                <a className="nav-link" href="#">
                  About
                </a>
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
                  Clothes
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
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <button className="btn">
                <span className="material-symbols-outlined">account_circle</span>
              </button>
              <button className="btn" onClick={handleCartClick}>
                <span className="material-symbols-outlined">shopping_cart</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
