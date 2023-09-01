import React from 'react'
import Navbar from '../features/navbar/Navbar';
import ProductDetails from '../features/Product-list/Components/ProductDetails'

const ProductDetailPage = () => {
  return (
    <>
        <Navbar>
        <ProductDetails />
        </Navbar>
    </>
  )
}

export default ProductDetailPage;