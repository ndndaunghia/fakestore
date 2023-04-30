import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Children } from "react";
import Banner from "./components/Banner";
import HomeProducts from "./components/HomeProducts";
import MenClothing from "./pages/CategoryProduct";
import ProductDetail from "./components/ProductDetail";
import Category from "./components/Category";
import CategoryProduct from "./pages/CategoryProduct";
import Cart from "./components/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <div>
            <Banner />
            <HomeProducts />
          </div>
        ),
      },
      {
        path: "/men-clothing",
        element: <MenClothing />,
      },
      {
        path: "/category/:category",
        element: <CategoryProduct />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
    ],
  },
    {
      path: "/cart",
      element: 
      <div>
        <Header/>
        <Cart />
      </div>
    },
  
]);

export default router;
