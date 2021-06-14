import React from "react";
import HeaderComponent, { Title, Actions, Divider } from "../styles/header";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { DarkModeSwitch } from "../styles/darkMode-switch.js";
import { RoundedSwitch } from "../styles/rounded-switch";

const Header = (props) => {
  const { darkMode, mode, setDarkMode, rounded, setRounded } = props || {};
  const location = useLocation();
  const { cart } = useSelector((state) => state.orderlines);

  const changeMode = (event, type) => {
    if (type === "colors") {
      setDarkMode(event.target.checked);
    } else {
      setRounded(event.target.checked);
    }
  };

  return (
    <>
      <HeaderComponent mode={mode}>
        <Title>
          <Link to="/">
            <img src="/logo512.png" alt="Ups" />
          </Link>
          <h1>Fast Shopping</h1>
        </Title>
        <Actions>
          <form>
            <DarkModeSwitch
              darkMode={darkMode}
              checked={darkMode}
              onChange={(e) => changeMode(e, "colors")}
            />
            <RoundedSwitch
              darkMode={darkMode}
              rounded={rounded}
              checked={rounded}
              onChange={(e) => changeMode(e, "corners")}
            />
          </form>
          {location.pathname === "/" && (
            <Link to={cart.length ? "/cart" : "/"}>
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCartIcon style={{ color: "grey", fontSize: 40 }} />
              </Badge>
            </Link>
          )}
        </Actions>
      </HeaderComponent>
      <Divider mode={mode} />
    </>
  );
};

export default Header;
