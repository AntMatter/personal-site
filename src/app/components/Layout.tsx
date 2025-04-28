import React from "react";
import Header from "./Header";
import '../styles.css'

const Layout = ({ children }) => {
    return (
        <div className="container">
            <div className="sidebar">
                <Header />
            </div>
            {children}
        </div>




    )
}
export default Layout