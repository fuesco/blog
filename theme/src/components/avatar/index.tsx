import React, {CSSProperties, FunctionComponent} from "react";
import styled from "styled-components";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";

interface AvatarProps {
  alt: string;
  style?: CSSProperties;
}

const StyledAvatar = styled(Img)<AvatarProps>`
  max-width: 70px;
  border-radius: 0%;
`;

/**
 * Placeholder component which shows your avatar.
 */
const Avatar: FunctionComponent<AvatarProps> = ({alt, style}) => {
  const logo = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: {eq: "themeAssets"}, name: {eq: "fues-dark-512x512"}) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <StyledAvatar fixed={logo.file.childImageSharp.fixed} alt={alt} style={style} />;
};

export default Avatar;
