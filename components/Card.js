/** @jsx jsx */
import Routing from './Routing'
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'

const CardBody = styled.div`
  height: 300px;
  width: auto;
  cursor: pointer;
  transition: all 0.4s ease;
`

const CardImg = styled.img`
  height: 150px;
  width: auto;
  @media (max-width: 1050px) {
    height: 100px;
  }
`

const stylesLink = css`
  font-weight: 900;
  color: #008080;
  transition: all 0.4s ease;
  @media (max-width: 1050px) {
    font-weight: 500;
  }
`

const Card = ({ id, src, name, tagline }) => (
  <div className='col-10 col-sm-8 col-md-4 py-2'>
    <Routing href={`/beer/${id}`}>
      <CardBody className='card text-center bg-white'>
        <CardImg className='card-img-top mx-auto mt-5' src={src} />
        <div className='card-body'>
          <p css={stylesLink}>{name}<br />
            <small className='text-muted'>
              {tagline}
            </small>
          </p>
        </div>
      </CardBody>
    </Routing>
  </div>
)

export default Card
