import { createContext, useState } from "react";

export const GetGlobalContext = createContext();
export const GlobalContext = ({ children }) => {
    return (
        <GetGlobalContext.Provider value={{}}>{children}</GetGlobalContext.Provider>

    )
}
