import React from 'react'
import './Work.css'

export default function Work() {
    return (
        <>
            <div className="work">
                <div className="work-wrapper">
                    <div className="design card">
                        <div className="design-img">
                            <img src="/assets/asset 18.svg" alt="" />
                        </div>
                        <div className="about-design">
                            <h3>Effortless validation for</h3>
                            <h2>Design professionals</h2>
                            <p>Test interfaces, interaction flows, iconography and more, to help you create intuitive and delightful experiences for your users.</p>
                        </div>
                    </div>

                    <div className="marketer card">
                        <div className="about-market">
                            <h3>Optimisation for</h3>
                            <h2>Marketers</h2>
                            <p>Fine-tune landing pages, messaging, and creative, helping you optimise conversion rates on marketing campaigns and product launches.</p>
                        </div>
                        <div className="marketer-img">
                            <img src="/assets/asset21.svg" alt="" />
                        </div>
                    </div>

                    <div className="product card">
                        <div className="product-img">
                            <img src="/assets/asset24.svg" alt="" />
                        </div>
                        <div className="about-product">
                            <h3>Easier decision making for</h3>
                            <h2>Product managers</h2>
                            <p>Fine-tune landing pages, messaging, and creative, helping you optimise conversion rates on marketing campaigns and product launches.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
