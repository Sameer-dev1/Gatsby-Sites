import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return(
    <Layout pageTitle="Home Page">
    <p>I'm making this by following the gatsby Tutorial.</p>
    <StaticImage
      alt="horse"
      src="https://wallpapercave.com/wp/wp2826731.jpg"
    />
    </Layout>
  )
}

export default IndexPage