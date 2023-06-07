import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "firebase/compat/database";
import addToCart from "../HandleAddToCart";
import Swal from "sweetalert2";
import './style.css';

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
    const isLoggedIn = localStorage.getItem("at") ? true : false;
    if (!isLoggedIn) {
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
    } else {
      addToCart(productDetail);
    }
  };

  return (
    <div className="container" style={{padding: '152px 0 43px 0', scrollMarginTop: '0px'}}>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center mx-auto product">
          <img
            src={productDetail.image}
            alt={productDetail.title}
            height="400px"
            width='400px'
            // width={'100%'}
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h5 className="display-5 ">{productDetail.title}</h5>
          <hr />
          <h2 className="my-4">${productDetail.price}</h2>
          <p className="lead">{productDetail.description}</p>
          <button
            className="button my-5"
            onClick={() => handleAddToCart(productDetail)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
