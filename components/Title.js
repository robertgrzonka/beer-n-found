/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const wrapperStyle = css`
  position: fixed;
  top: 0;
  width: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
  z-index: 1;
  height: 120px;
  @media (max-width: 1050px) {
    height: 100px;
  }
  @media (max-width: 750px) {
    height: 80px;
  }
`

const stylesTitle = css`
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.0625em;
  font-size: 2em;
  font-variant: all-small-caps;
  font-weight: 900;
  cursor: pointer;
  transition: all 0.4s ease;
  z-index: 0;
  &:hover {
    color: rgba(255,255,255,0.2);
  }
  & span {
    color: rgba(255, 255, 255);
    &::before {
      content: ' ';
      background-color: #008080;
      position: absolute;
      transform: rotate(1deg);
      box-shadow: 0px 0px 3px #212b35;
      width: 120%;
      height: 120%;
      bottom: -5%;
      left: -10%;
      z-index: -1;
    }
  }
`

function Title () {
  const [ isScrolled, setIsScrolled ] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(!isScrolled)
    window.addEventListener('scroll', () => handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })


  return (
    <div className='container mb-5 pb-5'>
      <div className='row d-flex align-items-center justify-content-center'>
        <ul className='nav py-2' css={wrapperStyle}>
          <li className='nav-item'>
            <Link href='/'>
              <h1 css={stylesTitle}>beer<span>&</span>found<sup>™</sup></h1>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Title
