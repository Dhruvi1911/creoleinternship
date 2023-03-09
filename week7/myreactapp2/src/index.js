import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  {Car,Car2} from './App';

import reportWebVitals from './reportWebVitals';
const root=ReactDOM.createRoot(document.getElementById('1'));
const root1=ReactDOM.createRoot(document.getElementById('2'));

//to render  multiple element by creating array
const elements=[<h1>hello dhruvi</h1>,
<h2>hii</h2>,
<h3>hello</h3>];

root.render(<><Car/>,<Car2/></>);
root1.render(elements);
// root.render(elements);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
