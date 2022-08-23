import styled from "styled-components";
import { FlexContainer } from "./FlexContainer.styled";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.text_primary};
  color: ${({ theme }) => theme.colors.white};
`;

export const Socials = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex: 1;
  gap: 14px;
  margin: 3em 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 2em 0;
    align-self: center;
    text-align: center;
  }
`;

export const LogoLink = styled.a`
  margin-top: 3em;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-self: center;
    text-align: center;
  }
`;

export const SocialsContainer = styled(FlexContainer)`
  justify-content: space-around;
  height: 100%;
  min-height: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

export const FooterContainer = styled(FlexContainer)`
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
  }
`;

export const CtaContainer = styled(FlexContainer)`
  align-items: flex-end;
  gap: 0.75em;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-items: center;
    margin: 1em 0 2em 0;
  }
`;

export const CopyParagraph = styled.p`
  font-size: 0.9rem;
`;

export const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  flex: 1;
  margin: 0 150px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    align-items: center;
    margin: 0;
    justify-content: center;
    text-align: center;
    margin-bottom: 1em;
  }
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.9rem;
  margin: 0.5em 3em 0.5em 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0.5em 0;
  }
`;
