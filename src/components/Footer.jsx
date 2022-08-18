import {
  StyledFooter,
  Socials,
  SocialsContainer,
  LogoLink,
  FooterContainer,
  CtaContainer,
  CopyParagraph,
  FooterLink,
  LinksContainer,
} from "./styles/Footer.styled";
import { MainContainer } from "./styles/MainContainer.styled";
import { Button } from "./styles/Button.styled";

import { ReactComponent as Logo } from "../assets/logo.svg";
import { images } from "../constants";

const FOOTER_LINKS = [
  "About Us",
  "Careers",
  "Contact",
  "Support",
  "Blog",
  "Privacy Policy",
];

const Footer = () => {
  return (
    <StyledFooter>
      <MainContainer>
        <FooterContainer>
          <SocialsContainer>
            <LogoLink href="/">
              <Logo />
            </LogoLink>
            <Socials>
              <img src={images.iconFacebook} alt="Facebook" />
              <img src={images.iconYoutube} alt="Youtube" />
              <img src={images.iconTwitter} alt="Twitter" />
              <img src={images.iconPinterest} alt="Pinterest" />
              <img src={images.iconInstagram} alt="Instagram" />
            </Socials>
          </SocialsContainer>
          <LinksContainer>
            {FOOTER_LINKS.map((link) => (
              <FooterLink key={link} href="/">
                {link}
              </FooterLink>
            ))}
          </LinksContainer>
          <CtaContainer>
            <Button>Request Invite</Button>
            <CopyParagraph>&copy; Easybank. All Rights Reserved.</CopyParagraph>
            {/* cta button  and copyright, space-around */}
          </CtaContainer>
        </FooterContainer>
      </MainContainer>
    </StyledFooter>
  );
};

export default Footer;
