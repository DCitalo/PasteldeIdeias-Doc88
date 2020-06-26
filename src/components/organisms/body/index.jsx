import React, { useState } from "react";
import Container from "../../atoms/container";
import Form from "../../molecule/form";
import colors from "../../../styles/colors";
import styled from "styled-components";
import Tabs from "../../molecule/tabs";
import Tab from "../../atoms/tab";
import ItemLista from "../../molecule/Item-lista";

let Body = () => {
  const [comidaData, setComidaData] = useState([]);
  const [bebidaData, setBebidaData] = useState([]);
  return (
    <React.Fragment>
      <Form
        comidaData={comidaData}
        bebidaData={bebidaData}
        setBebidaData={setBebidaData}
        setComidaData={setComidaData}
      />
      <ContainerTitle percent="100">
        <h5 className="title">Veja como será apresentado ao cliente</h5>
      </ContainerTitle>
      <Tabs>
        <Tab title={"Comidas"} className={"tab-custom-class"} index="0">
          {comidaData.length ? (
            comidaData
              .slice(0)
              .reverse()
              .map(function (item, i) {
                return <ItemLista key={i} item={item} />;
              })
          ) : (
            <li>
              <p className="noItens">Nenhuma comida cadastrada.</p>
            </li>
          )}
        </Tab>
        <Tab title={"Bebidas"} className={"tab-custom-class"} index="1">
          {bebidaData.length ? (
            bebidaData
              .slice(0)
              .reverse()
              .map(function (item, i) {
                return <ItemLista key={i} item={item} />;
              })
          ) : (
            <li>
              <p className="noItens">Nenhuma bebida cadastrada.</p>
            </li>
          )}
        </Tab>
      </Tabs>
    </React.Fragment>
  );
};

let ContainerTitle = styled(Container)`
  text-align: center;
  margin: 40px auto;
  position: relative;
  :after {
    content: "";
    border-top: 1px solid ${colors.burgundy.default};
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 0;
  }
  .title {
    color: ${colors.burgundy.default};
    padding: 15px 10px;
    background: ${colors.white};
    font-size: 19px;
    display: block;
    margin: 0 auto;
    width: 30%;
    min-width: 270px;
    position: relative;
    z-index: 1;
  }
`;

export default Body;
