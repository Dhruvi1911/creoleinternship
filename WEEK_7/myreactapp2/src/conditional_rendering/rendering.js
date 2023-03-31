 export function Rendering(){
    const age=12;
    const isgreen=true;
    return (
        <div>
            <h2>Conditional Rendering</h2>
           {age >=18?<p>below age</p>:<p>over age</p>}
           {/* if else using ternary operator */}
           <h3 style={{color:isgreen?"green":"red"}}>this has color</h3>
           {/* if statement */}
           {isgreen && <button>this is button</button>}
          </div>
        )
        
}