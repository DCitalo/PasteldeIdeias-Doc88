import React, { useState } from "react";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import Switch from "../../atoms/switch";
import styled from "styled-components";
import Container from "../../atoms/container";
import colors from "../../../styles/colors";
import ItemCardapio from "../../../models/itemCardapio";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import breakpoints from "../../../styles/breakpoints";
import DefaultImgComida from "./default_comida.png";
import DefaultImgBebida from "./default_comida.png";
import Pasteis from "./pasteis-img.png";

let Form = (props) => {
  const opt1 = "Comida",
    opt2 = "Bebida",
    [state, setState] = useState({
      checked: false,
    }),
    [opt, setOpt] = useState(opt1),
    [file, setFile] = useState({
      url: null,
      name: null,
    }),
    [titulo, setTitulo] = useState(""),
    [sabor, setSabor] = useState(""),
    [valor, setValor] = useState(""),
    [desc, setDesc] = useState(""),
    handleChangeCheck = (name) => (event) => {
      setState({ [name]: event.target.checked });
      if (!state.checked) {
        setOpt(opt2);
      } else {
        setOpt(opt1);
      }
      console.log(opt);
    },
    handleChangeImg = () => (event) => {
      event.target.files[0]
        ? setFile({
            name: event.target.files[0].name,
            url: URL.createObjectURL(event.target.files[0]),
          })
        : setFile({
            name: null,
            url: null,
          });
    },
    limpaFormulario = () => {
      setFile({
        name: null,
        url: null,
      });
      setTitulo("");
      setSabor("");
      setValor("");
      setDesc("");
    },
    adicionaItem = (opt, titulo, sabor, valor, desc, file) => {
      const item = new ItemCardapio(titulo, sabor, valor, desc, file);
      opt === opt1
        ? props.setComidaData(props.comidaData.concat(item))
        : props.setBebidaData(props.bebidaData.concat(item));
    },
    ValidaEadicionaItem = (e) => {
      e.preventDefault();

      if (titulo.length < 3 || titulo.length > 60) {
        Swal.fire({
          title: "Algo de errado não está certo!",
          text: "Seu título tem menos que 3 ou mais que 60 caracteres",
          icon: "error",
          confirmButtonText: "Vou Corrigir!",
        });
        return false;
      }
      if (sabor.length < 3 || sabor.length > 60) {
        Swal.fire({
          title: "Algo de errado não está certo!",
          text: "Seu sabor tem menos que 3 ou mais que 60 caracteres",
          icon: "error",
          confirmButtonText: "Vou Corrigir!",
        });
        return false;
      }
      if (file.url !== null && !/\.(jpe?g|png)$/i.test(file.name)) {
        Swal.fire({
          title: "Algo de errado não está certo!",
          text:
            "Parece que você tentou subir com uma extensão diferente de '.jpg' ou '.png'",
          icon: "error",
          confirmButtonText: "Vou Corrigir!",
        });
        return false;
      }
      if (file.url === null) {
        const defaultFile =
          opt === opt1
            ? {
                url: DefaultImgComida,
                name: "defaultImg-Comida",
              }
            : {
                url: DefaultImgBebida,
                name: "defaultImg-Bebida",
              };
        adicionaItem(opt, titulo, sabor, valor, desc, defaultFile);
      } else {
        adicionaItem(opt, titulo, sabor, valor, desc, file);
      }
      limpaFormulario();
    };
  return (
    <ContainerForm tag="form" percent="75" onSubmit={ValidaEadicionaItem}>
      <div className="headerForm">
        <h4 className="title">
          Monte aqui o seu cardápio. O que está esperando?
        </h4>
        <Switch
          opt1={opt1}
          opt2={opt2}
          onChange={handleChangeCheck("checked")}
          value={state.checked}
        />
      </div>
      <Container flex fw percent="100" className="bodyForm">
        <Container percent="40">
          <Input
            type="text"
            placeholder="Título do pedido"
            defaultValue={""}
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </Container>
        <Container percent="40">
          <Input
            type="text"
            placeholder="Sabor"
            defaultValue={""}
            value={sabor}
            onChange={(e) => setSabor(e.target.value)}
            required
          />
        </Container>
        <Container percent="20">
          <Input
            type="number"
            placeholder="R$"
            defaultValue={""}
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />
        </Container>
        <Container percent="100">
          <Input
            type="textArea"
            placeholder="Descrição"
            row="4"
            defaultValue={""}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Container>
        <Container percent="100">
          <Input
            type="file"
            label="Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar a pasta."
            accept=".jpeg,.jpg,.png"
            onChange={handleChangeImg()}
            file={file.url}
          />
        </Container>
      </Container>
      <Container flex fw className="containerButtons">
        <Button onClick={limpaFormulario} colorSecundary className="button">
          Limpar
        </Button>
        <Button className="button" type="submit">
          Cadastrar
        </Button>
      </Container>
    </ContainerForm>
  );
};

let ContainerForm = styled(Container)`
  border-radius: 20px;
  background: ${colors.white};
  position: relative;
  box-shadow: 0px 0px 30px #740b0b45;
  &::before {
    content: "";
    width: 291px;
    background-image: url(${Pasteis});
    position: absolute;
    height: 274px;
    background-repeat: no-repeat;
    top: 10%;
    transform: translateY(-50%);
    z-index: -1;
    right: 0px;
  }
  .headerForm {
    background: ${colors.yellow};
    border-radius: 20px 20px 0px 0px;
    color: ${colors.burgundy.default};
    padding: 1.7rem 30px 1.7rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    .title {
      margin: 0;
      text-transform: uppercase;
      font-weight: 700;
      font-style: italic;
      font-size: 1.2em;
    }
  }
  .bodyForm {
    position: relative;
    z-index: 1;
    margin-top: -25px;
  }
  .containerButtons {
    transform: translateY(50%);
    justify-content: center;
    .button {
      margin: 0 15px;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    .containerButtons {
      transform: translateY(50%);
      justify-content: center;
      .button {
        margin: 0 5px;
      }
    }
  }

  @media (max-width: ${breakpoints.lg}) {
    .containerButtons {
      display: flex;
    }
    .headerForm {
      flex-direction: column;
      align-items: center;
      text-align: center;
      .title {
        margin: 0 0 15px;
      }
    }
    &::before {
      display: none;
    }
  }
`;

Form.propTypes = {
  setBebidaData: PropTypes.func,
  bebidaData: PropTypes.array,
  setComidaData: PropTypes.func,
  comidaData: PropTypes.array,
};

export default Form;
