import React, { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'

const RequireAuth = ({children}) => {
    const auth = useAuth()
    const location = useLocation()

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            return auth.login(token)
        }else{
            return <Navigate to="/teamname" state={{path: location.pathname}} />
        }
    }, [auth])

    return children
}

export default RequireAuth