import React from "react";

const CustomError = ({ error }) => {
    return (
        <div className="mb-3">
            {error && (
                <div className="error-container">
                    <div style={{ color: "red" }}>{error}</div>
                </div>
            )}
        </div>
    );
};

export default CustomError;
