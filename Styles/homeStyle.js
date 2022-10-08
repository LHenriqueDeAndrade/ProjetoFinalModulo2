import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  *{
   margin:0;
   padding:0;
   box-sizing:border-box;
   ::-webkit-scrollbar { 
   width: 0.6vw;
  }
  ::-webkit-scrollbar-thumb{
    background: #8e0dff;
   }
   ::-webkit-scrollbar-track {
    background: #090909;
  }
}
`;

export const miniMenu = styled.nav`
  display: none;
  position: relative;
  top: 6vw;
  ul {
    display: flex;
    width: 100vw;
    position: absolute;
    left: 49.4vw;
    list-style: none;
    justify-content: space-evenly;
    align-items: center;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    height: 30vh;
    ul {
      display: inline-block;
      left: 0vw;
      width: 92vw;
    }
    li {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Modal = styled.button`
  display: none;
  font-size: 0.1em;
  @media only screen and (max-width: 600px) {
    display: flex;
    background-color: transparent;
    color: black;
    border: none;
    font-size: 3.5em;
    position: relative;
    left: 4vw;
  }
`;

export const divHome = styled.div`
  background-color: #1c033e;
  width: 100%;
  background-repeat: no-repeat;
  background-color: black;
  @media only screen and (max-width: 600px) {
    background-color: #55d3fd;
  }
`;

export const Nav = styled.nav`
  display: flex;
  font-family: "Brush Script MT", cursive;
  height: 15vh;
  justify-content: space-between;
  background-color: black;
  box-shadow: rgba(240, 238, 238, 0.762) 0px -30px 36px -28px inset;
  img {
    display: flex;
    height: 11vh;
    &:hover {
      cursor: pointer;
    }
    @media only screen and (max-width: 600px) {
      height: 8em;
    }
  }
  ul {
    width: 40vw;
    height: 13vh;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  @media only screen and (max-width: 600px) {
    display: none;
    ul {
      width: 100vw;
    }
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 2.4em;
  background-image: linear-gradient(
    -225deg,
    brown 0%,
    yellow 29%,
    brown 67%,
    yellow 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 4s linear infinite;
  display: flex;
  justify-content: center;
  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.5em;
    margin-left: 7vw;
    letter-spacing: 2.88vw;
    text-align: center;
  }
`;

export const Linker = styled(Link)`
  color: #ffffffff;
  text-decoration: none;
  font-size: 2em;
  font-weight: bolder;
  transition: 0.8s ease-in-out;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    transition: box-shadow 0.9s;
    box-shadow: inset 150px 0px #ffffff5f;
  }
`;

// <-------------------------------------------------------Profile------------------------------------------------------->

export const Profile = styled.div`
  width: 100%;
  height: 35em;
  position: relative;
`;
export const aboutMe = styled.section`
  display: flex;
  figure {
    img {
      position: absolute;
      left: -40vw;
      width: 39vw;
      height: 70vh;
      -webkit-animation: slide 0.5s forwards;
      -webkit-animation-delay: 2s;
      animation: slide 0.8s ease-in forwards;
      animation-delay: 0.7s;
      @-webkit-keyframes slide {
        100% {
          left: 0;
        }
      }

      @keyframes slide {
        100% {
          left: 0;
        }
      }
    }
    @media only screen and (max-width: 600px) {
      margin-left: 2vw;
      img {
        left: -90vw;
        width: 90vw;
        height: 40vh;
      }
    }
  }
`;

export const Profession = styled.h2`
  font-size: 7em;
  letter-spacing: 5px;
  font-family: "Koulen", cursive;
  position: absolute;
  left: 31vw;
  top: 0;
  color: #0004e3;
  position: absolute;
  @media only screen and (max-width: 600px) {
    font-size: 2em;
    letter-spacing: 3px;
    left: 2vw;
    top: 51vh;
  }
`;

export const bottomPage = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  background-color: black;
  position: absolute;
  bottom: 0;
  p {
    color: #4cc9f0;
    display: flex;
    align-items: center;
    letter-spacing: 2px;
    span {
      font-family: "Brush Script MT", cursive;
      margin-left: 1vw;
    }
  }
  @media only screen and (max-width: 600px) {
    height: 10vh;
    flex-direction: row;
    align-items: center;
    p {
      font-size: 0.8em;
    }
  }
`;

export const socialDiv = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const socialLinks = styled.img`
  display: flex;
  width: 2vw;
  border-radius: 20px;
  transition: 0.4s ease-in-out;
  background-color: white;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px 5px white;
    transform: scale(1.2);
  }
  @media only screen and (max-width: 600px) {
    width: 10vw;
  }
`;
