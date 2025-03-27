import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Slide animation
const fade = keyframes`
  from { opacity: 0.4; }
  to { opacity: 1; }
`;

// Styled components
const Container = styled.div`
  font-family: "Poppins", sans-serif;
  background: #0a0a0a;
  color: #fff;
  text-align: center;
  overflow: hidden;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 15px;
  background: rgba(0, 0, 0, 0.9);
  position: sticky;
  top: 0;
  z-index: 1000;
  a {
    color: #0ff;
    font-size: 22px;
    text-transform: uppercase;
    font-weight: bold;
    transition: 0.3s;
    &:hover {
      color: #f0f;
    }
  }
`;

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const SlideContainer = styled.div`
  display: flex;
  transition: transform 1s ease-in-out;
`;

const Slide = styled.div`
  min-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ bg }) => bg};
  animation: ${fade} 1.5s ease-in-out;
  position: relative;
  text-align: center;
`;

const SlideText = styled.div`
  font-size: 80px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  text-shadow: 3px 3px 15px rgba(255, 255, 255, 0.5);
  margin-bottom: 20px;
`;

const SlideImage = styled.img`
  width: 500px;
  height: auto;
  transform: ${({ rotateX, rotateY }) =>
    `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`};
  transition: transform 0.2s ease-out;
`;

const Dots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

const Dot = styled.div`
  width: 14px;
  height: 14px;
  margin: 0 5px;
  background: ${({ active }) => (active ? "#0ff" : "#555")};
  border-radius: 50%;
  cursor: pointer;
`;

const ProductDescription = styled.div`
  padding: 60px;
  background: linear-gradient(to right, #000428, #004e92);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const DescriptionText = styled.div`
  width: 50%;
  font-size: 28px;
  line-height: 1.7;
  color: #fff;
`;

const PlaceholderImage = styled.div`
  width: 400px;
  height: 400px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
`;

const ContactSection = styled.div`
  padding: 50px;
  background: #111;
  text-align: center;
  font-size: 22px;
`;

const PreOrderButton = styled.button`
  margin-top: 20px;
  padding: 12px 25px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background: #0ff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #f0f;
  }
`;

export default function PowerCardLanding() {
  const [index, setIndex] = useState(0);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const slides = [
    { bg: "#222", text: "Power" },
    { bg: "#333", text: "Big 3D Image" },
    { bg: "#444", text: "Card" },
    { bg: "#555", text: "Innovation" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 2 - 1;
    const y = ((clientY - top) / height) * 2 - 1;
    setRotateX(y * -15);
    setRotateY(x * 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <Container>
      <Navbar>
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#preorder">Pre-Order</a>
        <a href="#about">About</a>
      </Navbar>

      <HeroSection>
        <SlideContainer style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((slide, i) => (
            <Slide key={i} bg={slide.bg}>
              <SlideText>{slide.text}</SlideText>
              <SlideImage
                src="src/assets/01-removebg-preview.png"
                alt="PowerCard"
                rotateX={rotateX}
                rotateY={rotateY}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              />
              <PreOrderButton>Pre-Order Now</PreOrderButton>
            </Slide>
          ))}
        </SlideContainer>
        <Dots>
          {slides.map((_, i) => (
            <Dot key={i} active={i === index} onClick={() => setIndex(i)} />
          ))}
        </Dots>
      </HeroSection>

      <ProductDescription>
        <DescriptionText>
          <h2>About PowerCard</h2>
          <p>Ultra-thin design, fast charging, USB-C & wireless charging support. Lightweight and travel-friendly.</p>
        </DescriptionText>
        <PlaceholderImage>Add Image Here</PlaceholderImage>
      </ProductDescription>

      <ContactSection>
        <h2>Contact Us</h2>
        <p>Email: example@gmail.com</p>
        <p>Phone: +91 XXXXX XXXXX</p>
      </ContactSection>
    </Container>
  );
}
