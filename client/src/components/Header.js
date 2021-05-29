import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HeaderComponent, { Title } from "../styles/header";
import { Badge } from "@material-ui/core";

const Header = (props) => {
  const { isMobile } = props;

  return (
    <HeaderComponent>
      <Title>
        <img src="/logo512.png" alt="Ups" />
        <h1>Fast Shopping</h1>
      </Title>
      <Badge badgeContent={4} color="error">
        <ShoppingCartIcon style={{ color: "grey", fontSize: 40 }} />
      </Badge>
    </HeaderComponent>
  );
};

Header.propTypes = {
  isMobile: PropTypes.bool,
};

export default Header;
