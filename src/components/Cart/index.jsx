import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import styled from "styled-components";
import 'firebase/compat/database';
import { getDatabase, ref, onValue, off, set } from "firebase/database";
import { firebaseAppPromise } from "../../Firebase";

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
  const [cart, setCart] = useState([]);
  const userId = localStorage.getItem("uid");
  const totalPrice = useMemo(() => {
    if (cart) {
      return cart.reduce((acc, obj) => acc + obj.price * obj.quantity, 0).toFixed(2);
    }
    return 0;
  }, [cart]);

  const handleIncrease = (index) => {
    const newCart = cart.map((item, i) => {
      if (i === index) {
        
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(newCart);
    updateCartInDatabase(newCart);
  };
  

  const handleDecrease = (index) => {
    const newCart = cart.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: Math.max(item.quantity - 1, 1) };
      }
      return item;
    });
    setCart(newCart);
    updateCartInDatabase(newCart);
  };

  const handleDelete = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    updateCartInDatabase(newCart);
  };

  const updateCartInDatabase = (cartItems) => {
    const cartRef = ref(getDatabase(), `${userId}/cart`);
    set(cartRef, cartItems);
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        await firebaseAppPromise; 
        const cartRef = ref(getDatabase(), `${userId}/cart`);
        onValue(cartRef, (snapshot) => {
          const newCart = snapshot.val();
          setCart(newCart ? Object.values(newCart) : []);
        });
        return () => {
          off(cartRef);
        };
      } catch (error) {
        console.error("Error initializing Firebase App:", error);
      }
    };

    fetchCart();
  }, []);


  const handleBuy = () => {
   

  }

  if (!cart || cart.length === 0) {
    return (
      <div className="container text-center" style={{paddingTop: '100px'}}>
        <h2>There is nothing in your cart!</h2>
        <span className="material-symbols-outlined">sentiment_dissatisfied</span>
      </div>
    );
  } else {
    return (
      <div className="container" style={{paddingTop: '100px'}}>
        <ListProduct className="text-center">List Product ({cart.length})</ListProduct>
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
                    <img src={cartItem.image} alt="" style={{ width: "8rem", height: '10rem' }} />
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
                        style={{ marginLeft: "10px", backgroundColor: "transparent" }}
                        onClick={() => handleDelete(cartIndex)}
                      >
                        <span className="material-symbols-outlined">delete</span>
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
          <button className="btn btn-primary" style={{ margin: "20px 0", borderRadius: "5px" }}>
            Buy Now
          </button>
        </div>
      </div>
    );
  }
}
