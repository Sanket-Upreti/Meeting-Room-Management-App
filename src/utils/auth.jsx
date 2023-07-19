import { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({children}) =>{
    const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  }, []);

    const login = token => {
        setLoggedIn(true)
        localStorage.setItem('token', token)
    }
    
    const logout = () => {
        setLoggedIn(false)
        localStorage.removeItem('token')
    }

    return <AuthContext.Provider value={{loggedIn, login, logout}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () =>{
    return useContext(AuthContext)
}