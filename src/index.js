import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/*PROVIDER WILL BE CHILDREN OF PROVIDER
connected to store*/
import {Provider} from 'react-redux'
import {store} from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

