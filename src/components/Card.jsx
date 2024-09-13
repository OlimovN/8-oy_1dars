import React from "react";
import { useSelector } from "react-redux";
import "./Card.css"; 

const Card = ({ name, age, surname }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Surname: {surname}</p>
    </div>
  );
};

const CartItems = () => {
  const { cart } = useSelector((state) => state.site);

  return (
    <div className="cart-items">
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            age={item.age}
            surname={item.surname}
          />
        ))
      )}
    </div>
  );
};

export default CartItems;
