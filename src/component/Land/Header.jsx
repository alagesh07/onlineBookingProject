import React from "react";

const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <h1>OceanPark</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><h2 href="/">Parks</h2></li>
                    <li><h2 href="/">Resorts</h2></li>
                    <li><h2 href="/">Timmings</h2></li>
                    <li><h2 href="/">Contact</h2></li>
                    <li><h2 href="/">About us</h2></li>
                </ul>
            </nav>
            
        </div>
    );
}
export default Header;