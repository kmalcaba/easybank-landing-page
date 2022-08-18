import styled from "styled-components";

import { FlexContainer } from "./FlexContainer.styled";

export const StyledFeaturesContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.bg_secondary};
  padding: 105px 0 75px 0;
`;

export const FeatureCardContainer = styled(FlexContainer)`
  flex-wrap: wrap;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: center;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
