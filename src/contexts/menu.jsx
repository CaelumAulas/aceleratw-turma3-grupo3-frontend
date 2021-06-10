import React, { createContext, useState } from 'react';

export const MenuContext = createContext({});

export function MenuProvider({ children }) {
    const [title, setTitle] = useState();

    function handleChangeTitle(title) {
        setTitle(title);
    }

    return (
        <MenuContext.Provider value={{
            title,
            handleChangeTitle
        }}>
            {children}
        </MenuContext.Provider>
    )
}