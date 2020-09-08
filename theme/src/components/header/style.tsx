import styled from "styled-components";
import Theme from "../../styles/theme";
import Typed from 'react-typed';

export const StyledHeader = styled.header`
  display: flex;
  background-color: ${Theme.layout.primaryColor};
  background: ${Theme.components.header.background} no-repeat top right rgba(36, 41, 46, 0.80);
  background-size: cover;
  background-blend-mode: multiply;
  flex-direction: column;
  height: ${Theme.components.header.height};
  border-bottom: 2px #ededed solid;

  @media (max-width: ${Theme.breakpoints.sm}) {
    height: 80vh;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
  margin-top: -10px;
  @media (max-width: ${Theme.breakpoints.sm}) {
    margin-top: -25px;
    font-size: .75em;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  display: block;
  color: #fff;
  text-shadow: 0 5px 18px rgba(0, 0, 0, .07);
  font-size: 3rem;
  text-transform: uppercase;
  font-style: italic;
`;

export const ColorTitle = styled.span`
  color: ${Theme.layout.primaryColor};
`;

export const SupportedBy = styled.h6`
  font-size: 10px;
  color: #fafafa;
  font-weight: 500;
  opacity: .85;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 2px;
  color: ${Theme.layout.primaryColor};
`;

export const Description = styled.h2`
  color: #fafafa;
  margin: 0;
  opacity: .85;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  &:hover {
    opacity: 1;
  }
  ::selection {
    background: ${Theme.layout.linkColor}; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: ${Theme.layout.linkColor}; /* Gecko Browsers */
  }
`;

export const StyledTopics = styled(Typed)`
  color: ${Theme.layout.linkColor};
  border-bottom: 2px ${Theme.layout.linkColor} solid;
`;

export const StyledCoverCredit = styled.a`
  align-self: flex-end;
  margin-top: 1rem;
  margin-right: 1rem;
  font-size: 10px;
  background-color: #ffffff;
  color: ${Theme.layout.primaryColor};
  font-weight: 500;
  opacity: .85;
  text-transform: uppercase;
  line-height: 1;
  padding-left: 2px;
  letter-spacing: 2px;
  &:hover {
    opacity: 1;
  }
`;
