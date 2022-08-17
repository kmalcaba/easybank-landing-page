import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  :root {
    font-family: 'Public Sans', sans-serif;
    font-size: 18px;
    overflow-x: hidden;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.bg_primary};
    color: ${({ theme }) => theme.colors.text_primary}
  }

  p {
    color: ${({ theme }) => theme.colors.text_secondary}
  }
`;

export default GlobalStyles;
