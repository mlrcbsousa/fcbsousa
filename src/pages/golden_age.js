import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Golde Age Lisbon</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Golde Age Lisbon</h1>
                    </header>
                    {/* <span className="image main"><img src={pic11} alt="" /></span> */}
                    <p>Under Construction.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic