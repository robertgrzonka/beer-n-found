/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState, Fragment } from 'react'
import Modal from 'react-modal'

const linkStyles = css`
  padding: 10px 0px;
  & a {
    text-decoration: none;
    color: #008080;
    transition: all 0.4s ease;
    z-index: 1;
    &:hover {
      color: #F30E5C;
    }
  }
`

const modalStyle = css`
  list-style-type: none;
  display: grid;
  margin: 0 auto;
  padding: 10px;
  z-index: 10;
`

const buttonStyles = css`
  cursor: pointer;
  background-color: #008080;
  padding: 0.5em 1em;
  border-radius: 3px;
  border: 1px solid #008080;
  color: #212b35;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 0.9em;
  letter-spacing: 0.0625em;
  transition: all 0.4s ease;
  &:hover {
    background-color: #212b35;
    box-shadow: 0px 3px 10px #F30E5C;
    border: 1px solid #F30E5C;
    color: #F30E5C;
  }
`

function NavigationModal () {
  const [ isModalOpen, setIsModalOpen ] = useState(false)

  const handleClick = () => setIsModalOpen(!isModalOpen)

  return (
    <Fragment>
      <button
        css={buttonStyles}
        className='ml-auto mx-5'
        onClick={() => handleClick()}>
        {isModalOpen ? 'Close' : 'Open'} menu
      </button>
      <Modal
        isOpen={isModalOpen}
        contentLabel='Modal'
        shouldCloseOnOverlayClick
        onRequestClose={() => handleClick()}
        style={{
          overlay: {
            backgroundColor: 'rgba(69, 79, 91, 0.9)',
            transition: 'all 0.4s ease'
          },
          content: {
            backgroundColor: 'rgb(230, 230, 230)',
            top: '120px',
            right: '50px',
            left: 'auto',
            bottom: 'auto',
            textAlign: 'center',
            transition: 'all 0.4s ease'
          }
        }}>
        <p className='lead'>Check me here:</p>
        <ul css={modalStyle}>
          <li css={linkStyles}><a href='https://github.com/robertgrzonka'>GitHub</a></li>
          <li css={linkStyles}><a href='https://theguys.design'>theGuys™</a></li>
          <li css={linkStyles}><a href='mailto:robert@theguys.sh'>Mail me</a></li>
          <hr />
          <small className='text-muted'>MIT © robertgrzonka</small>
        </ul>
      </Modal>
    </Fragment>
  )
}

export default NavigationModal
