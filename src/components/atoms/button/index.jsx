import React from "react";
import colors from "../../../styles/colors";
import styled from "styled-components";
import PropTypes from "prop-types";

const background = (props) =>
  props.colorSecundary ? (props) => colors.red : colors.yellow;
const color = (props) =>
  props.colorSecundary ? (props) => colors.white : colors.burgundy.default;

let Button = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      <span>{props.children}</span>
    </button>
  );
};

Button = styled(Button)`
  border-radius: 30px;
  background: ${background};
  color: ${color};
  cursor: pointer;
  width: 150px;
  padding: 1rem;
  font-size: 1rem;
  max-height: 60px;
  font-weight: 900;
  border: none;
  text-transform: uppercase;
`;

Button.propTypes = {
  className: PropTypes.string,
  colorSecundary: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
