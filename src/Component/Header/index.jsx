import React from 'react';
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Main navigation">
                <div className="container-fluid">
                    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'addUsers'}>ایجاد کاربر جدید</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to={'product'}>ایجاد محصول جدید</NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export {Header};