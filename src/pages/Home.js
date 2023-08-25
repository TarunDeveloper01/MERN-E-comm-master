import React from 'react'
import Navbar from '../features/navbar/Navbar';
// import ProductList from "./features/Product-list/ProductList";
import ProductList from '../features/Product-list/ProductList'

const Home = () => {
  return (
    <>
        <Navbar/>
        <ProductList />
    </>
  )
}

export default Home;