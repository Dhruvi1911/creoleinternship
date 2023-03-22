import React from "react";
 export class Counter extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            count:0
        };
        this.handleclick=this.handleclick.bind(this);
        
    }
   handleclick()
   {
    this.setState((state)=>{
        return{
        count:state.count+1
        }
    });
    
    console.log("counter", this.state.count);
   }
    render()
    {
        const num=this.state.count;
        return(
            <div>
               
                <button onClick={this.handleclick}>increment value</button>
                <h3 style={{backgroundColor:num>5?'green':'red'}}>counter value is {num}</h3>
                 
            </div>
        );
    }
}