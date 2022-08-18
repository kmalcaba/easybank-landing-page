import styled from "styled-components";
import { FlexContainer } from "./FlexContainer.styled";

export const StyledBlogContainer = styled.div`
  padding: 90px 0 80px 0;
  background-color: ${({ theme }) => theme.colors.bg_primary};
`;

export const BlogCardContainer = styled(FlexContainer)`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
