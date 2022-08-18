import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 3rem;
  margin: 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.25rem;
  }
`;

export const Heading = styled.h2`
  margin-top: 7px;
  font-size: 2rem;
  font-weight: 300;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  line-height: 1.5rem;
  margin: 30px 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
    font-size: 0.9rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`;
