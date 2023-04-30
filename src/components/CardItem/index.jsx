import React from "react";
import {Link} from 'react-router-dom';

export default function CardItem(props) {
  const handleClick = (e) => {
    e.stopPropagation();
    props.handleAddToCart();
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
        <Link className="btn btn-primary" onClick={handleClick}>
          Add to cart
        </Link>
      </div>
    </div>
  );
}
