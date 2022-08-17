import { StyledMain } from "./styles/Main.styled";
import IntroContainer from "./IntroContainer";
import FeaturesContainer from "./FeaturesContainer";
import BlogContainer from "./BlogContainer";

const Main = () => {
  return (
    <StyledMain>
      <IntroContainer />
      <FeaturesContainer />
      <BlogContainer />
    </StyledMain>
  );
};

export default Main;
