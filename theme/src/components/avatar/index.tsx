import React, {CSSProperties, FunctionComponent} from "react";
import styled from "styled-components";
import {graphql, useStaticQuery} from "gatsby";
// import Img from "gatsby-image";

interface AvatarProps {
  alt: string;
  style?: CSSProperties;
}

const StyledAvatar = styled.img<AvatarProps>`
  border-radius: 0%;
  height: 55px;
`;

/**
 * Placeholder component which shows your avatar.
 */
const Avatar: FunctionComponent<AvatarProps> = ({alt, style}) => {
  const logo = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: {eq: "themeAssets"}, name: {eq: "f-sharp-light"}) {
        extension
        publicURL
      }
    }
  `);

  return <StyledAvatar src={logo.file.publicURL} alt={alt} style={style} />;
};

export default Avatar;
