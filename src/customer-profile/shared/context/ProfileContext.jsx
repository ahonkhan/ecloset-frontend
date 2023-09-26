import { createContext, useState } from "react";

export const GetProfileContext = createContext();
export const ProfileContext = ({ children }) => {
    const [menuStatus, setMenuStatus] = useState(false);

    return (
        <GetProfileContext.Provider value={{ menuStatus, setMenuStatus }}>
            {children}
        </GetProfileContext.Provider>
    )
}