/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'
import Link from 'next/link'

const CardBody = styled.div`
  height: 300px;
  width: auto;
  cursor: pointer;
  display: grid;
  color: #008080;
  transition: all 0.4s ease;
  &:hover {
    transition: all 0.4s ease;
    color: #F30E5C;
  }
`

const CardImg = styled.img`
  height: 140px;
  width: auto;
  @media (min-width: 650px) {
    height: 120px;
  }
  @media (min-width: 950px) {
    height: 110px;
  }
  @media (min-width: 1200px) {
    height: 120px;
  }
`

const stylesHeader = css`
  font-weight: 700;
  font-family: 'Playfair Display', serif;
  transition: all 0.4s ease;
  @media (max-width: 1050px) {
    font-weight: 400;
    transition: all 0.4s ease;
  }
`

const linkStyles = css`
  min-height: 300px;
  width: auto;
  border: 1px solid #008080;
  border-radius: 3px;
  box-shadow: 0px 1px 3px #008080;
  cursor: pointer;
  transition: all 0.4s ease;
  background: rgb(240,240,240);
  &:hover {
    border: 1px solid #F30E5C;
    box-shadow: 0px 4px 8px #F30E5C;
    color: #F30E5C;
    transition: all 0.4s ease;
  }
`

const Card = ({ id, src, name, tagline }) => (
  <div className='col-12 col-sm-6 col-md-4 py-2'>
    <Link
      replace
      href={`/beer/${id}`}
    >
      <CardBody className='card text-center d-flex align-items-center justify-content-center' css={linkStyles}>
        <CardImg className='card-img-top mx-auto mt-5' src={src} />
        <div className='card-body'>
          <p className='mb-0' css={stylesHeader}>{name}</p>
          <small className='mt-0 text-muted'>
            {tagline}
          </small>
        </div>
      </CardBody>
    </Link>
  </div>
)

export default Card
