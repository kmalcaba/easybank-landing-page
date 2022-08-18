import { Heading, Paragraph } from "./styles/Main.styled";
import {
  StyledFeaturesContainer,
  FeatureCardContainer,
} from "./styles/FeaturesContainer.styled";
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
        <FeatureCardContainer>
          {content.map((item) => (
            <FeatureCard key={item.id} item={item} />
          ))}
        </FeatureCardContainer>
      </MainContainer>
    </StyledFeaturesContainer>
  );
};

export default FeaturesContainer;
