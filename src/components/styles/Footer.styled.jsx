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
`;

export const LogoLink = styled.a`
  margin-top: 3em;
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
`;

export const CtaContainer = styled(FlexContainer)`
  align-items: flex-end;
  gap: 0.75em;
  flex-direction: column;
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
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.9rem;
  margin: 0.5em 3em 0.5em 0;
`;
