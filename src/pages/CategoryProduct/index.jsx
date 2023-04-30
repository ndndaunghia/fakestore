import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CardItem from '../../components/CardItem';
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
  return (
    <div className='container'>
    <div className="card-title" style={{textTransform: 'capitalize', display: 'flex', justifyContent:'center'}}><h2>{category}</h2></div>
       <div className="row my-5 gy-4">
       {
            Array.from(products).map((product) => {
                return(
                    <div className="col-3">
                    <CardItem
                        image = {product.image}
                        title = {product.title}
                        price = {product.price}
                    />
                </div>
                )
            })
        }
       </div>
    </div>
  )
}
