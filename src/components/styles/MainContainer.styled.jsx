import styled from "styled-components";

export const MainContainer = styled.div`
  width: 1520px;
  max-width: 100%;
  padding: 0 165px;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 100px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 35px;
  }
`;
