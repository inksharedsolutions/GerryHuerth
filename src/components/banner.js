import React from 'react'
import { Link } from 'gatsby';

const Banner = () => {

    return (
        <>
            <section className="banner-section">
                <div className="container-gt">
                    <div className="one-grid-columns">
                    <div className="grid-child-elem"> </div>
                        <div className="grid-child-elem">
                            <div className="banner-text">
                                <p data-aos="fade-up" data-aos-duration="3000" >
                                A&nbsp;
                                <span style={{borderBottom: '1px solid orange'}}>Quantum</span> &nbsp;
                                <span style={{borderBottom: '1px solid brown'}}>Adventure</span>
                                </p>

                                <h1 data-aos="fade-up" data-aos-duration="2000" >
                                    The Boundary
                                </h1>

                                <p className="right-sub-text" data-aos="fade-up" data-aos-duration="3000" >
                                    <span>Waters</span>
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;