import React from "react"
export class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
             name:"dhruvi"
        };
        this.handlechange=this.handlechange.bind(this);
    }
    handlechange=(event)=>{
        const value=event.target.value;
        this.setState({name:value});
    }
 
    render(){
        const name =this.state.name;
        return(
            <div>
                <input type="text" value={name} placeholder="enter your name here" onChange={this.handlechange} ></input>
                <h4>hello,{name}</h4>

            </div>
        );
    }
}