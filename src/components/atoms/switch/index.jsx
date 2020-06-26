import React from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import PropTypes from "prop-types";

let Switch = (props) => {
  return (
    <SwitchContainer>
      <span className="opt opt1">{props.opt1}</span>
      <CheckBoxWrapper>
        <CheckBox
          onChange={props.onChange}
          id="checkbox"
          type="checkbox"
          value={props.value}
        />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
      <span className="opt opt2">{props.opt2}</span>
    </SwitchContainer>
  );
};

const SwitchContainer = styled.div`
  display: flex;
  align-content: center;
  .opt {
    font-weight: 500;
    color: ${colors.burgundy.default};
  }
  .opt1 {
    margin-right: 5px;
  }
  .opt2 {
    margin-left: 5px;
  }
`;

const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 0;
  width: 42px;
  height: 10px;
  border-radius: 15px;
  background: ${colors.white};
  transform: translateY(-50%);
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: -4px 0;
    background: ${colors.red};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 10px;
  &:checked + ${CheckBoxLabel} {
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 24px;
      transition: 0.2s;
    }
  }
`;

Switch.propTypes = {
  opt1: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.bool,
  opt2: PropTypes.string,
};

export default Switch;
