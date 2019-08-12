import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout colour="pink" active="about">
    <SEO title="About" />
    <h1>About</h1>
    <p>
      I'm a penultimate year CS student at the University of St Andrews in
      Scotland, interning as a Full Stack developer at{' '}
      <a
        target="_blank"
        rel="noopener"
        href="https://transferwise.com"
        className="transferwise"
      >
        TransferWise
      </a>{' '}
      this summer. I have a background in front-end development with React and
      dapp development on Ethereum.
      <br /> <br />
      I'm a keen hackathon-goer and photographer, feel free to browse my
      projects and photos on this site. It was built with Gatsby and Contentful,
      and is being hosted on Netlify. The code is open source and can be found
      on{' '}
      <a
        target="_blank"
        rel="noopener"
        className="github"
        href="https://github.com/jackleslie"
      >
        GitHub
      </a>
      .
      <br /> <br />
      You can find me on{' '}
      <a
        target="_blank"
        rel="noopener"
        className="twitter"
        href="https://twitter.com/jackjdleslie"
      >
        Twitter
      </a>{' '}
      and fire me a DM, but if you're feeling fancy you can connect with me on{' '}
      <a
        target="_blank"
        rel="noopener"
        className="linkedIn"
        href="https://linkedin.com/in/jackjdleslie"
      >
        LinkedIn
      </a>{' '}
      . If you're really cool you can get me on{' '}
      <a
        target="_blank"
        rel="noopener"
        className="keybase"
        href="https://keybase.io/jackleslie"
      >
        Keybase
      </a>
      , or feel free to send me an{' '}
      <a
        target="_blank"
        rel="noopener"
        href="mailto:jackleslie@protonmail.com"
        className="protonmail"
      >
        email
      </a>
      .
    </p>
  </Layout>
)

export default AboutPage