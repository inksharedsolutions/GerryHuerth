import React from 'react'
import { Helmet } from 'react-helmet';

import Layout from '../components/layout'
import Nav from '../components/navigation'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../static/book/hardcover1.png'



const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'gerry-huerth',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="Book | Gerry Huerth"/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `The Boundary Waters`,
                                spanFirst: `A Quantum Adventure`,
                                imgSrc: Book1,
                                id: 'the_gifted_one',
                                content:
                                    `
                                        <p>
                                        Gerry Huerth, born of mixed race during the civil rights movement, struggled with identity issues much of his young life.
                                        </p>

                                        <p>
                                        The Boundary Waters chronicles the unfolding and sometimes comic relationship between Raymona Washington Goldberg, an African American woman adopted as an infant by Jewish parents during a Freedom Ride in the 1960's and Matthew Pierson a gay man who geographically lives in Minneapolis but psychically inhabits a world of romantic fantasies. She spends her time barricaded in her Upper East Side Apartment in New York City, afraid to be contaminated by the stories lurking in the most common circumstances. Matthew distracts himself with romantic stories in which he becomes entangled. Their phone conversations provide a hygienic boundary through which Raymona experiences the world and Matthew has an audience
                                        </p>

                                        <p>
                                        Their relationship takes a dramatic turn when Matthew entangles himself with three other gay men who are going to The Boundary Waters in Minnesota. One of the men is at the end stage of AIDS. Matthew is quite suddenly captured in an adventure in which wishful happy endings lose all meaning.
                                        </p>

                                        <p>
                                        Not only does the boundary between Raymona and Matthew start shifting, but both characters begin exploring the carefully guarded boundaries in their own lives. Their stories interact in a kind of synchrony as they stumble through the comedy and heartbreak of the human condition.
                                        </p>

                                                                                        
                                    `,

                                ebooks: {
                                    // stratton: 'https://www.stratton-press.com/books/true-crime-cases/',
                                    barnes: 'https://www.barnesandnoble.com/w/the-boundary-waters-gerry-huerth/1139432267?ean=9781648953958',
                                    amazon: 'https://www.amazon.com/Boundary-Waters-Quantum-Adventure-ebook/dp/B094GFXM3F/ref=sr_1_1?dchild=1&keywords=9781648953958&qid=1623260949&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Boundary-Waters-Quantum-Adventure/dp/1648953948/ref=sr_1_1?keywords=9781648953941&qid=1623260955&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/the-boundary-waters-gerry-huerth/1139432267?ean=9781648953941',
                                    booksamillion: 'https://www.booksamillion.com/p/Boundary-Waters/Gerry-Huerth/9781648953941?id=8258036461372',
                                },
                             
                            }}
                        />

                        <div className="commentSection" >
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;