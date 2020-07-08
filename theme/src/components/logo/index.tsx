import React, {FunctionComponent} from "react";
import styled from "styled-components";
import {graphql, Link, useStaticQuery} from "gatsby";
import Theme from "../../styles/theme";
import Img from "gatsby-image";


interface LogoProps {
  title: string;
}

const LogoImage = styled(Img)`
  width: 55px;
  margin-right: 45px;
  @media (max-width: ${Theme.breakpoints.sm}) {
    margin-right: 10px;
  }
`;

const HomeLink = styled(Link)`
  align-self: center;
  height: 55px;
  padding-top: 0rem;
`;

const Logo: FunctionComponent<LogoProps> = ({title}) => {
  const logo = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: {eq: "themeAssets"}, name: {eq: "fues-512x512"}) {
        childImageSharp {
          fixed(width: 55, height: 55) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  // fixed={logo.file.childImageSharp.fixed}
  return (
    <HomeLink to={`/`}>
      <LogoImage fixed={logo.file.childImageSharp.fixed} alt={title}/>
    </HomeLink>
  );
}
;

export default Logo;
