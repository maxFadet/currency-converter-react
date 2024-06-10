import Container from "./Container";
import Form from "./Form";
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Form />
      </Container>
    </ThemeProvider>
  );
};

export default App;
