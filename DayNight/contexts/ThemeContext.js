import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({});

const themes = {
    day: {
        id: 0,
        body: '#000000',
        background: '#ffffff',
        primary: '#003878', //night
        toggleText: 'Change to night'
    },
    night: {
        id: 1,
        body: '#ffffff',
        background: '#000000',
        primary: '#5F6BBE', //morning
        toggleText: 'Change to morning'
    }
}


export const ThemeProvider = ({children}) => {
    const themeProv = useThemeProv();
    return (
        <ThemeContext.Provider value={themeProv}>
            {children}
        </ThemeContext.Provider>
    );
}


//shortcut for using context
export const useTheme = () => {
    return useContext(ThemeContext);
}

const useThemeProv = () => {
    const [theme, setTheme] = useState(themes.day);

    const toggleTheme = (thm) => {
        if (thm === themes.day) {
            setTheme(themes.night);
        } else {
            setTheme(themes.day);
        }
    }


    useEffect( () => {
        const ini = () => {
            setTheme(themes.day);
        }
        return () => ini();
    }, []);

    return {
        theme,
        toggleTheme
    }
}
