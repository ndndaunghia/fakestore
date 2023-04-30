import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
export default function ProductDetail() {
  const [cart, setCart] = useState([]);
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
  
  useEffect(() => {
    const listCart = JSON.parse(localStorage.getItem("cart"));
    if (listCart) {
      setCart(listCart);
    }
  }, []);

  // const listCart = JSON.parse(localStorage.getItem("cart"));
  const handleAddToCart = () => {
    const cartItemIndex = cart.findIndex((item) => item.id === parseInt(id));
    if (cartItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[cartItemIndex].quantity++;
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const newCartItem = {
        id: productDetail.id,
        image: productDetail.image,
        title: productDetail.title,
        price: productDetail.price,
        quantity: 1,
      };
      const updatedCart = [...cart, newCartItem];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Add product successfully!",
      showConfirmButton: false,
      timer: 1000,
      customClass: {
        popup: "swal",
      },
    });
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
          <button className="btn btn-outline-primary my-5" onClick={() => handleAddToCart(productDetail)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
