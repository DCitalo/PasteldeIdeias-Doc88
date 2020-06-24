import React from "react";
import Button from "../../atoms/button";
import styled from "styled-components";
import Container from "../../atoms/container";
import colors from "../../../styles/colors";

let Clean = (e) => {
  e.preventDefault();
  console.log("teste2");
};

let Add = (e) => {
  e.preventDefault();
  console.log("teste1");
};

let Form = (props) => {
  return (
    <ContainerForm tag="form" percent="80">
      <div className="headerForm">
        <h4>Monte aqui o seu cardápio. O que está esperando?</h4>
      </div>
      <Container flex fw>
        <Button onClick={Clean} colorSecundary>
          Limpar
        </Button>
        <Button onClick={Add}>Cadastrar</Button>
      </Container>
    </ContainerForm>
  );
};

let ContainerForm = styled(Container)`
  border-radius: 20px;
  background: ${colors.white};
  position: relative;
  &::before {
    content: "";
    width: 291px;
    background-image: url(/images/pasteis-img.png);
    position: absolute;
    height: 274px;
    background-repeat: no-repeat;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
    right: 0px;
  }
  .headerForm {
    background: ${colors.yellow};
    border-radius: 20px 20px 0px 0px;
    color: ${colors.burgundy.default};
  }
`;

export default Form;
