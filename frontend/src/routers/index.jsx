import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/404";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/RegisterPage";
import DetailProductPage from "../pages/DetailProductPage";
import Products from "../pages/Products";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Ini Halaman Home</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);
