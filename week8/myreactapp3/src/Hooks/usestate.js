import React,{useState} from 'react'
export function Example(){
    const[count,setCount]=useState(0);
    return(
        <>
            <h3 style={{padding:"50px",backgroundColor:'pink' ,height:"100px",width:"100px",margin:"1.5px 700px"}}>
                you clicked {count} times
            </h3>
            <button  style={{position:'absolute',left:'47.5%',marginTop:'4px',padding:"15px 32px",cursor:'pointer',borderRadius:"10px",backgroundColor:'green',color:'white',fontSize:'20px'}}onClick={()=>{setCount(count+1)}}>click me</button>
        </>
    );
}