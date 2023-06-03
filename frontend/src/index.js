import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Store/store';


ReactDOM.render(
  <StyledEngineProvider>
    <Provider store={store}>
      <Router injectFirst>
        <App />
      </Router>
    </Provider>
  </StyledEngineProvider>
  
  ,
  document.getElementById('root')
);

