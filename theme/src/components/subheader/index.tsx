import React, {FunctionComponent} from "react";
import styled from "styled-components";
import {Container} from "../common";

interface SubheaderProps {
  title: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
}

const StyledSubheader = styled.div<Pick<SubheaderProps, 'backgroundColor' | 'textColor'>>`
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#000'};
  background: ${props => props.backgroundColor ? `linear-gradient(260deg, ${props.backgroundColor} 30%, #20232A 100%)` : 'linear-gradient(260deg, rgba(43,182,112,1) 30%, #20232A 100%)'};
  color: ${props => props.textColor ? props.textColor : '#fff'};
  display: flex;
  align-items: center;
  height: 144px;
  margin-bottom: 30px;
`;

const SubheaderTitle = styled.h1`
  font-size: 1.55rem;
  font-weight: bold;
  color: #fff;
  margin: 0;
  line-height: 1em;
`;

const SubheaderSubtitle = styled.small`
  font-weight: normal;
  display: block;
  opacity: .9;
`;

const Subheader: FunctionComponent<SubheaderProps> = ({title, subtitle, backgroundColor, textColor}) => (
  <StyledSubheader backgroundColor={backgroundColor} textColor={textColor}>
    <Container>
      <SubheaderTitle>
        {title}
        <SubheaderSubtitle>{subtitle}</SubheaderSubtitle>
      </SubheaderTitle>
    </Container>
  </StyledSubheader>
);

export default Subheader;
