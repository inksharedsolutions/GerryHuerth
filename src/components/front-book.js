import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../static/book/hardcover1.png'

const MidBook = (props) => {
    return (
        <>
            <section className="upper-main ">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books" >

                        <div className="book-wraps" >
                            <img src={FrontBook} data-aos="fade-up" data-aos-duration="3000" />
                        </div>

                        <div className="content-wraps">

                            <span className="italic-tag" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                Read, and learn in various formats
                            </span>

                            <h1 className="heading--featured" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p data-aos="fade-up" data-aos-duration="2000">
                            The Boundary Waters chronicles the unfolding and sometimes comic relationship between Raymona Washington Goldberg, an African American woman adopted as an infant by Jewish parents during a Freedom Ride in the 1960's and Matthew Pierson a gay man who geographically lives in Minneapolis but psychically inhabits a world of romantic fantasies... 
                            </p>

                            <button className="btn-book-featured" data-aos="fade-up" data-aos-duration="3000">
                                <Link to="/about-the-book">
                                    Read More
                                </Link>
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook