import styled from "styled-components";
import { Paragraph } from "./Main.styled";

export const StyledBlogCard = styled.div`
  max-width: 255px;
  margin: 28px 30px 0 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

export const Image = styled.img`
  object-fit: cover; /* incompatible with IE */
  width: 100%;
  height: 200px;
`;

export const Blog = styled.div`
  padding: 30px 25px 25px 25px;
`;

export const Author = styled.p`
  font-size: 0.6rem;
  margin: 0;
  padding: 0;
`;

export const Title = styled.h4`
  font-weight: 300;
  margin: 12px 0;
  font-size: 0.9rem;
  letter-spacing: -0.5px;

  & > a {
    text-decoration: none;
    color: inherit;
    transition: ease-in-out 0.2s;
  }

  & > a:hover {
    color: ${({ theme }) => theme.colors.accent_primary};
  }
`;

export const Description = styled(Paragraph)`
  font-size: 0.72rem;
  line-height: 1rem;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
