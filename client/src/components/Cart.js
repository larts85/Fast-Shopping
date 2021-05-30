import React, { useEffect } from "react";
import ShoppingCart, { Title, Total } from "../styles/cart";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { modifyTotal } from "../store/orderline/orderline.actions";

const Cart = () => {
  const dispatch = useDispatch();

  const { cart, total } = useSelector((state) => state.orderlines);
  const { products } = useSelector((state) => state.products);

  const getStock = (orderlineId) => {
    return products.find(({ id }) => id === orderlineId).stock;
  };

  useEffect(() => {
    const total = cart.reduce(
      (acumulator, currentVlue) => acumulator + currentVlue.subTotal,
      0
    );
    dispatch(modifyTotal(Number.parseFloat(total).toFixed(2)));
  }, [cart]);

  return (
    <ShoppingCart>
      <Title>Shopping Cart</Title>
      {cart.map((orderline, index) => {
        return (
          <CartItem
            key={index}
            orderline={orderline}
            stock={getStock(orderline.id)}
          />
        );
      })}
      <Total>
        <h2>
          Total: <span>${total}</span>
        </h2>
      </Total>
    </ShoppingCart>
  );
};

export default Cart;
