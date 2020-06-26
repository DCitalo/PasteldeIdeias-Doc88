import React from "react";
import PropTypes from "prop-types";

const Tab = (props) => {
  return <ul className={props.className}>{props.children}</ul>;
};

Tab.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Tab;
