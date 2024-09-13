import { createContext } from 'react'
import B from './B'

let GreetContext=createContext();

export default function ContextAPI(){
    const greet1="Hello"
    const greet2="Namaste"
    return(
        <div>
          <GreetContext.Provider value={{greet1,greet2}}>
          
            <B ></B>
          </GreetContext.Provider>
        </div>
    )
}
export {GreetContext};