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
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import ResetPassword from "./Auth/Reset_Password";
import ChangePassword from "./Auth/Change_Password";
import About from "./pages/About";

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
    {
      path: "/sign-in",
      element:
        <SignIn/>
    },
    {
      path: '/sign-up',
      element: <SignUp/>
    },
    {
      path: '/reset-password',
      element: (
        <>
          <ResetPassword/>
        </>
      ),
    },
    {
      path: '/change-password',
      element: (
        <>
          <ChangePassword/>
        </>
      ),
    }
  
]);

export default router;
