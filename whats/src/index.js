import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './store/AuthContext';
import reducer, {initialState} from './Reducer'
ReactDOM.render(
  <AuthContextProvider initialState ={initialState} reducer={reducer}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </AuthContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
