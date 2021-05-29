import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import { fetchAllProducts } from "../api/products";
import { useDispatch, useSelector } from "react-redux";
import { setAllProducts } from "../store/products/products.actions";

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

  return <Box></Box>;
};

Dashboard.propTypes = {
  isMobile: PropTypes.bool,
};

export default Dashboard;
