import React from "react";
import ReactDOM from "react-dom";


import { createStore } from "redux";
import { Provider } from "react-redux";


const store = createStore(contactReducer, composeWithDevTools());


if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    
      <App />
    
  </Provider>,
  rootElement
);
