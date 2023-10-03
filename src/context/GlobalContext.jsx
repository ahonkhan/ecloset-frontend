import { createContext, useState } from "react";

export const GetGlobalContext = createContext();
export const GlobalContext = ({ children }) => {
    const [cartSideStatus, setCartSideStatus] = useState(true);
    return (
        <GetGlobalContext.Provider value={{ cartSideStatus, setCartSideStatus }}>{children}</GetGlobalContext.Provider>

    )
}
