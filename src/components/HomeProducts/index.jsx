import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "../CardItem";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
export default function HomeProducts() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  // const param

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);
    setCartCount(cartData.length);
  }, []);


  const handleAddToCart = (product) => {
    const cardItem = cart.find((item) => item.id === product.id);
    if (cardItem) cardItem.quantity++;
    else {
      const newCartItem = {
        id: product.id,
        image: product.image,
        title: product.title,
        price: product.price,
        quantity: 1,
      };
      cart.push(newCartItem);
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
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);
    setCartCount(cartCount + 1);
  };

  return (
    <div className="container my-5">
      <div className="row gy-3">
        {Array.from(products).map((product) => {
          return (
            <div className="col-3" key={product.id}>
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
