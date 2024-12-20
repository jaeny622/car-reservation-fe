import { createGlobalStyle } from "styled-components";

import { colorCSSVariables } from "./colorVariable";

export const GlobalStyle = createGlobalStyle`
html{
    ${colorCSSVariables}

}
`;
