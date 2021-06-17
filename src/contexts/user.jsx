import React, { createContext, useState } from 'react';

export const UserContext = createContext({});

export function UserProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false);
    const [token, setToken] = useState();

    async function handleLogin(email, password) {
        await fetch(`http://localhost:8080/auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((response) => {
                if (response.ok)
                    return response.json()
                else
                    throw new Error();
            })
            .then((data) => {
                setToken(data.token);
                setIsLogged(true);
            })
    }

    function handleLogout() {
        setIsLogged(false);
    }

    return (
        <UserContext.Provider value={{
            userIsLogged: isLogged,
            token,
            handleLogin,
            handleLogout
        }}>
            {children}
        </UserContext.Provider>
    )
}