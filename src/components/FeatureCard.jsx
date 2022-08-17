import {
  StyledFeatureCard,
  Heading,
  Description,
} from "./styles/FeatureCard.styled";

const FeatureCard = ({ item: { title, body, image } }) => {
  return (
    <StyledFeatureCard>
      <img src={`./images/${image}`} alt='' />
      <Heading>{title}</Heading>
      <Description>{body}</Description>
    </StyledFeatureCard>
  );
};

export default FeatureCard;
