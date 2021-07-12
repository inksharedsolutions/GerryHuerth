import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Nav from '../components/navigation';
import Banner from '../components/non-front-banner'
import AuthorImg from '../static/author/dummy-profile.jpg'

const Author = (props) => {
    return(
        <>
            <Layout>
                <Helmet title="Author | Gerry Huerth"/>
                <Nav pathExt={props.path}/>
                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            {/* <div className="author-image-container">
                                <img src={AuthorImg} alt="author-profile"/>
                            </div> */}

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Gerry Huerth</span>
                                </span>
                            </p>

                            <div className="heading-quote">
                                <h4>
                                "In this mashup of comedy, quantum mechanics, social justice, tragedy and compassion; two characters living 15,00 miles apart, both strangely absent from their worlds, become entangled with each other and awaken to themselves and this heartbreaking and beautiful world."
                                </h4>
                                <span className="ata-span-fx">
                                    Author's Quote
                                </span>
                            </div>

                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            I am a 73 year old person who has creatively responded to being an outsider and in that process has learned to be an effective advocate for people who face the challenges of working with systems that may not be responsive to their hopes and needs. Fifty one years ago I was an early member of FREE, the first Gay and Lesbian college organization in this country.
                            </p>
                            <p>
                            I have also worked as an RN in many healthcare systems focusing on the needs of people who I serve. These nursing experiences include psychiatric nursing, working with drug addicted mothers and infants in Harlem, volunteering for The Farm Workers Union in California, being on the board of a very early hospice in Maine, volunteering to do massage for people with AIDS, and collaborating to create a personal care service for people with mental illness living in the community.
                            </p>
                            <p>
                            I have also worked in a community college as an adjunct instructor teaching and empowering students who face challenges to academic learning such as racism, poverty, violence and alternate learning styles. In that context I helped to create a Nonviolent Communication Task Force, a college Pow Wow, a Community Organizing Course, Student Leadership Initiatives and served as faculty advisor for The Queer Student Organization.
                            </p>
                            <p>
                            I have also volunteered as a tutor for Megizi, an American Indian neighborhood organization. I am also on the board of Off The Blue Couch, a Black lead outreach organization supporting and empowering people facing racism and institutionalized violence. Through Off The Blue Couch I have co-led healing groups in North Minneapolis which is at the epicenter of both stress and hope in Minneapolis. Also Audua Pugh, the founder of Off The Blue Couch, and I have led workshops at three colleges helping people explore the experiences of privilege and trauma.
                            </p>
                            <p>
                            I have written six novels, also three screenplay, unperformed. All these creations focus on unlikely people who experience a kind of awakening in less than promising circumstances.  
                            </p>

                        </article>

                    </section>
                </div>
            </Layout>
        </>
    )
}

export default Author;