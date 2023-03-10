import React from "react";
export class Bike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: "dhruvi",
      year: "21",
    };
  }
  render() {
    return (
      <>

        <h1>
          my name is {this.state.name} and my age is {this.state.age}
        </h1>

      </>
    );
  }
}
