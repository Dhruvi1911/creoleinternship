import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  {Car,Car2} from './App';
import { Props } from './App';
import {Profile} from './profile';

import reportWebVitals from './reportWebVitals';
import Profile from './profile';
const root=ReactDOM.createRoot(document.getElementById('1'));
const root1=ReactDOM.createRoot(document.getElementById('2'));
const root2=ReactDOM.createRoot(document.getElementById('3'));
const root3=ReactDOM.createRoot(document.getElementById('4'));
//to render  multiple element by creating array
const elements=[<h1>hello dhruvi</h1>,
<h2>hii</h2>,
<h3>hello</h3>];

root.render(<><Car model="toyato"/>,<Car2/></>);
root1.render(elements);
root2.render(<Props data={{age:21}} name="dhruvi" />);
root3.render(<Profile/>)

// root.render(elements);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
