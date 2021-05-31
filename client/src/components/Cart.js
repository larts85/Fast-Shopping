import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ShoppingCart, { Actions, Title, Total } from "../styles/cart";
import { Button } from "../styles/globalStyles";
import CartItem from "./CartItem";
import CustomerForm from "./CustomerForm";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { modifyTotal } from "../store/order/order.actions";
import { setFinishedOrder } from "../store/order/order.actions";

const Cart = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { cart } = useSelector((state) => state.orderlines);
  const { total } = useSelector((state) => state.order);
  const { products } = useSelector((state) => state.products);

  const [formRows, setFormRows] = useState({
    name: {
      label: "Full Name",
      type: "text",
      value: "",
      required: true,
      name: "name",
    },
    id: { label: "ID", type: "text", value: "", required: true, name: "id" },
    address: {
      label: "Address",
      type: "textarea",
      value: "",
      required: true,
      name: "address",
    },
    phone: {
      label: "Phone Number",
      type: "tel",
      value: "",
      required: false,
      name: "phone",
    },
    email: {
      label: "Email",
      type: "email",
      value: "",
      required: true,
      name: "email",
    },
  });

  useEffect(() => {
    const total = cart.reduce(
      (acumulator, currentVlue) => acumulator + currentVlue.subTotal,
      0
    );
    dispatch(modifyTotal(Number.parseFloat(total).toFixed(2)));
    // eslint-disable-next-line
  }, [cart]);

  const getStock = (orderlineId) => {
    return products.find(({ id }) => id === orderlineId).stock;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      fullName: formRows.name.value,
      id: formRows.id.value,
      address: formRows.address.value,
      phone: formRows.phone.value,
      email: formRows.email.value,
    };
    dispatch(setFinishedOrder(userData));
    history.push("/thanks");
  };

  const handleChange = (event) => {
    const input = event.target.name || "address";
    setFormRows({
      ...formRows,
      [input]: {
        ...formRows[input],
        value: event.target.value,
      },
    });
  };

  return (
    <ShoppingCart>
      <Helmet>
        <title> Shopping Cart</title>
      </Helmet>
      <Title>Shopping Cart</Title>
      {cart.map((orderline, index) => {
        return (
          <div key={index}>
            <CartItem orderline={orderline} stock={getStock(orderline.id)} />
          </div>
        );
      })}
      <Total>
        <h2>
          Total: <span>${total}</span>
        </h2>
      </Total>
      <Title>Ready to order?</Title>
      <form onSubmit={handleSubmit}>
        <CustomerForm formRows={formRows} handleChange={handleChange} />
        <Actions>
          <Button type="submit">Place Order</Button>
          <Link to="/">Back to List</Link>
        </Actions>
      </form>
    </ShoppingCart>
  );
};

export default Cart;
