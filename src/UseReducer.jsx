import { useReducer } from "react"

export default function UseReducer(){

    const reducer=(state,action)=>{
        console.log(state,action);
        if(action.type==="incr"){
            return {count:state.count+1};
        }
       else if(action.type==="decr"){
        return {count:state.count-1};
       }
       else{
          throw new Error("Unsupported action type");
       }
    }

    let increment=()=>{
        dispatch({type:"incr"});
    }
    let decrement=()=>{
        dispatch({type:"decr"});
    }

    let [state,dispatch]=useReducer(reducer,{count:0});
    return(
        <div>
            <h1>{state.count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            
        </div>
    )
}