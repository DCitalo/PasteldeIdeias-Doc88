import React from "react";
import breakpoints from "../../../styles/breakpoints";
import styled from "styled-components";

const percent = (props) => (props.percent ? (props) => props.percent : 100);
const tbPercent = (props) =>
  props.tbPercent ? (props) => props.tbPercent : 100;
const mbPercent = (props) =>
  props.mbPercent ? (props) => props.mbPercent : 100;
const display = (props) => (props.flex ? "flex" : "block");
const FW = (props) => (props.fw ? "wrap" : "unset");
const tbDisplay = (props) => (props.tbHide ? "none" : "block");
const margin = (props) => (props.marginZero ? "0" : "0 auto");

let Container = (props) => {
  let component;

  if (props.tag && props.tag !== "a") {
    const Tag = props.tag;
    component = <Tag className={props.className}>{props.children}</Tag>;
  } else if (props.tag === "a") {
    const Tag = props.tag;
    const link = props.link;
    const rel = props.rel;
    const target = props.target;
    component = (
      <Tag className={props.className} rel={rel} href={link} target={target}>
        {props.children}
      </Tag>
    );
  } else {
    component = <div className={props.className}>{props.children}</div>;
  }
  return component;
};

Container = styled(Container)`
  margin: ${margin};
  width: ${percent}%;
  display: ${display};
  flex-wrap: ${FW};
  max-width: 1920px;
  @media (max-width: ${breakpoints.sm}) {
    max-width: ${breakpoints.sm};
    width: ${mbPercent}%;
  }
  @media (max-width: ${breakpoints.md}) {
    max-width: ${breakpoints.md};
  }
  @media (max-width: ${breakpoints.lg}) {
    max-width: ${breakpoints.lg};
    width: ${tbPercent}%;
    display: ${tbDisplay};
  }
`;

export default Container;
