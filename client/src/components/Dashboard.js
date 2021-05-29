import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Board, { PaginationWrapper } from "../styles/dashboard";
import { fetchAllProducts } from "../api/products";
import { useDispatch, useSelector } from "react-redux";
import { setAllProducts } from "../store/products/products.actions";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

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
  }, []);

  return (
    <>
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
  isMobile: PropTypes.bool,
};

export default Dashboard;
