import axios from "axios";

const API_URL = "https://fakestoreapi.com";

const productApi = {
    getAll: params => {
      const allProductUrl = '/products';
      return axios.get(API_URL + allProductUrl);
    },
    getId: id => {
      const idProductUrl = `/products/${id}`;
      return axios.get(API_URL + idProductUrl);
    },
  };

export default productApi;