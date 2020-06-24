import React from "react";
import styled from "styled-components";
import Container from "../../atoms/container";
import Logo from "./Logo.svg";
import colors from "../../../styles/colors";

let Header = () => {
  return (
    <ContainerHeader tag="header">
      <Container percent="80">
        <img src={Logo} alt="logo Pastel de ideias" className="logo" />
      </Container>
    </ContainerHeader>
  );
};

let ContainerHeader = styled(Container)`
  position: relative;
  background: ${colors.red};
  z-index: -2;
  &:after {
    content: "";
    width: 100%;
    background-image: url(/images/wave.svg);
    position: absolute;
    min-height: 250px;
    background-repeat: no-repeat;
    bottom: -249px;
    z-index: -1;
  }
  .logo {
    position: relative;
    max-width: 500px;
    margin: 0 auto;
    display: block;
  }
`;

export default Header;
