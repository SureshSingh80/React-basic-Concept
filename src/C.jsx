import React, { useContext } from "react"
import { GreetContext } from './ContextAPI';


export default function C(){

    const useCon=useContext(GreetContext);
    console.log(useCon);
    return(
        <div>
          <h2>Greet:{useCon.greet1} {useCon.greet2} </h2>
        </div>
       
        
    )
}

{/* <GreetContext.Consumer>
{
   (value)=>{
     return <h2>Greet:{value}</h2>
   }
}
</GreetContext.Consumer> */}