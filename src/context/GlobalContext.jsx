import { createContext, useState } from "react";

export const GetGlobalContext = createContext();
export const GlobalContext = ({ children }) => {
    const [cartSideStatus, setCartSideStatus] = useState(false);
    const [loginSidebarStatus, setLoginSidebarStatus] = useState(false);
    return (
        <GetGlobalContext.Provider value={{ cartSideStatus, setCartSideStatus, setLoginSidebarStatus, loginSidebarStatus }}>{children}</GetGlobalContext.Provider>

    )
}
