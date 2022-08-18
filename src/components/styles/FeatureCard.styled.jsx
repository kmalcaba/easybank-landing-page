import styled from "styled-components";
import { Paragraph } from "./Main.styled";

export const StyledFeatureCard = styled.div`
  max-width: 255px;
  margin-top: 45px;
  margin-right: 30px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-right: 0;
    max-width: 100%;
  }
`;

export const Heading = styled.h3`
  font-weight: 300;
  font-size: 1.25rem;
  margin-top: 45px;
  margin-bottom: 30px;
`;

export const Description = styled(Paragraph)`
  font-size: 0.88rem;
  line-height: 1.3rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
  }
`;
