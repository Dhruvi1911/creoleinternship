import logo from "./logo.svg";
import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
//class component
class Car extends React.Component {
  render() {
    return (
      <>
        <h1>hello,this is class component</h1>
        <h2>h2 tag</h2>
      </>
    );
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
export { Car, Car2 };
