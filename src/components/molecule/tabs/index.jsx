import React, { useState } from "react";
import styled from "styled-components";
import Container from "../../atoms/container";
import colors from "../../../styles/colors";
import PropTypes from "prop-types";

let Tabs = (props) => {
  const [state, setState] = useState({
    activeIndex: props.defaultActiveIndex || 0,
  });

  const handleTabClick = (tabIndex) => {
    setState({ activeIndex: tabIndex });
  };

  return (
    <ContainerTabs percent="75" tag="section" className="tabs">
      <ul className="tabs-header">
        {props.children.map(function (item, i) {
          const title = item.props.title;
          let classActive = i === state.activeIndex ? "active" : "off";
          return (
            <li
              key={i}
              onClick={() => handleTabClick(i)}
              className={`tabs-header-item ${classActive}`}
            >
              {title}
            </li>
          );
        })}
      </ul>
      <div className="tabs-content">
        {props.children.map(function (item, i) {
          if (i === state.activeIndex) {
            return item;
          } else {
            return false;
          }
        })}
      </div>
    </ContainerTabs>
  );
};

const ContainerTabs = styled(Container)`
  .tabs-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .tabs-header-item {
    width: 100px;
    text-align: center;
    cursor: pointer;
    margin: 0 10px;
    padding: 10px 15px;
    font-size: 1.1em;
    color: ${colors.burgundy.default};
  }
  .tabs-header-item.active {
    font-weight: 600;
    color: ${colors.red};
    border-bottom: 2px solid ${colors.red};
  }
  .noItens {
    font-weight: 600;
    font-style: italic;
    text-align: center;
    font-size: 1em;
    color: ${colors.burgundy.default};
  }
`;

Tabs.propTypes = {
  children: PropTypes.node,
};

export default Tabs;
