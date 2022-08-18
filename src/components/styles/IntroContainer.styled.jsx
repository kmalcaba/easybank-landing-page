import styled from "styled-components";

export const StyledIntroContainer = styled.div`
  padding: 0;
  height: 730px;
  margin: 0;
  width: 100%;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 670px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 460px minmax(100px, 1fr) 740px;
  justify-items: end;
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 35px;
    height: 100%;
    max-height: 100%;
  }
`;

export const Intro = styled.div`
  max-width: 460px;
  padding: 170px 0;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desktop_lg}) {
    padding-left: 80px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-self: center;
    padding-left: 0;
    padding-bottom: 40px;
    padding-top: 350px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 300px;
  }
`;

export const BgContainer = styled.div`
  background-image: url(./images/bg-intro-desktop.svg);
  grid-column: 4 / 5;
  width: 1271px;
  height: 1034px;
  position: absolute;
  right: 0;
  transform: translateX(20%);
  z-index: -1;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desktop_lg}) {
    left: -20%;
    width: 600px;
    background-size: cover;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-image: url(./images/bg-intro-mobile.svg);
    min-width: 375px;
    width: 100%;
    height: 423px;
    top: -20%;
    left: -20%;
    right: 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: -15%;
  }
`;

export const Image = styled.img`
  transform: translateX(20%) translateY(-10%);
  grid-column: 4 / 5;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    transform: translateX(-10%) translateY(0%);
    align-self: center;
    position: absolute;
    width: 90%;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    transform: translateX(0%) translateY(-50%);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    transform: translateX(0%) translateY(-30%);
  }
`;
