import React, {FunctionComponent} from "react";
import styled from "styled-components";
import Bio from "@nehalist/gatsby-theme-nehalem/src/components/bio";
import Theme from "@nehalist/gatsby-theme-nehalem/src/styles/theme";
import Carbon from "react-carbon";
import AdStyle from "./style";

const StickySidebarContent = styled.div`
  position: sticky;
  top: 30px;
`;

const DownloadButton = styled.a`
  background-color: #fff;
  color: #000;
  font-weight: bold;
  box-shadow: 0 1px 1px #e6e6e6, 0 2px 4px #e6e6e6;
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 1.2em;
  text-align: center;
  border-radius: .3em;
  margin: 30px 0;
  transition: .5s all;

  &:hover {
    background-color: ${Theme.layout.primaryColor};
    color: #fff;
    transform: translate3d(0, -5px, 0);
    box-shadow: 0 1px 1px #ccc, 0 4px 4px #ccc;
  }
`;

const SidebarContent: FunctionComponent = () => {
  return (
    <StickySidebarContent>
      <AdStyle />
      <Carbon name={`carbon-home`} placement={`navlmenetlifycom`} serve={`CE7D453J`} />

      <Bio textAlign={`right`} avatarStyle={{float: `left`, marginRight: `1em`}}/>

      <DownloadButton
        href={`https://navlme.netlify.com/getting-started`}
        target={`_blank`}
        rel={`noopener`}
        aria-label={`how to contribute`}
      >
         How to Contribute ⚡️
      </DownloadButton>

    </StickySidebarContent>
  );
};

export default SidebarContent;
