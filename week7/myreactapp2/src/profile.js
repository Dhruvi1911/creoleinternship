import React from 'react';
 export default class Profile extends React.Component{
    constructor()
    {
        super();
        this.state={
            name:'dev'
        }
    }
    render(){
        return(
            <div>
                <h1>hello {this.state.name}</h1>
            </div>
        )
    }
}