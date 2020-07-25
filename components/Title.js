/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState, useEffect } from "react";
import NavigationModal from "./NavigationModal";

const wrapperStyle = css`
  position: fixed;
  top: 0;
  width: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 80px;
  background: #212b35;
  border-bottom: 1px solid #008080;
  z-index: 1;
  @media (min-width: 950px) {
    height: 100px;
  }
`;

const stylesTitle = css`
  font-family: "Playfair Display", serif;
  letter-spacing: 0.0625em;
  font-variant: all-small-caps;
  font-weight: 900;
  font-size: 2em;
  color: rgb(255, 255, 255);
  & a {
    color: rgb(255, 255, 255);
    text-decoration: none;
    transition: all 0.4s ease;
    &:hover {
      color: #f30e5c;
    }
    & span {
      color: #008080;
    }
  }
`;

function Title() {
  const [isBig, setIsBig] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 850 && isBig === false) {
        return setIsBig(true);
      } else if (window.innerWidth <= 850 && isBig === true) {
        return setIsBig(false);
      }
    }
    window.addEventListener("resize", () => handleResize());
    return () => window.removeEventListener("resize", handleResize());
  });

  const Navigation = () => (
    <div className="container mb-5 pb-5">
      <div className="row d-flex align-items-center justify-content-center">
        <ul className="nav py-2" css={wrapperStyle}>
          <li className="nav-item mr-auto mx-5">
            <h1 css={stylesTitle}>
              <a href="/">
                beer<span>&</span>found
              </a>
              <small>
                <sup style={{ color: "#008080" }}>™</sup>
              </small>
            </h1>
          </li>
          <NavigationModal />
        </ul>
      </div>
    </div>
  );

  return <Navigation />;
}

export default Title;
