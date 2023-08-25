import React from "react";
import "./App.css";
import Counter from "./features/counter/Counter";
import Home from "./pages/Home";
// import ProductList from "./features/Product-list/ProductList";
// import Navbar from "./features/navbar/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <ProductList /> */}
      <Home />
    </div>
  );
}

export default App;
