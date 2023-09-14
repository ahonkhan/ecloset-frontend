import { createContext, useState } from "react";

export const GetSharedContext = createContext();
export const SharedContext = ({ children }) => {
    const [desktopSidebarStatus, SetDesktopSidebarStatus] = useState(false);
    return (
        <GetSharedContext.Provider value={{ desktopSidebarStatus, SetDesktopSidebarStatus }}>{children}</GetSharedContext.Provider>
    )
}