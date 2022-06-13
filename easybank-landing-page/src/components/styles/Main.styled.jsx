import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  margin-top: 180px;
  font-weight: 300;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.text_primary};
`;

export const Heading = styled.h2`
  margin-top: 7px;
  font-size: 2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text_primary};
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.text_secondary};
  line-height: 1.5rem;
  margin: 30px 0;
`;
