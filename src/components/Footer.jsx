import { FlexContainer } from "./styles/FlexContainer.styled";
import { StyledFooter } from "./styles/Footer.styled";
import { MainContainer } from "./styles/MainContainer.styled";
import { Button } from "./styles/Button.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <MainContainer>
        <FlexContainer>
          <FlexContainer direction='column'>
            {/* logo and social icons, space-around */}
          </FlexContainer>
          <FlexContainer>{/* links, row wrap */}</FlexContainer>
          <FlexContainer direction='column'>
            <Button>Request Invite</Button>
            <p>&copy; Easybank. All Rights Reserved.</p>
            {/* cta button  and copyright, space-around */}
          </FlexContainer>
        </FlexContainer>
      </MainContainer>
    </StyledFooter>
  );
};

export default Footer;
