import React from "react";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.svg";
import { useLocation } from "react-router-dom";

const HeaderNonAuthorizedLayout = () => {
    let location = useLocation();

    const locationBasedMessage = {
        "/": "Sign up",
        "/login": "Login",
        "/register": "Sign up",
        "/teamname": "Welcome",
    };

    return (
        <>
            {/* handling logo for the header */}
            <div className="p-t text-center">
                <Image src={logo} alt="Logo" />
            </div>

            {/* displaying content based on location */}
            <div className="m-t">
                <h2 className="text-center">
                    {locationBasedMessage[location.pathname]}
                </h2>
            </div>
        </>
    );
};

export default HeaderNonAuthorizedLayout;
