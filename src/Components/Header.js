import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <>
            <header className='header'>
                <div className="header-wrapper">
                    <div className="header-content">
                        <h1>Design confidently.</h1>
                        <p>UsabilityHub is a remote user research platform that takes the guesswork out of design decisions by validating them with real users.</p>
                        <button className="get-started">Get started</button>
                    </div>
                    <div className="header-img">
                        <img src="/assets/asset2.svg" alt="" />
                    </div>
                </div>
            </header>
        </>
    )
}
