import { useState } from "react";

import {
  StyledHeader,
  NavGroup,
  NavButton,
  HeaderContainer,
  MobileNav,
  CtaButton,
  MobileNavContainer,
} from "./styles/Header.styled";
import { ReactComponent as IconHamburger } from "../assets/icon-hamburger.svg";
import { ReactComponent as IconClose } from "../assets/icon-close.svg";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleHandler = () => {
    setOpen((previousState) => !previousState);

    console.log(isOpen);
  };

  return (
    <StyledHeader>
      <HeaderContainer>
        <a href="/">
          <img src="./images/logo.svg" alt="" />
        </a>
        <NavGroup>
          <NavButton>Home</NavButton>
          <NavButton>About</NavButton>
          <NavButton>Contact</NavButton>
          <NavButton>Blog</NavButton>
          <NavButton>Careers</NavButton>
        </NavGroup>
        <CtaButton>Request Invite</CtaButton>
        <MobileNav>
          {!isOpen ? (
            <IconHamburger onClick={toggleHandler} />
          ) : (
            <IconClose onClick={toggleHandler} />
          )}

          {isOpen && (
            <MobileNavContainer>
              <ul>
                <li onClick={toggleHandler}>
                  <a href="#">Home</a>
                </li>
                <li onClick={toggleHandler}>
                  <a href="#">About</a>
                </li>
                <li onClick={toggleHandler}>
                  <a href="#">Contact</a>
                </li>
                <li onClick={toggleHandler}>
                  <a href="#">Blog</a>
                </li>
                <li onClick={toggleHandler}>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </MobileNavContainer>
          )}
        </MobileNav>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
