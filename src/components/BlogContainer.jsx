import { StyledBlogContainer } from "./styles/BlogContainer.styled";
import { FlexContainer } from "./styles/FlexContainer.styled";
import { Heading } from "./styles/Main.styled";
import { MainContainer } from "./styles/MainContainer.styled";
import blogContent from "../blogcontent";
import BlogCard from "./BlogCard";

const BlogContainer = () => {
  return (
    <StyledBlogContainer>
      <MainContainer>
        <Heading>Latest Articles</Heading>
        <FlexContainer>
          {blogContent.map((item) => (
            <BlogCard key={item.id} item={item} />
          ))}
        </FlexContainer>
      </MainContainer>
    </StyledBlogContainer>
  );
};

export default BlogContainer;
