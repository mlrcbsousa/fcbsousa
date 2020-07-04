import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import tour_guide from '../assets/images/tour_guide.jpg'
import writing from '../assets/images/writing.jpg'
import blog from '../assets/images/blog.jpg'
import cook from '../assets/images/cook.jpg'
// import pic05 from '../assets/images/pic05.jpg'
// import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Francisco B. Sousa"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${tour_guide})`}}>
                            <header className="major">
                                <h3>Tours</h3>
                                <p>Expressing my passion for History</p>
                            </header>
                            <Link to="/tours" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${writing})`}}>
                            <header className="major">
                                <h3>Writing</h3>
                                <p>Books, articles and essays</p>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                        <article style={{backgroundImage: `url(${blog})`}}>
                            <header className="major">
                                <h3>Blog</h3>
                                <p>History, philosophy and politics</p>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                        <article style={{backgroundImage: `url(${cook})`}}>
                            <header className="major">
                                <h3>Products</h3>
                                <p>Ebooks and Audio recordings</p>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                        {/* <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>YouTube Channel</h3>
                                <p>Political discourse for Sapien sapiens</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Drawing</h3>
                                <p>maps and funny cartoons</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article> */}
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>About Me</h2>
                            </header>
                            <p>Hi, my name is Francisco and I'm from Lisbon. I studied History at university, and mastered in Politics. I guide people through experiencing my hometown through the perspective of a local, proud of his country's history. </p>
                            <ul className="actions">
                                <li><Link to="/tours" className="button next">See it in action</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex