import React from "react";
import PropTypes from "prop-types";
import HeaderComponent, { Title } from "../styles/header";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const location = useLocation();
  const { cart } = useSelector((state) => state.orderlines);

  return (
    <HeaderComponent>
      <Title>
        <Link to="/">
          <img src="/logo512.png" alt="Ups" />
        </Link>
        <h1>Fast Shopping</h1>
      </Title>
      {location.pathname === "/" && (
        <Link to={cart.length ? "/cart" : "/"}>
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCartIcon style={{ color: "grey", fontSize: 40 }} />
          </Badge>
        </Link>
      )}
    </HeaderComponent>
  );
};

Header.propTypes = {
  isMobile: PropTypes.bool,
};

export default Header;
