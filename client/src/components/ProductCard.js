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
import {
  setCreatedOrderline,
  updateCartProduct,
} from "../store/orderline/orderline.actions";

const ProductCard = (props) => {
  const { productData } = props;
  const dispatch = useDispatch();
  const [productOnCart, setProductOnCart] = useState(false);
  const { cart } = useSelector((state) => state.orderlines);
  const [categories, setCategories] = useState("");

  useEffect(() => {
    const prepareCategoriesToDisplay = () => {
      let stringOfCategories = "";
      productData.categories.forEach(({ name }) => {
        stringOfCategories
          ? (stringOfCategories += ", " + name)
          : (stringOfCategories += name);
      });
      setCategories(stringOfCategories);
    };

    prepareCategoriesToDisplay();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!productData.stock) {
      setProductOnCart(true);
    }
    // eslint-disable-next-line
  }, [cart]);

  const addToCart = () => {
    const productToUpdate = cart.find(
      ({ productsId }) => productsId === productData.id
    );
    if (!productToUpdate) {
      dispatch(
        setCreatedOrderline({
          ...productData,
          id: null,
          productsId: productData.id,
          quantity: 1,
          categories,
          subTotal: Number(productData.price),
        })
      );
    } else {
      const newCart = cart.filter(
        ({ productsId }) => productsId !== productData.id
      );
      const subTotal = productToUpdate.price * (productToUpdate.quantity + 1);
      const updatedCart = [
        ...newCart,
        {
          ...productToUpdate,
          quantity: productToUpdate.quantity + 1,
          subTotal,
        },
      ];
      dispatch(updateCartProduct(updatedCart));
    }
  };

  return (
    <CardComponent>
      <Title>{productData?.name}</Title>
      <SubTitle>{categories}</SubTitle>
      <Description className="p">
        <p>{productData?.description}</p>
      </Description>
      <CardFooter>
        <span>
          <Button disabled={productOnCart} onClick={addToCart}>
            Add to cart
          </Button>
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
