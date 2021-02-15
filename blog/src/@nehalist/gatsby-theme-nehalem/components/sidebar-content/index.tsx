import React, {FunctionComponent} from "react";
import styled from "styled-components";
import Bio from "@nehalist/gatsby-theme-nehalem/src/components/bio";
// import Theme from "@nehalist/gatsby-theme-nehalem/src/styles/theme";
// import Carbon from "react-carbon";
// import AdStyle from "./style";

const StickySidebarContent = styled.div`
  position: sticky;
  top: 30px;
`;

const ContributeButton = styled.a`
  background-color: #fff;
  color: #222222;
  font-weight: 700;
  box-shadow: 0 1px 1px #e6e6e6, 0 2px 4px #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px;
  font-size: 1.2em;
  text-align: center;
  border-radius: .3em;
  margin: 30px 0;
  transition: .5s all;

  &:hover {
    transform: translate3d(0, -5px, 0);
    box-shadow: 0 1px 1px #ccc, 0 4px 4px #ccc;
    color: #ff0000;
  }
`;

const PatreonIcon = styled.img`
  width: 18px;
  height: auto;
`;
/*
const CarbonAd: FunctionComponent = () => {
  return (
    <AdStyle />
    <Carbon name={`carbon-home`} placement={`navlmenetlifycom`} serve={``} />
  );
};
*/
const SidebarContent: FunctionComponent = () => {
  return (
    <StickySidebarContent>
      <Bio textAlign={`right`} avatarStyle={{float: `left`, marginRight: `1em`}}/>

      <ContributeButton
        href={`https://www.patreon.com/fues`}
        target={`_blank`}
        rel={`noopener`}
        aria-label={`contributing`}
      >
        <PatreonIcon src="https://cdn.fues.us/icons/patreon_mark_black.svg" alt="patreon symbol" />&nbsp;BECOME A PATRON
      </ContributeButton>

    </StickySidebarContent>
  );
};

export default SidebarContent;

//https://github.com/jetlaglabs/assets/blob/master/icons/patreon_mark_black.svg?raw=true