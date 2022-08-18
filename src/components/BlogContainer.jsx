import {
  StyledBlogContainer,
  BlogCardContainer,
} from "./styles/BlogContainer.styled";
import { Heading } from "./styles/Main.styled";
import { MainContainer } from "./styles/MainContainer.styled";
import blogContent from "../blogcontent";
import BlogCard from "./BlogCard";

const BlogContainer = () => {
  return (
    <StyledBlogContainer>
      <MainContainer>
        <Heading>Latest Articles</Heading>
        <BlogCardContainer>
          {blogContent.map((item) => (
            <BlogCard key={item.id} item={item} />
          ))}
        </BlogCardContainer>
      </MainContainer>
    </StyledBlogContainer>
  );
};

export default BlogContainer;
