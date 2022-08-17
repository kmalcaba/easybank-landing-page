import { Heading, Paragraph } from "./styles/Main.styled";
import { StyledFeaturesContainer } from "./styles/FeaturesContainer.styled";
import { FlexContainer } from "./styles/FlexContainer.styled";
import content from "../content";
import FeatureCard from "./FeatureCard";
import { MainContainer } from "./styles/MainContainer.styled";

const FeaturesContainer = () => {
  return (
    <StyledFeaturesContainer>
      <MainContainer>
        <Heading>Why choose Easybank?</Heading>
        <Paragraph>
          We leverage open banking to turn your bank account into your financial
          hub.
          <br />
          Control your finances like never before.
        </Paragraph>
        <FlexContainer>
          {content.map((item) => (
            <FeatureCard key={item.id} item={item} />
          ))}
        </FlexContainer>
      </MainContainer>
    </StyledFeaturesContainer>
  );
};

export default FeaturesContainer;
