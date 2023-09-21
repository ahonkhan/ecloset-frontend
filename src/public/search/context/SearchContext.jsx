import { createContext, useState } from "react";

export const GetSearchContext = createContext();
export const SearchContext = ({ children }) => {
    const [searchFilterStatus, setSearchFilterStatus] = useState();
    return (
        <GetSearchContext.Provider value={{ searchFilterStatus, setSearchFilterStatus }}>{children}</GetSearchContext.Provider>
    )
}
