import {
  Author,
  Blog,
  Image,
  StyledBlogCard,
  Title,
} from "./styles/BlogCard.styled";
import { Description } from "./styles/BlogCard.styled";

const BlogCard = ({ item: { title, author, body, image } }) => {
  return (
    <StyledBlogCard>
      <Image src={`./images/${image}`} alt='' />
      <Blog>
        <Author>By {author}</Author>
        <Title>
          <a href='/'>{title}</a>
        </Title>
        <Description>{body}</Description>
      </Blog>
    </StyledBlogCard>
  );
};

export default BlogCard;
