import React from "react";
import TeamName from "./TeamName/components/TeamName";
import Login from "./Login/components/login";
import { Navigate, useLocation } from "react-router-dom";
import Register from "./Register/components/Register";
import HeaderNonAuthorizedLayout from "../../Layout/HeaderNonAuthorized";

const NonAuthorized = () => {
    const location = useLocation();
    const locationBasedComponent = {
        "/": <Register />,
        "/login": <Login />,
        "/register": <Register />,
        "/teamname": <TeamName />,
    };

    // checking for token
    const token = localStorage.getItem("token");

    // navigating to dashboard if token is present
    if (token) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <>
            <div className="container">
                <HeaderNonAuthorizedLayout />
                <div className="content-wrapper">
                    {locationBasedComponent[location.pathname]}
                </div>
            </div>
        </>
    );
};

export default NonAuthorized;
