import React, { createContext, useState } from "react";

export let CounterContext = createContext()

export function CounterContextProvider(props) {
    const [count, setcount] = useState(0)
    function changeCount(){
        setcount(Math.random())
    }

    return <CounterContext.Provider value={{count, changeCount}}>
        {props.children}
    </CounterContext.Provider>
}
export default CounterContextProvider;
