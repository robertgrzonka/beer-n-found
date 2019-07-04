import styled from '@emotion/styled'

const NextStyles = styled.a`
  position: fixed;
  top: 50%;
  right: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  cursor: pointer;
  z-index: 15;
  font-weight: 700;
  font-size: 2em;
  opacity: 0.3;
  transition: all 0.4s ease;
  &::before {
    content: 'Next '
  }
  &:hover {
    text-decoration: none;
    color: #008080;
    opacity: 1;
  }
  @media (max-width: 1250px) {
    right: 25px;
    top: 50%;
    font-size: 3em;
    &::before {
      content: ' '
    }
  }
`

const PrevStyles = styled.a`
  position: fixed;
  top: 50%;
  left: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  cursor: pointer;
  z-index: 15;
  font-weight: 700;
  font-size: 2em;
  opacity: 0.3;
  transition: all 0.4s ease;
  &::after {
    content: 'Prev'
  }
  &:hover {
    text-decoration: none;
    opacity: 1;
    color: #008080;
  }
  @media (max-width: 1250px) {
    left: 25px;
    top: 50%;
    font-size: 3em;
    &::after {
      content: ' '
    }
  }
`

const Next = ({ id }) => {
  const href = `/beer/${id + 1}`
  return <NextStyles href={href}>▶</NextStyles>
}

const Prev = ({ id }) => {
  const href = `/beer/${id - 1}`
  return <PrevStyles href={href}>◀︎</PrevStyles>
}

export { Next, Prev }
