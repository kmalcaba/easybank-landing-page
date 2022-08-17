import styled from "styled-components";

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 16px 34px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.88rem;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.accent_primary} 0%,
    ${({ theme }) => theme.colors.accent_secondary} 100%
  );
  color: ${({ theme }) => theme.colors.white};
  transition: ease-in-out 0.2s;

  &:hover,
  :active {
    opacity: 0.6;
  }
`;
