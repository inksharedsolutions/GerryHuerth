import React from 'react'
import { Link } from 'gatsby'
import AuthorImg from '../static/author/dummy-profile.jpg'

const Author = () => {
    return (
        <>
            <section className="author" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="wrapper-heading-content">
                        <h1>About the<br /> Author</h1>
                    </div>

                    <div className="grid-child" id="author-contents">

                        <p data-aos="fade-up" data-aos-duration="2000">
                        I am a 73 year old person who has creatively responded to being an outsider and in that process has learned to be an effective advocate for people who face the challenges of working with systems that may not be responsive to their hopes and needs. Fifty one years ago I was an early member of FREE, the first Gay and Lesbian college organization in this country.
                        </p>

                        <h1 className="author-name-tag" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <span>Gerry</span>
                            <span>Huerth</span>
                        </h1>

                        <span className="author-tagline">Author & Writer</span>
                        <Link className="buttonLayouts" data-aos="fade-up" data-aos-duration="3000" to="/about-the-author">
                            Read More
                        </Link>
                    </div>
                    
                    {/* <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} data-aos="fade-up" data-aos-duration="3000" />
                    </div> */}

                </div>
            </section>
        </>
    )
}

export default Author;