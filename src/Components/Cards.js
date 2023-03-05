import React from 'react'
import './Cards.css'

export default function Cards() {
    return (
        <>
            <section className="card-section">
                <div className="card-wrapper">
                    <div className="sorting flex-items">
                        <img src="/assets/asset 11.svg" alt="" />
                        <h4>Card sorting</h4>
                        <p>Discover how people group and label information.</p>
                        <button className="btn">Learn more <span>→</span></button>
                    </div>

                    <div className="prototype flex-items">
                        <img src="/assets/asset 13.svg" alt="" />
                        <h4>Prototype tests</h4>
                        <p>Discover how people navigate your Figma prototypes.</p>
                        <button className="btn">Learn more <span>→</span></button>
                    </div>

                    <div className="first-click flex-items">
                        <img src="/assets/asset 14.svg" alt="" />
                        <h4>First click tests</h4>
                        <p>Test interaction with first click and navigation tests.</p>
                        <button className="btn">Learn more <span>→</span></button>
                    </div>


                    <div className="design flex-items">
                        <img src="/assets/asset 15.svg" alt="" />
                        <h4>Design surveys</h4>
                        <p>Get feedback on images, videos or audio files.</p>
                        <button className="btn">Learn more <span>→</span></button>
                    </div>

                    <div className="preference flex-items">
                        <img src="/assets/asset 16.svg" alt="" />
                        <h4>Preference tests</h4>
                        <p>Find out which designs users prefer and why.</p>
                        <button className="btn">Learn more <span>→</span></button>
                    </div>

                    <div className="five flex-items">
                        <img src="/assets/asset 17.svg" alt="" />
                        <h4>Five second tests</h4>
                        <p>Test comprehensibility by measuring first impressions.</p>
                        <button className="btn">Learn more <span>→</span></button>
                    </div>
                </div>
            </section>
        </>
    )
}
