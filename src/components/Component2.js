import { type } from "@testing-library/user-event/dist/type";
import React,{useReducer} from "react";

const initialState = {
    firstState: 0
}

const reducer =(state, action)=>{
    switch(action.type){
        case 'increment':
            return {firstState: state.firstState + 1}
        case 'decrement':
            return {firstState: state.firstState - 1}
        case 'reset':
            return initialState
        default:
            return state
    }
}

export default function Component2(){

    const [count, dispatch] = useReducer(reducer, initialState)

    return(
        <div>
            <div>Count ={count.firstState}</div>
            <button onClick={()=> dispatch ({type: 'increment'})}>Increment</button>
            <button onClick={()=> dispatch ({type: 'decrement'})}>Decrement</button>
            <button onClick={()=> dispatch ({type: 'reset'})}>Reset</button>
        </div>
    )
}