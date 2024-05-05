import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "con",
});

const App = () => {
  return (
    <StyleProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <MarketingApp />
      </BrowserRouter>
    </StyleProvider>
  );
};

export default App;
