import React from 'react';
import { Navbar } from './component/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './component/Home';
import Login from './component/Login';
import About from './component/About';
import Contact from './component/Contact';
import { ProductList } from './component/ProductList';
import { ProductDetail } from './component/ProductDetail';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar></Navbar> <Home></Home></>
    },
    {
      path: "/login",
      element: <><Navbar></Navbar> <Login></Login></>
    },
    {
      path: "/about",
      element: <><Navbar></Navbar> <About></About></>
    },
    {
      path: "/contact",
      element: <><Navbar></Navbar> <Contact></Contact></>
    },
    {
      path: "/products",
      element: <><Navbar /> <ProductList /></>
    },
    {
      path: "/products/:productId",
      element: <><Navbar /> <ProductDetail /></>
    }
]);

  return (
    <>
    <div></div>
    <RouterProvider router={router} />
    </>
  )
}