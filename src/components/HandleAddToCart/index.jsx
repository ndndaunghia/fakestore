import Swal from "sweetalert2";
import { get, ref, set } from "firebase/database";
import { database } from "../../Firebase";
import { useNavigate } from "react-router-dom";

const addToCart = (product) => {
  const userId = localStorage.getItem("uid");
  if (userId) {
    const cartRef = ref(database, `${userId}/cart`);
    get(cartRef).then((snapshot) => {
      const existingCart = snapshot.val();
      let updatedCart = [];

      if (existingCart) {
        updatedCart = Object.values(existingCart);
        const cartItemIndex = updatedCart.findIndex((item) => item.id === product.id);
        if (cartItemIndex !== -1) {
          updatedCart[cartItemIndex].quantity++;
        } else {
          updatedCart.push({
            id: product.id,
            image: product.image,
            title: product.title,
            price: product.price,
            quantity: 1,
          });
        }
      } else {
        updatedCart.push({
          id: product.id,
          image: product.image,
          title: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      set(cartRef, updatedCart);
    });

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Add product to cart successfully!",
      showConfirmButton: false,
      timer: 1000,
      customClass: {
        popup: "swal",
      },
    });
  } 
};

export default addToCart;
