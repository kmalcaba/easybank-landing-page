import styled from "styled-components";
import { MainContainer } from "./MainContainer.styled";

export const StyledIntroContainer = styled.div`
  padding: 0;
  height: 730px;
  margin: 0;
  width: 100%;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 460px minmax(100px, 1fr) 740px;
  justify-items: end;
`;

export const Intro = styled.div`
  max-width: 460px;
  padding: 170px 0;
`;

export const BgContainer = styled.div`
  background-image: url(./images/bg-intro-desktop.svg);
  grid-column: 4 / 5;
`;

export const Image = styled.img`
  transform: translateX(20%) translateY(-10%);
  grid-column: 4 / 5;
`;
