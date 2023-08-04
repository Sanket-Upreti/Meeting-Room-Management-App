import React, { useEffect } from "react";
import { useAuth } from "./auth";

const RequireAuth = ({ children }) => {
    const auth = useAuth();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            return auth.login(token);
        }
    }, [auth]);

    return children;
};

export default RequireAuth;
