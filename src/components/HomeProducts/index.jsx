import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "../CardItem";
import { Link, useNavigate } from "react-router-dom";
import addToCart from "../HandleAddToCart";

export default function HomeProducts() {
  // const accessToken = localStorage.getItem("uid");
  // const [isLoggedIn, setIsLoggedIn] = useState(accessToken ? true : false);
  const isLoggedIn = localStorage.getItem('uid') ? true : false;
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddToCart = (product) => {
    // console.log(typeof(isLoggedIn));
   addToCart(product)
  };

  return (
    <div className="container my-5">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-4">
      {Array.from(products).map((product) => {
        return (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <CardItem
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                id={product.id}
                handleAddToCart={() => handleAddToCart(product)}
              />
            </Link>
          </div>
        );
      })}
    </div>
  </div>
  

  );
}
