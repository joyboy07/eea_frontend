import React from 'react'
import { Provider } from 'react-redux';
import Routers from './core/navegation/router';
import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from './general/store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store} >
      <Routers />
    </Provider>
  </React.StrictMode>,
)
