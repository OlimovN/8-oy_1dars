import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cart from "./components/Card";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Cart/>
    </div>
  );
};

export default App;
