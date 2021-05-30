import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  CardItem,
  Price,
  Title,
  Quantity,
  Picker,
  SecondHalf,
  PriceWrapper,
} from "../styles/cartItem";
import { IconButton } from "@material-ui/core";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartProduct,
  updateCartProduct,
} from "../store/orderline/orderline.actions";
import { Button } from "../styles/globalStyles";

const CartItem = (props = {}) => {
  const dispatch = useDispatch();
  const { orderline, stock } = props;
  const { id, name, category, price, quantity } = orderline || {};
  const { cart } = useSelector((state) => state.orderlines);

  const subTotal = Number(price) * quantity;

  const handleOnDelete = () => {
    if (cart.length === 1) {
      window.location = "/";
    }
    dispatch(deleteCartProduct(id));
  };

  const handleOnChange = (event) => {
    const quantitySelected = event.target.value;
    const subTotal = Number(price) * quantitySelected;
    const newCart = cart.filter(({ id }) => id !== orderline.id);
    const updatedCart = [
      ...newCart,
      { ...orderline, quantity: quantitySelected, subTotal },
    ];
    dispatch(updateCartProduct(updatedCart));
  };

  return (
    <CardItem>
      <Title>
        <h4>{name}</h4>
        <h6>Category: {category}</h6>
      </Title>
      <SecondHalf>
        <PriceWrapper>
          <span>Unit Price</span>
          <Price margin={0}>{price}</Price>
        </PriceWrapper>
        <Quantity>
          <span>Quantity</span>
          <Picker onChange={handleOnChange} value={quantity}>
            {Array.apply(null, { length: stock }).map((n, i) => (
              <option key={n} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </Picker>
        </Quantity>
        <IconButton onClick={handleOnDelete}>
          <DeleteForeverSharpIcon />
        </IconButton>
        <Price margin="auto" fontSize="21px" width="80px">
          {subTotal}
        </Price>
      </SecondHalf>
    </CardItem>
  );
};

CartItem.propTypes = {
  props: PropTypes.shape({
    sum: PropTypes.number,
    setSum: PropTypes.func,
    product: PropTypes.object,
  }),
};

export default CartItem;
