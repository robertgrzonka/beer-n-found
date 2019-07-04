/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const stylesImg = css`
  height: 400px;
  @media (max-width: 1250px) {
    height: 350px;
  }
  @media (max-width: 850px) {
    height: 250px;
    padding-bottom: 20px;
}
`

const subtitle = css`
  color: white;
  position: relative;
  font-variant: all-small-caps;
  font-weight: 100;
  z-index: 0;
    &::before {
    content: ' ';
    width: 110%;
    height: 110%;
    bottom: -5%;
    left: -5%;
    background-color: #008080;
    position: absolute;
    border-radius: 3px;
    transform: rotate(0.75deg);
    z-index: -1;
}
`

const Modal = ({ id, src, name, tagline, ibu, abv, description, brewersTips }) => (
  <>
    <div className='col-sm-10 col-md-5 col-lg-4' key={id}>
      <img
        className='mx-auto d-block'
        css={stylesImg}
        src={src}
        alt={name}
      />
    </div>
    <div className='col-sm-10 col-md-6'>
      <h1 className='mb-0 mt-2 text-center' style={{ fontFamily: 'Playfair Display' }}>
        {name}
      </h1>
      <h2 className='mb-4 text-center '>
        <small css={subtitle}>{tagline}</small>
      </h2>
      <div className='d-flex justify-content-around align-items-center my-3'>
        <span><strong>IBU</strong>: {ibu}</span>
        <span><strong>ABV</strong>: {abv}</span>
      </div>
      <p className='text-justify'>
        {description}
      </p>
      <p className='text-justify'>
        <span><strong>Brewers Tips</strong>: {brewersTips}</span>
      </p>
    </div>
    </>
)

export default Modal
