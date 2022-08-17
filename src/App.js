import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalStyles from "./components/styles/Global";
import { FlexContainer } from "./components/styles/FlexContainer.styled";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <FlexContainer direction='column'>
          <Header />
          <Main />
          <Footer />
        </FlexContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
