import React from "react";
import Navbar from "../components/Navbar";

const Layouts = ({ children }) => {
    return (
        <>
                      <Navbar />

            <div className="container m-9">{children}</div>
        </>
    );
};

export default Layouts;
