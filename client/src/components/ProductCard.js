import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  CardComponent,
  CardFooter,
  Description,
  Price,
  SubTitle,
  Title,
} from "../styles/card";
import { Button } from "../styles/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { setCreatedOrderline } from "../store/orderline/orderline.actions";
import { createOrderline } from "../api/orderlines";

const ProductCard = (props) => {
  const { productData } = props;
  const dispatch = useDispatch();
  const [productOnCart, setProductOnCart] = useState(false);
  const { cart } = useSelector((state) => state.orderlines);

  useEffect(() => {
    const alreadyOnCart = cart.find(({ id }) => id === productData.id);
    alreadyOnCart && setProductOnCart(true);
  }, [cart.length]);

  const addToCart = () => {
    // createOrderline().then(({status, data}) => {
    //   if (status === 'OK') {
    //     dispatch(setCreatedOrderline(data));
    //   }
    // }).catch((error) => {throw error})
    dispatch(
      setCreatedOrderline({
        ...productData,
        quantity: 1,
        subTotal: Number(productData.price),
      })
    );
  };

  return (
    <CardComponent>
      <Title>{productData?.name}</Title>
      <SubTitle>Category: {productData?.category}</SubTitle>
      <Description className="p">
        <p>{productData?.description}</p>
      </Description>
      <CardFooter>
        <span>
          <Button disabled={productOnCart} onClick={addToCart}>
            Add to cart
          </Button>
          &nbsp;&nbsp;{productData?.stock} stock
        </span>
        <Price>{productData?.price}</Price>
      </CardFooter>
    </CardComponent>
  );
};

ProductCard.propTypes = {
  productData: PropTypes.object,
};

export default ProductCard;
