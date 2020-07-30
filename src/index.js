import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom"
import * as serviceWorker from './serviceWorker';
import {ProductProvider} from "./context"
import {createStore} from "redux"

ReactDOM.render(
  <ProductProvider>
    <HashRouter>
          <App></App>
      </HashRouter>
  </ProductProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
