import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from 'react-dom/client';
import {Cmp1,Car} from './components/classcmp';
import {Cmp,Job} from './components/functioncmp'



class App extends React.Component {
  render() {
     return (
      <>
      <Cmp1/>
      <Cmp/>
      <Car/>
      <h1>props</h1>
      <Job name="ram" company="google"/>
      <Job name="shyam" company="facebook"/>
      <Job name="shiv" company="Netflix"/>
      
        {/* <div>
            <h1>ReactJS component's Lifecycle</h1>
            <h3>Hello {this.state.hello}</h3>
            <button onClick = {this.changeState}>Click Here!</button>
        </div> */}
        </>
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

