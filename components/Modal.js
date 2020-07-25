/** @jsx jsx */
import { Fragment } from "react";
import { jsx, css } from "@emotion/core";
import { Prev, Next } from "./Controls";

const stylesImg = css`
  height: 250px;
  padding-bottom: 20px;
  @media (min-width: 750px) {
    height: 350px;
  }
  @media (min-width: 1200px) {
    height: 400px;
  }
`;

const subtitle = css`
  color: #f30e5c;
  position: relative;
  font-variant: all-small-caps;
  font-weight: 100;
  z-index: 0;
  width: 100%;
  padding-bottom: 0;
  border-bottom: 1px solid #f30e5c;
`;

const Modal = ({
  id,
  src,
  name,
  tagline,
  ibu,
  abv,
  description,
  brewersTips
}) => (
  <Fragment>
    <div className="col-sm-10 col-md-4" key={id}>
      <img className="mx-auto d-block" css={stylesImg} src={src} alt={name} />
    </div>
    <div className="col-sm-10 col-md-6 col-lg-4">
      <h1
        className="mb-0 mt-2 text-center"
        style={{ fontFamily: "Playfair Display" }}
      >
        {name}
      </h1>
      <h2 className="mb-4 text-center ">
        <small css={subtitle}>{tagline}</small>
      </h2>
      <div className="d-flex justify-content-around align-items-center my-3">
        <span>
          <strong>IBU</strong>: {ibu}
        </span>
        <span>
          <strong>ABV</strong>: {abv}
        </span>
      </div>
      <p className="text-justify">{description}</p>
      <p className="text-justify">
        <span>
          <strong>Brewers Tips</strong>: {brewersTips}
        </span>
      </p>
    </div>
  </Fragment>
);

export default Modal;
