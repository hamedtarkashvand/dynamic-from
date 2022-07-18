import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesApp from './routes';
import reportWebVitals from './reportWebVitals';
import store from './Redux/store';
import {Provider} from 'react-redux';
import { ToastContainer } from 'react-toastify';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.rtl.css';
import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

 const root = ReactDOM.createRoot(document.getElementById('root'))
 root.render(
    <div className="bg-light ">
      <Provider store={store}>
        <RoutesApp/>
        <ToastContainer
            position="top-right"
            autoClose={5000}
        />
      </Provider>
    </div>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
