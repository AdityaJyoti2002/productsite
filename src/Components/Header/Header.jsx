import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./Header.css";

// Styled Components
const SectionContainer = styled(motion.div)`
  padding: 5rem 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(115deg, #e8eced 50%, #43bbcd 50%);
    z-index: -1;
  }
`;

const HeaderContainer = styled(motion.div)`
  display: grid;
  gap: 2rem;
  position: relative;
    top: 55px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`;

const HeaderImage = styled(motion.div)`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: flex;
  justify-content: center;

  img {
    max-width: 550px;
    margin-inline: auto;
    height: 600px;
    /* box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3); */
    /* border-radius: 10px; */
  }
`;

const HeaderContent = styled(motion.div)`
  text-align: center;

  h1 {
    margin-bottom: 1.5rem;
    font-size: 3.5rem;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
    color: #000000;
    line-height: 3.5rem;
  }

  p {
    font-weight: 500;
    color: #4a4a4d;
    font-size: 1.2rem;
    max-width: 500px;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 768px) {
    /* text-align: left; */
  }
`;

const BackgroundText = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 366px;
  transform: translateY(-50%) rotate(-90deg);
  font-size: 6rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  z-index: -1;
  user-select: none;
  /* display: block; */

  @media (max-width: 768px) {
    display: none;
  }
`;

const PreOrderButton = styled(motion.button)`
  max-width: fit-content;
  padding: 0.75rem 1.5rem;
  outline: none;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  white-space: nowrap;
  color: white;
  background-color: #ff6600;
  border-radius: 2rem;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: #cc5200;
    transform: scale(1.05);
  }
`;

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.5, duration: 2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.5 } },
};

const Header = () => {
  return (
    <SectionContainer
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <HeaderContainer>
        
        <HeaderContent variants={itemVariants}>
          <h1>
            Power Card
          </h1>
          <p>By Lastmin</p>
          <PreOrderButton variants={buttonVariants} whileHover="hover">
            Pre-Order Now
          </PreOrderButton>
        </HeaderContent>
        <HeaderImage variants={itemVariants}>
        <BackgroundText>PRODUCT</BackgroundText>
          <motion.img
            src="/assets/01-removebg-preview.png"
            alt="header"
            variants={itemVariants}
          />
        </HeaderImage>
      </HeaderContainer>
    </SectionContainer>
  );
};

export default Header;
