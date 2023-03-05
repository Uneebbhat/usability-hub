import React from 'react'
import './Navbar.css'
import { useState } from 'react'

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(true);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    }

    return (
        <>
            <nav className="navbar flex" onClick={toggleNavbar}>
                <div className="logo">
                    <a href="index.html">
                        <img src="/assets/logo.png" alt="UsabilityHub" />
                    </a>
                </div>

                {navbarOpen && (
                    <div className="nav-list">
                        <ul className="nav-links">
                            <li><a className='nav-li' href="/">Product</a></li>
                            <li><a className='nav-li' href="/">Customers</a></li>
                            <li><a className='nav-li' href="/">Pricing</a></li>
                            <li><a className='nav-li' href="/">Resources</a></li>
                            <li><a className='sign-in nav-li' href="/">Sign in</a></li>
                            <li><a className='sign-up ' href="/">Sign up</a></li>
                        </ul>
                    </div>
                )}

                <div className="ham">
                    <img src="/assets/menu.png" alt="" />
                </div>
            </nav>
        </>
    )
}
