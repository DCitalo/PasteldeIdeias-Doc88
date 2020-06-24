import { createGlobalStyle } from "styled-components";

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
