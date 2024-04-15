/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
export const NavbarContext = createContext()

// eslint-disable-next-line react/prop-types
export const NavbarProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState('about-me');
    const handleActiveMenu = (menu) => {
        setActiveMenu(menu);
    }

    return (
        <NavbarContext.Provider value={{activeMenu, handleActiveMenu}}>
            {children}
        </NavbarContext.Provider>
    )
}

export  const useNavbar = () => useContext(NavbarContext);