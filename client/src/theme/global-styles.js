import { createGlobalStyle } from "styled-components";

import Regular from "../assets/fonts/Roboto-Regular.ttf";
import Medium from "../assets/fonts/Roboto-Medium.ttf";
import Bold from "../assets/fonts/Roboto-Bold.ttf";
import Black from "../assets/fonts/Roboto-Black.ttf";

export const GlobalStyle = createGlobalStyle`
// Fonts
@font-face {
    font-family: "Roboto";
    font-weight: 400;
    src: url(${Regular});
}

@font-face {
    font-family: "Roboto";
    font-weight: 500;
	src: url(${Medium});
}

@font-face {
    font-family: "Roboto";
    font-weight: 600;
	src: url(${Bold});
}

@font-face {
    font-family: "Roboto";
    font-weight: 700;
	src: url(${Black});
}

// CSS Reset
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

// Body Base
body {
    font-family: "Roboto", sans-serif;
    background-color: #FAFAFA;
    color: "#2F2E3E";
    height: 100%;
 
}

h1, h2, h3, h4, h5, h6 {
    font-family: "Roboto", sans-serif;
}
`;

export default GlobalStyle;
