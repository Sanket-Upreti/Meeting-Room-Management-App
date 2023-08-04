import React, { useEffect, useRef, useState } from "react";
import { useGetUsersQuery } from "../../store/services/roomManagementService";
import SpinnerAnimation from "../../helpers/Spinner";
import { useAuth } from "../../utils/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { RxExit } from "react-icons/rx";
import { abbreviateNames } from "../../helpers/AbbrvName";

const HeaderDashboard = ({ isLoading, data }) => {
    const { firstname, lastname, username, role } = data;
    const [isAvatarClicked, setIsAvatarClicked] = useState(false);
    const navigate = useNavigate();
    const auth = useAuth();
    const dropdownRef = useRef();

    // handling avatar hover
    useEffect(() => {
        const handleOutsideClick = (e) => {
            const allowTarget = ["abbrv-name", "avatar"];
            if (
                !allowTarget.includes(e.target.className) &&
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                setIsAvatarClicked(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    if (isLoading) {
        return <SpinnerAnimation />;
    }

    const logoutUser = () => {
        localStorage.removeItem("token");
        navigate("/teamname", { replace: true });
    };

    const handleClick = () => {
        setIsAvatarClicked(!isAvatarClicked);
    };

    return (
        <>
            <div className="d-flex w-content p-content">
                <div>
                    <strong>Hi</strong>{" "}
                    <span className="navigation-link">{username}</span>
                </div>
                <div className="d-flex">
                    <div className="capitalize m-r-t">
                        <strong>{role}</strong>
                    </div>
                    <div className="d-block">
                        <div className="avatar" onClick={handleClick}>
                            <div className="abbrv-name">
                                {abbreviateNames(`${firstname} ${lastname}`)}
                            </div>
                        </div>
                        {isAvatarClicked && (
                            <div ref={dropdownRef}>
                                <div className="arrow" />
                                <div
                                    className="index-999 logout-menu"
                                    onClick={logoutUser}
                                >
                                    <p>
                                        <RxExit style={{ color: "red" }} />
                                        &nbsp;&nbsp;Logout
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderDashboard;
