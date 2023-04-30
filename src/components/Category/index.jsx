import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
      {categories.map((category) => (
        <li key={category}>
          <Link className="dropdown-item" to={`/category/${category}`} style={{textTransform: 'capitalize'}}>
            {category} 
          </Link>
        </li>
      ))}
    </ul>
  );
}
