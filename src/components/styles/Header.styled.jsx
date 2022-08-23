import styled from "styled-components";
import { Button } from "./Button.styled";
import { FlexContainer } from "./FlexContainer.styled";
import { MainContainer } from "./MainContainer.styled";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  z-index: 99;
`;

export const HeaderContainer = styled(MainContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 80px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 35px;
  }
`;

export const NavGroup = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavButton = styled.li`
  list-style: none;
  padding: 28px 0 29px 0;
  margin: 0 15px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text_secondary};
  border-bottom: 4px solid transparent;
  transition: ease-in-out 0.2s;
  font-size: 0.88rem;
  &:hover {
    color: ${({ theme }) => theme.colors.text_primary};
    border-bottom: 4px solid ${({ theme }) => theme.colors.accent_primary};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 0.8rem;
  }
`;

export const CtaButton = styled(Button)`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const MobileNav = styled(FlexContainer)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: relative;
  left: -12px;
  justify-content: center;
  align-self: center;
  margin: 1rem 0;

  & svg {
    cursor: pointer;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const MobileNavContainer = styled(FlexContainer)`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  padding: 10px;
  width: 88%;
  margin-top: 84px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  box-shadow: 0 20px 60px ${({ theme }) => theme.colors.black};

  ul {
    padding: 0;
    width: 100%;

    li {
      list-style-type: none;
      text-align: center;
      padding: 0.5rem 1rem;

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.text_primary};
      }
    }
  }
`;
