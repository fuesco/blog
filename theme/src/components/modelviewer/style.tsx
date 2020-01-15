import styled from "styled-components";
export const StyledModelViewer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 40em) {
    display: none;
    visibility: hidden;
  }
`;
