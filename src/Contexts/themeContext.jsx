/* eslint-disable react/prop-types */
import {createContext, useContext, useState} from 'react';


export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);