import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import { fetchAllProducts } from "../api/products";

const Dashboard = (props) => {
  const { isMobile } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts()
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return <Box></Box>;
};

Dashboard.propTypes = {
  isMobile: PropTypes.bool,
};

export default Dashboard;
