import React from "react";
import Navbar from "../features/navbar/Navbar";
// import ProductList from "./features/Product-list/ProductList";
import ProductList from "../features/product/Components/ProductList";

const Home = () => {
  return (
    <>
      <Navbar>
        <ProductList />
      </Navbar>
    </>
  );
};

export default Home;
