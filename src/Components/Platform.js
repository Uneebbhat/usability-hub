import React from 'react'
import './Platform.css'

export default function Platform() {
    return (
        <>
            <div className="platform">
                <div className="platform-wrapper">
                    <div className="about-platform">
                        <h2>One platform, endless possibilities</h2>
                        <button className='examples'>See more examples <span>→</span></button>
                    </div>
                    <div className="platform-img">
                        <img src="assets/platform1.svg"/>
                        <img src="assets/platform2.svg"/>
                        <img src="assets/platform3.svg"/>
                        <img src="assets/platform4.svg"/>
                    </div>
                </div>
            </div>
        </>
    )
}
