import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link} from "react-router-dom";
import CardItem from "../../components/CardItem";
import addToCart from "../../components/HandleAddToCart";

export default function CategoryProduct() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  const handleAddToCart = (product) => {
  addToCart(product);
  };
  return (
    <div className="container">
      <div
        className="card-title"
        style={{
          textTransform: "capitalize",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2>{category}</h2>
      </div>
      <div className="row my-5 gy-4">
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
