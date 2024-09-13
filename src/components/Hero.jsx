import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice";
import "./Hero.css";

const Hero = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.site);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [surname, setSurname] = useState("");

  const handleAddToCart = () => {
    if (name && age && surname) {
      const product = { id: 1, name, age, surname };
      dispatch(addToCart(product));
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <section className={`hero ${mode}`}>
      <h1>Welcome to Our Store</h1>
      <div className="input-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </div>
      <div className="input-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter age"
        />
      </div>
      <div className="input-group">
        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          id="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Enter surname"
        />
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </section>
  );
};

export default Hero;
