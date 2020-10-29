import styled from "styled-components";
import Theme from "../../styles/theme";
import Typed from 'react-typed';

export const StyledHeader = styled.header`
  display: flex;
  background-color: ${Theme.layout.primaryColor};
  background: ${Theme.components.header.background} no-repeat bottom rgba(0, 0, 0, 0.30);
  background-size: cover;
  background-blend-mode: multiply;
  flex-direction: column;
  height: ${Theme.components.header.height};
  border-bottom: 2px #ededed solid;
  color: #fff;
  @media (max-width: ${Theme.breakpoints.sm}) {
    height: 50vh;
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
  text-shadow: 0 5px 18px rgba(0, 0, 0, .07);
  font-size: 3rem;
  text-transform: uppercase;
  font-style: italic;
`;

export const ColorTitle = styled.span`
  color: ${Theme.layout.primaryColor};
`;

export const SupportedBy = styled.h6`
  font-size: 14px;
  letter-spacing: 0.05rem;
  color: #d8d8d8;
  font-weight: 500;
  opacity: .85;
  text-transform: uppercase;
  line-height: 1;
  font-style: italic;
`;

export const Description = styled.h2`
  color: #d8d8d8;
  margin: 0;
  font-size: 0.95rem;
  letter-spacing: 0.05rem;
  font-weight: 500;
  text-transform: uppercase;
  * {
    opacity: .85;
  }
  &:hover {
    * {
      opacity: 1;
    }
  }
  ::selection {
    background: ${Theme.layout.linkColor}; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: ${Theme.layout.linkColor}; /* Gecko Browsers */
  }
`;

export const StyledTopics = styled(Typed)`
  color: #ff0000;
  border-bottom: 2px #d8d8d8 solid;
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

export const DownArrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  text-transform: uppercase;
  color: #d8d8d8;
  span {
    font-size: 1rem;
    color: ${Theme.layout.primaryColor};
  }
`;
