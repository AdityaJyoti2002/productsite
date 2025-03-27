import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  background: linear-gradient(135deg, #0a0a0a, #1a1a2e);
  color: white;
  min-height: 100vh;
  text-align: center;
  overflow: hidden;
`;

const rotate = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

const HeroSection = styled.div`
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Headline = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 0px 0px 10px rgba(0, 255, 255, 0.5);
`;

const Product3D = styled.div`
  width: 300px;
  height: 200px;
  background: linear-gradient(145deg, #2a2a72, #009ffd);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0px 0px 20px rgba(0, 255, 255, 0.5);
  animation: ${rotate} 5s linear infinite;
`;

const Button = styled.button`
  margin-top: 20px;
  background: #009ffd;
  color: white;
  padding: 12px 24px;
  font-size: 1.2rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0px 0px 15px rgba(0, 255, 255, 0.5);
  &:hover {
    background: #005f99;
  }
`;

const DescriptionSection = styled.div`
  margin-top: 50px;
  padding: 50px 20px;
  background: #121212;
`;

const Features = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const FeatureCard = styled.div`
  background: #1f1f3a;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 255, 255, 0.3);
  width: 200px;
  font-weight: bold;
  color: #00d4ff;
  text-align: center;
`;

const AboutSection = styled.div`
  margin-top: 50px;
  padding: 50px 20px;
  background: linear-gradient(135deg, #1a1a2e, #0a0a0a);
  text-align: center;
`;

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(10, 10, 20, 0.9);
  display: flex;
  justify-content: center;
  padding: 15px 0;
  z-index: 1000;
`;

const NavLink = styled.a`
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-size: 1rem;
  transition: 0.3s;
  &:hover {
    color: #00d4ff;
  }
`;

const ProductLandingPage = () => {
  return (
    <Container>
      <NavBar>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#product">Product Details</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#preorder">Pre-Order</NavLink>
      </NavBar>
      <HeroSection id="home">
        <Headline>Revolutionize Your Charging Experience</Headline>
        <Product3D>Power Card</Product3D>
        <Button>Pre-Order Now</Button>
      </HeroSection>
      <DescriptionSection id="product">
        <h2>Key Features</h2>
        <Features>
          <FeatureCard>Ultra-Thin Design</FeatureCard>
          <FeatureCard>Fast Charging</FeatureCard>
          <FeatureCard>USB-C Compatibility</FeatureCard>
          <FeatureCard>Wireless Charging Support</FeatureCard>
        </Features>
      </DescriptionSection>
      <AboutSection id="about">
        <h2>About Us</h2>
        <p>We innovate portable charging solutions to make your life easier and more efficient.</p>
      </AboutSection>
    </Container>
  );
};

export default ProductLandingPage;
