import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import lisbon_for_beginners from '../assets/images/lisbon_for_beginners.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Tours - Francisco B. Sousa</title>
            <meta name="description" content="Tours Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>What I'm best known for</h2>
                    </header>
                    <p>Other excursions.
                        If you would like fully customizable walks and explorations of not only Lisbon but also the wider Portugal – half day, full day, and several days – then you should check out my other project, Your Portugal, accessible here: www.your-portugal.com </p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={lisbon_for_beginners} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Lisbon for Beginners</h3>
                            </header>
                            <strong></strong><em></em>
                            <p>A leisurely stroll down one of the city’s hills which allows you to understand the overarching narrative of the history of the country. And how it ties to the development of Lisbon’s historical centre’s main neighbourhoods such as   <em><strong>Bairro Alto</strong></em>, <em><strong>Chiado</strong></em>, and <em><strong>Baixa</strong></em>.
                                You try a freshly-made custard tart and a shot of bica espresso, as well as the ginginha sweet liquor. You also learn about Lisbon’s trademark cobbled stones, azulejo tiles and tramcars. </p>
                            <ul className="actions">
                                <li><Link to="/lisbon_beginners" className="button">Book this tour</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Lisbon Origins</h3>
                            </header>
                            <p>Look inside Lisbon’s birthplace – its neighborhoods which have stood the test of time, and especially the test of the Great Earthquake of 1755. Visiting the <em><strong>Mouraria</strong></em> makes a discussion of the uniquely Portuguese sung lament of fado mandatory. In <em><strong>Alfama</strong></em> we crisscross its narrow zig-zagging Moorish streets. Depending on your interest, we can visit the Roman theatre, the São Jorge castle or the Sé Catedral, the main city mosque during the period of Moorish rule. </p>
                            <ul className="actions">
                                <li><Link to="/lisbon_origins" className="button">Book this tour</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Golden Age Lisbon</h3>
                            </header>
                            <p><em><strong>Belém</strong></em>, the new Bethlehem, was born with the construction of the <em><strong>Jerónimos Monastery</strong></em> from 1500 to celebrate the discovery of the maritime route to India. A testament to Portugal’s former riches, those amassed during the first Golden Age, the time of its maritime domination. Depending on your interest, we can visit the National Carriage Museum, the Maritime Museum, the cloister of the Jerónimos Monastery, or the Belém Tower. </p>
                            <ul className="actions">
                                <li><Link to="/golden_age" className="button">Book this tour</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Fantastical Sintra</h3>
                            </header>
                            <p>In 1838 Ferdinand II purchased an abandoned Manueline Jeronymite convent. Its renovation into the <em><strong>Pena castle-palace</strong></em> began the process of the Romantic transformation of Sintra. Sir Francis Cook purchased the <em><strong>Monserrate estate</strong></em> and recreated its manor house into a neo-Arab palace. Carvalho Monteiro imagined <em><strong>Quinta da Regaleira</strong></em> and its Initiatic Garden. Depending on your interest, we can visit any number of Sintra's monuments up to a total of three in a day. </p>
                            <ul className="actions">
                                <li><Link to="/fantastical_sintra" className="button">Book this tour</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing