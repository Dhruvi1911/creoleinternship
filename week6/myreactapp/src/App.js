import React from "react";
import logo from "./logo.svg";
import "./App.css";

// function App() {
//   let name = "Dhruvi";
//   return (
//     <>
//       <h1>Hello {name}</h1>
//       <div className="blank">
//         <h1>this is my first react project</h1>
//       </div>
//     </>
//   );
// }
class App extends React.Component {
  constructor(props) {
     super(props);
     this.state = {hello: "Dhruvi"};
     this.changeState = this.changeState.bind(this)
  }
  render() {
     return (
        <div>
            <h1>ReactJS component's Lifecycle</h1>
            <h3>Hello {this.state.hello}</h3>
            <button onClick = {this.changeState}>Click Here!</button>
        </div>
     );
  }
  componentWillMount() {
     console.log('Component Will MOUNT!')
  }
  componentDidMount() {
     console.log('Component Did MOUNT!')
  }
  changeState(){
     this.setState({hello:"how are you"});
  }
  componentWillReceiveProps(newProps) {
     console.log('Component Will Recieve Props!')
  }
  shouldComponentUpdate(newProps, newState) {
     return true;
  }
  componentWillUpdate(nextProps, nextState) {
     console.log('Component Will UPDATE!');
  }
  componentDidUpdate(prevProps, prevState) {
     console.log('Component Did UPDATE!')
  }
  componentWillUnmount() {
     console.log('Component Will UNMOUNT!')
  }
}

export default App;

