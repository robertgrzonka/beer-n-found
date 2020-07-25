/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const footerStyles = css`
  width: 100vw;
  min-height: 300px;
  margin: 0 auto;
  padding: 150px 0px;
  background-color: #212b35;
  text-align: center;
  color: #f30e5c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 100;
`;

const linksStyles = css`
  list-style-type: none;
  display: grid;
  padding: 10px;
  color: rgba(230, 230, 230, 1);
`;

const footerHeader = css`
  color: #008080;
`;

const Section = ({ name, children }) => (
  <div className="col-12 col-md-4 col-lg-3">
    <h5 css={footerHeader}>{name}</h5>
    <ul css={linksStyles}>{children}</ul>
  </div>
);

export default function Footer() {
  return (
    <div css={footerStyles}>
      <div className="container my-5">
        <div className="row d-flex align-items-center justify-content-between">
          <Section name="Repositories">
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </Section>
          <div className="col-12 col-md-4 col-lg-3">
            <p>MIT © robertgrzonka</p>
          </div>
        </div>
      </div>
    </div>
  );
}
