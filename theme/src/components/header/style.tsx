import styled from "styled-components";
import Theme from "../../styles/theme";
import Typed from 'react-typed';

export const StyledHeader = styled.header`
  display: flex;
  background: ${Theme.components.header.background};
  flex-direction: column;
  height: ${Theme.components.header.height};
  border-bottom: 2px #ededed solid;

  @media (max-width: ${Theme.breakpoints.sm}) {
    height: 80vh;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: ${Theme.breakpoints.sm}) {
    margin-top: -50px;
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
  font-family: 'Audiowide', cursive;
  font-size: 64px;
`;

export const SubTitle = styled.h6`
  font-size: 10px;
  color: #fafafa;
  font-weight: 500;
  opacity: .85;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 1px;
`;

export const Description = styled.h2`
  color: #fafafa;
  margin: 0;
  opacity: .85;
  &:hover {
    opacity: 1;
  }
`;

export const StyledTopics = styled(Typed)`
  color: #ffffff;
  border-bottom: 3px #ffffff solid;
`;
