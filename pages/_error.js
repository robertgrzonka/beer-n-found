import React from 'react'
import Layout from '../components/Layout'

class Error extends React.Component {
  static getInitialProps ({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render () {
    return (
      <Layout title='error'>
        <div className='container'>
          <div className='row d-flex align-items-center justify-content-center'>
            <p className='lead py-5'>
              {this.props.statusCode
                ? `An error ${this.props.statusCode} occurred on server.`
                : `An error ${this.props.statusCode} occurred on client side.`}
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Error
