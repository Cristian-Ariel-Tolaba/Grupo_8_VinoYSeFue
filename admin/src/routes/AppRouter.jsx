import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Root from "../components/Root";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import Users from "../pages/Users";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>}/>
      <Route path="/categories" element={<Categories/>}/>
      <Route path="/users" element={<Users/>}/>
    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
