import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Board from "../styles/dashboard";
import { fetchAllProducts } from "../api/products";
import { useDispatch, useSelector } from "react-redux";
import { setAllProducts } from "../store/products/products.actions";
import ProductCard from "./ProductCard";

const Dashboard = (props) => {
  const { isMobile } = props;
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);

  useEffect(() => {
    if (!products.length) {
      fetchAllProducts()
        .then(({ data }) => {
          dispatch(setAllProducts(data));
        })
        .catch((err) => {
          throw err;
        });
    }
  }, []);

  return (
    <Board>
      {products?.map((product, index) => {
        return <ProductCard productData={product} key={index} />;
      })}
    </Board>
  );
};

Dashboard.propTypes = {
  isMobile: PropTypes.bool,
};

export default Dashboard;
