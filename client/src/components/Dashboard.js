import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Board, { PaginationWrapper } from "../styles/dashboard";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { fetchAllProducts } from "../api/products";
import { useDispatch, useSelector } from "react-redux";
import { setAllProducts } from "../store/products/products.actions";

const Dashboard = (props) => {
  const { pagination } = props;
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } =
    pagination;

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(
      products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    );
  }, [products, page, rowsPerPage]);

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
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Helmet>
        <title>Products List</title>
      </Helmet>
      <PaginationWrapper>
        <Pagination
          pagination={{
            productsQuantity: products?.length,
            handleChangePage,
            handleChangeRowsPerPage,
            page,
            rowsPerPage,
          }}
        />
      </PaginationWrapper>
      <Board>
        {filteredProducts.map((product, index) => {
          return <ProductCard productData={product} key={index} />;
        })}
      </Board>
    </>
  );
};

Dashboard.propTypes = {
  props: PropTypes.shape({
    pagination: PropTypes.shape({
      page: PropTypes.number,
      rowsPerPage: PropTypes.number,
      handleChangePage: PropTypes.func,
      handleChangeRowsPerPage: PropTypes.func,
    }),
  }),
};

export default Dashboard;
