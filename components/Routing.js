import { withRouter } from "next/router";
import styled from "@emotion/styled";

const LinkWrapper = styled.div`
  min-height: 300px;
  width: auto;
  border-radius: 3px;
  box-shadow: 0px 1px 1px #212b35;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    box-shadow: 0px 2px 5px #212b35;
  }
`;

const Routing = ({ children, router, href }) => {
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return <LinkWrapper onClick={handleClick}>{children}</LinkWrapper>;
};

export default withRouter(Routing);
