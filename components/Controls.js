import styled from "@emotion/styled";
import Link from "next/link";

const NextStyles = styled.a`
  position: absolute;
  right: 20px;
  font-size: 3em;
  top: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  cursor: pointer;
  z-index: 15;
  font-weight: 700;
  opacity: 0.3;
  transition: all 0.4s ease;
  &::before {
    content: " ";
  }
  &:hover {
    color: #008080;
    text-decoration: none;
    opacity: 1;
  }
  @media (min-width: 1200px) {
    right: 100px;
    top: 50vh;
    font-size: 2em;
    &::before {
      content: "Next ";
    }
  }
`;

const PrevStyles = styled.a`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  cursor: pointer;
  z-index: 15;
  font-weight: 700;
  left: 20px;
  top: 25vh;
  font-size: 3em;
  opacity: 0.3;
  transition: all 0.4s ease;
  &::after {
    content: " ";
  }
  &:hover {
    text-decoration: none;
    opacity: 1;
    color: #008080;
  }
  @media (min-width: 1200px) {
    font-size: 2rem;
    left: 100px;
    top: 50vh;
    &::after {
      content: "Prev";
    }
  }
`;

const Next = ({ id }) => (
  <Link replace href={`/beer/${id + 1}`}>
    <NextStyles>▶</NextStyles>
  </Link>
);
const Prev = ({ id }) => (
  <Link replace href={`/beer/${id - 1}`}>
    <PrevStyles>◀︎</PrevStyles>
  </Link>
);

export { Next, Prev };
