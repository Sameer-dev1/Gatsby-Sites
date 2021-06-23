import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there! I'm the proud creator of this site, which i built with gatsby.</p>
            <StaticImage
            alt="Women"
            src="https://www.digitalartsonline.co.uk/cmsdata/features/3669769/mercedes-debellard-folio-illustration-birds-animals-floral-heart-woman-portrait-another-way-film-festuval-poster.jpg"
            />
        </Layout>
    )
}

export default AboutPage