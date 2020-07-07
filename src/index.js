import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import * as serviceWorker from './serviceWorker';
import {ProductProvider} from "./context"
import {createStore} from "redux"

ReactDOM.render(
  <ProductProvider>
    <BrowserRouter>
          <App></App>
      </BrowserRouter>
  </ProductProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
