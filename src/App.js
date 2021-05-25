import React from "react";
import Routes from "./routes";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto"
      />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
