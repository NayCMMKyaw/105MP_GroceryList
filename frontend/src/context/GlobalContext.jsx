import React, { useState } from "react";
import { createContext } from "react";

//create the global context
export const GlobalContext = createContext();

//define the global context provider component
export const GlobalContextProvider = ({ children }) => {
    //define global state variables usign useState
    const [status, setStatus] = useState('');
    const [user, setUser] = useState();

    //Create an object with global state variables to be used
    const globalState = {
        status,
        setStatus,
        user,
        setUser,
    };

    return (
        //provide the global state to the components
        <GlobalContext.Provider value={globalState}>
            {children}
        </GlobalContext.Provider>
    );
};
