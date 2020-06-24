import React from "react";
import colors from "../../../styles/colors";
import styled from "styled-components";

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
  padding: 0.5rem 0.35rem;
  font-size: 0.9rem;
  max-height: 60px;
  font-weight: 900;
`;

export default Button;
