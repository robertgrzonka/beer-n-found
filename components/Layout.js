import React from 'react'
import Head from 'next/head'
import Body from './Body'
import Title from './Title'

const Layout = ({ title, children }) => (
  <React.Fragment>
    <Head>
      <title>beer&found™ | { title }</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Body>
      <Title title={title} />
      { children }
    </Body>
  </React.Fragment>
)

export default Layout
