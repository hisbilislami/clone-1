"use client";
import styled from "styled-components";

const JumbotronBackground = styled.div`
  background-image: url("/assets/images/background1.png");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center center;

  &::before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100%;
    box-shadow: 0px 0px 23vh 25vw rgba(34, 182, 175, 0.2);
    left: 10vw;
    top: 45vh;
    width: 1px;
    height: 1px;
    background-color: #e4e7efff;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100%;
    box-shadow: 0px 0px 30vh 40vw rgba(34, 182, 175, 0.1);
    right: 25vw;
    top: 40vh;
    width: 1px;
    height: 1px;
    background-color: #e4e7efff;
  }
`;

export default JumbotronBackground;
