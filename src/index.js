import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {store} from './store'
import { ConnectedRouter } from 'connected-react-router'
import {history} from './history'
import './index.css';
import 'typeface-roboto'
import {StylesProvider} from '@material-ui/core'

const app = (
  <StylesProvider injectFirst>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>
  </StylesProvider>
)

ReactDOM.render(app,document.getElementById('root'));

serviceWorker.unregister();
