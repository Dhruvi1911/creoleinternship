import logo from "./logo.svg";
import React from "react";
import "./App.css";
import {Profile} from "./profile";
import ReactDOM from "react-dom/client";
//class component
class Car extends React.Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    return (
        <>
        <h2>this is the class component</h2>
        <h1>hello,this is {this.props.model}</h1>
        </>);
  }
}
//Function component
function Car3() {
  return <h1>this the car3 component  inside the another component</h1>;
}
function Car2() {
  return (
    <>
      <h1>this is the function component</h1>
      <Car3/>
      
    </>
  );
}
//props 
export function Props(props)
{
  return(<h1>my name is {props.name} and my age is {props.data.age}</h1>); 
}
export { Car, Car2 };
