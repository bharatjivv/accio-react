/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react'

export const CounterKaContext = createContext(null);

export const CounterProvider = (props) => {

    const [ count, setCount ] = useState(5);
    
    
    return (
        <CounterKaContext.Provider value={{count, setCount}}>
            {props.children}
        </CounterKaContext.Provider>
    )
}