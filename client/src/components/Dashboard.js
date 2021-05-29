import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Dashboard = (props) => {
  const classes = useStyles();
  const { isMobile } = props;

  return <Box className={classes.root}></Box>;
};

Dashboard.propTypes = {
  isMobile: PropTypes.bool,
};

export default Dashboard;
