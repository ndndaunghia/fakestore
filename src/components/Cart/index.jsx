import { logDOM } from "@testing-library/react";
import React, { useEffect } from "react";
import { useMemo } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
const ButtonC = styled.button`
  width: 40px;
  height: 30px;
  border: none;
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListProduct = styled.h2`
  margin: 30px 0;
`;

export default function Cart() {
  const [cart, setCart] = React.useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  const totalPrice = useMemo(
    () => cart.reduce((acc, obj) => acc + obj.price * obj.quantity, 0).toFixed(2),
    [cart]
  );

  const handleIncrease = (index) => {
    const newCart = cart.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleDecrease = (index) => {
    const newCart = cart.map((item, i) => {
      if (i == index) {
        return { ...item, quantity: Math.max(item.quantity - 1, 1) };
      }
      return item;
    });
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleDelete = (index) => {
    cart.splice(index, 1);
    setCart([...cart]);
    localStorage.setItem("cart", JSON.stringify(cart));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Delete product successfully!",
      showConfirmButton: false,
      timer: 1000,
      customClass: {
        popup: "swal",
      },
    });
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  if (cart.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h2>
          There isn't nothing in your cart !
        </h2>
        <span class="material-symbols-outlined">sentiment_dissatisfied</span>
      </div>
    );
  } else {
    return (
      <div className="container">
        <ListProduct className="text-center">
          List Product ({cart.length})
        </ListProduct>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cartItem, cartIndex) => {
              return (
                <tr key={cartIndex}>
                  <td>{cartIndex + 1}</td>
                  <td>
                    <img
                      src={cartItem.image}
                      alt=""
                      style={{ width: "8rem" }}
                    />
                  </td>
                  <td>{cartItem.title}</td>
                  <td>{cartItem.price}</td>
                  <td>
                    <div className="btn-group">
                      <ButtonC
                        style={{ marginRight: "10px" }}
                        className="btn-group"
                        onClick={() => handleIncrease(cartIndex)}
                      >
                        +
                      </ButtonC>
                      {cartItem.quantity}
                      <ButtonC
                        style={{ marginLeft: "10px" }}
                        className="btn-group"
                        onClick={() => handleDecrease(cartIndex)}
                      >
                        -
                      </ButtonC>
                      <ButtonC
                        style={{
                          marginLeft: "10px",
                          backgroundColor: "transparent",
                        }}
                        onClick={() => handleDelete(cartIndex)}
                      >
                        <span class="material-symbols-outlined">delete</span>
                      </ButtonC>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="totalPrice text-end">
          <span>
            <h3>Total </h3>{" "}
          </span>
          <p>$ {totalPrice}</p>
          <button className="btn btn-primary" style={{margin: '20px 0', borderRadius: '5px'}}>Buy Now</button>
        </div>
      </div>
    );
  }
}
