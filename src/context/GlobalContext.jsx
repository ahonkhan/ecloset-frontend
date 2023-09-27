import { createContext, useState } from "react";

export const GetGlobalContext = createContext();
export const GlobalContext = ({ children }) => {
    const [ModalOpenStatus, setModalOpenStatus] = useState(false);
    return (
        <GetGlobalContext.Provider value={{ ModalOpenStatus, setModalOpenStatus }}>{children}</GetGlobalContext.Provider>

    )
}
