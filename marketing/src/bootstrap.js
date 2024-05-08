import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory } from "history";

import App from "./App";

const mount = (el, props) => {
  const { onNavigate } = props;
  const history = createMemoryHistory();
 if (onNavigate) {
   history.listen(onNavigate);
 }

  ReactDOM.render(<App history={history} />, el);
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketing-dev-root");
  if (el) {
    mount(el, {});
  }
}

export { mount };
