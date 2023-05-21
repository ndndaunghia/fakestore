import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "firebase/compat/database";
import addToCart from "../HandleAddToCart";
export default function ProductDetail() {
  const [productDetail, setProductDetail] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProductDetail(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleAddToCart = (productDetail) => {
    addToCart(productDetail);
  };

  return (
    <div className="container my-5 py-3">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center mx-auto product">
          <img
            src={productDetail.image}
            alt={productDetail.title}
            height="400px"
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h5 className="display-5 ">{productDetail.title}</h5>
          <hr />
          <h2 className="my-4">${productDetail.price}</h2>
          <p className="lead">{productDetail.description}</p>
          <button
            className="btn btn-outline-primary my-5"
            onClick={() => handleAddToCart(productDetail)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
