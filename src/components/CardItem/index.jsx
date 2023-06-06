import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import './style.css'
import Swal from "sweetalert2";

export default function CardItem(props) {
  const isLoggedIn = localStorage.getItem('at') ? true : false;
  const handleClick = (e) => {
    e.stopPropagation();
    if(!isLoggedIn){
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "Please login before adding products to cart!",
        showConfirmButton: false,
        timer: 1000,
        customClass: {
          popup: "swal",
        },
      });
    }
    else{
      props.handleAddToCart();
    }
  }
  return (
    <div className="card h-100 text-center p-4">
      <img
        src={props.image}
        className="card-img-top"
        alt="..."
        style={{ height: "250px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title.substring(0, 12)}</h5>
        <p className="card-text">{props.price} $</p>
        <button className="button" >
          <Link onClick={handleClick} style={{textDecoration: 'none'}}>
            Add to cart
          </Link>
        </button>
      </div>
    </div>
  );
}
