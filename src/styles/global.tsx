import { createGlobalStyle } from "styled-components";
import Pattern from "./pattern.png";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
    }

    input {
        :focus {
            outline: none;
        }
    }

    img {
        max-width: 100%;
    }
    body{
        background: url(${Pattern});
    }
    html, body, #root {
        height: 100%
    }
    .backgroundGradient{
        width: 100%;
    height: 100%;
    position: fixed;
    left: 50%;
    top: 0;
    z-index: -2;
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 15%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 85%, rgba(255,255,255,0) 100%);
    transform: translate(-50%);
    }
    ul,li,ol{
        list-style:none;
        padding-left: 0;
    }
`;

export const AccessibilityStyle = createGlobalStyle<{
  theme: { fontSize: number };
}>`
    html {
        font-size: ${(props) => props.theme.fontSize}px;
    }

    img {
        max-width: 100%;
    }
    svg {
        display: inline-block;
        font-size: inherit;
        height: 1em;
        overflow: visible;
        vertical-align: -0.125em;
    }
`;

export default GlobalStyle;
