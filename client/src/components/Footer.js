import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Footer = (props) => {
  const { isMobile } = props;

  const classes = useStyles();

  return <Box className={classes.root}></Box>;
};

Footer.propTypes = {
  isMobile: PropTypes.bool,
};

export default Footer;
