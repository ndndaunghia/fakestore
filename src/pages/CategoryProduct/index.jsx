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
    <div className="container" style={{paddingTop: '60px'}}>
      <div
        className="card-title mt-3"
        style={{
          textTransform: "capitalize",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2>{category}</h2>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-4 my-5">
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
