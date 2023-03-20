import React from "react";
export class Cmp1 extends React.Component {
  render() {
    return (
      <>
        <p>this is inside the class component</p>
        <First />
      </>
    );
  }
}
class First extends React.Component {
  render() {
    return <p>hello</p>;
  }
}
//state
export class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: "audi",
      year: "2022"
    }
    const changemodel=()=>{
     console.log("function called");
      this.setState({model: "bmw"});
    }
  }
  render() {
    return (
      <div>
        <h2>
          my car is {this.state.model} and year is {this.state.year}
        </h2>
        <button onClick={this.changemodel}>Click me!</button>
      </div>
    );
  }
}
