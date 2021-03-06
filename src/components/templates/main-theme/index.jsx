import React from "react";
import GlobalStyles from "../../../styles/global";
import { Normalize } from "styled-normalize";

function MainTheme({ children }) {
  return (
    <React.Fragment>
      <Normalize />
      <GlobalStyles />
      <div className="backgroundGradient"></div>
      {children}
    </React.Fragment>
  );
}

export default MainTheme;
