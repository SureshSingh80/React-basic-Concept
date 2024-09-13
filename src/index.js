import React from 'react';
import ReactDOM from 'react-dom/client';
import Mobil from './Mobil'
import MobileList from './MobileList';
import MobData from './data.json';
import Counter from './Counter';
import Fetch from './Fetch';
import MultipleReturn from './MultipleReturn';
import ContextAPI from './ContextAPI';
import UseReducer from './UseReducer';
import UseReducerComplex from './UseReducerComplex'
import RouterExample from './RouterExample';
import { Router } from 'react-router-dom';
import UseRef from './UseRef';
import UseRef2 from './UseRef2';
import CustomHook from './UseCustomHook';
import CustomHookUse from './CustomHookUse';
import UseMemo from './UseMemo';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>  
    
        <RouterExample></RouterExample>
     
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

