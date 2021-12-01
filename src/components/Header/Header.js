import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
    return (
        <div className="header">
        <Link to="/">
        <div className="logo">News App</div>
        </Link>
        </div>
    );
};

export default Header;