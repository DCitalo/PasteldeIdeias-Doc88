import React from "react";
import colors from "../../../styles/colors";
import styled from "styled-components";
import PropTypes from "prop-types";
import UploadIcon from "./upload-image.png";

let Input = (props) => {
  let component;

  if (props.type === "textArea") {
    component = (
      <textarea
        className={props.className}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
        type={props.type}
        required={props.required}
        rows={props.row}
      >
        {props.children}
      </textarea>
    );
  } else if (props.type === "file") {
    component = (
      <React.Fragment>
        <ImgSelect htmlFor="selectImg">
          {props.file ? (
            <React.Fragment>
              <div
                className="imgPreview"
                style={{ backgroundImage: `url(${props.file})` }}
              ></div>
              Esse é um preview da sua imagem
            </React.Fragment>
          ) : (
            <React.Fragment>
              <img
                className="icon"
                src={UploadIcon}
                alt="Icone de subir arquivos"
              />
              {props.label}
            </React.Fragment>
          )}
        </ImgSelect>
        <input
          className={props.className}
          type={props.type}
          required={props.required}
          onChange={props.onChange}
          id="selectImg"
          accept={props.accept}
        >
          {props.children}
        </input>
      </React.Fragment>
    );
  } else {
    component = (
      <input
        className={props.className}
        label={props.label}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
        type={props.type}
        required={props.required}
      >
        {props.children}
      </input>
    );
  }
  return component;
};

Input = styled(Input)`
  width: calc(100% - 30px);
  background: ${colors.white};
  border: 1px solid ${colors.red};
  border-radius: 10px;
  padding: 0.5rem;
  font-weight: 500;
  margin: 10px 15px;
  resize: none;
  font-size: 0.9rem;
  color: ${colors.burgundy.default};
  &[type="text"],
  &::placeholder,
  &[type="number"] {
    color: ${colors.burgundy.default};
  }
  &[type="file"] {
    display: none;
  }
`;

const ImgSelect = styled.label`
  width: calc(100% - 30px);
  background: ${colors.white};
  border: 1px solid ${colors.red};
  color: ${colors.burgundy.default};
  border-radius: 10px;
  padding: 1rem 0.5rem;
  font-weight: 500;
  margin: 10px 15px;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  .icon {
    margin-bottom: 1rem;
    width: 30px;
    height: auto;
  }
  .imgPreview {
    width: 90px;
    height: 90px;
    box-shadow: 0px 0px 30px #740b0b45;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
  row: PropTypes.string,
  file: PropTypes.string,
  accept: PropTypes.string,
};

export default Input;
