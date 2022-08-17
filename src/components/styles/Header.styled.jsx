import styled from "styled-components";
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
`;

export const NavGroup = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;
