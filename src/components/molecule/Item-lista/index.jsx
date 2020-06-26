import React from "react";
import styled from "styled-components";
import Container from "../../atoms/container";
import colors from "../../../styles/colors";
import PropTypes from "prop-types";
import breakpoints from "../../../styles/breakpoints";

let ItemLista = (props) => {
  const item = props.item,
    titulo = item.titulo,
    imgUrl = item.img.url,
    sabor = item.sabor,
    valor = item._valor,
    desc = item.desc;
  return (
    <ContainerForm tag="li">
      <div
        className="imgContainer"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="contentContainer">
        <div className="header">
          <h6 className="title">"{titulo}"</h6>
          <p className="value">R$ {valor}</p>
        </div>
        <div className="body">
          <p className="text-body">
            <b>Sabor:</b>
            {sabor}
          </p>
          <p className="text-body">
            {desc ? (
              <React.Fragment>
                <b>Descrição:</b> {desc}
              </React.Fragment>
            ) : (
              <React.Fragment>
                <b>Descrição:</b> Dá um jeito, mas o cliente quer um {titulo}!
              </React.Fragment>
            )}
          </p>
        </div>
      </div>
    </ContainerForm>
  );
};

let ContainerForm = styled(Container)`
  position: relative;
  margin: 40px auto;
  .imgContainer {
    width: 140px;
    height: 140px;
    box-shadow: 0px 0px 30px #740b0b45;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 20px;
  }
  .contentContainer {
    width: calc(100% - 100px);
    border-radius: 20px;
    background: ${colors.white};
    box-shadow: 0px 0px 30px #740b0b45;
    margin-left: 100px;
    .header {
      background: ${colors.red};
      border-radius: 20px 20px 0px 0px;
      padding: 1.7rem 60px 1.7rem;
      position: relative;
      display: flex;
      justify-content: space-between;
      .title {
        color: ${colors.yellow};
        margin: 0;
        font-weight: 600;
        font-style: italic;
        font-size: 1.1em;
      }
      .value {
        color: ${colors.white};
        margin: 0;
        font-weight: 600;
        font-style: italic;
        font-size: 1.1em;
      }
    }
    .body {
      border-radius: 0px 0px 20px 20px;
      padding: 0.3rem 60px 1.7rem;
      .text-body {
        color: ${colors.burgundy.default};
        font-size: 0.95em;
        margin-bottom: 10px;
      }
    }
  }
  @media (max-width: ${breakpoints.md}) {
    .contentContainer {
      width: 100%;
      margin-left: 0;
      .header {
        flex-direction: column;
        text-align: center;
        padding: 1.7rem 30px 1.7rem;
        .title {
          margin: 15px 0;
        }
      }
      .body {
        padding: 0.3rem 30px 1.7rem;
      }
    }
    .imgContainer {
      position: relative;
      margin: 0 auto;
    }
  }
`;

ItemLista.propTypes = {
  item: PropTypes.object,
};

export default ItemLista;
