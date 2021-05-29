import React from "react";
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

const ProductCard = (props) => {
  const { productData } = props;

  return (
    <CardComponent>
      <Title>{productData?.name}</Title>
      <SubTitle>Category: {productData?.category}</SubTitle>
      <Description className="p">
        <p>{productData?.description}</p>
      </Description>
      <CardFooter>
        <span>
          <Button>Add to cart</Button>
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
