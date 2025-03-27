import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Reusable Components
const ColorCircle = ({ color, onHover }) => (
  <Circle color={color} onMouseEnter={onHover} />
);

const SocialIcons = ({ color }) => (
  <IconsContainer color={color}>
    <i className="fa fa-facebook" title="facebook"></i>
    <i className="fa fa-twitter" title="twitter"></i>
    <i className="fa fa-google" title="google"></i>
    <i className="fa fa-instagram" title="instagram"></i>
  </IconsContainer>
);

// Styled Components
const CardContainer = styled(motion.div)`
  width: 250px;
  height: 350px;
  margin: 20px;
  background-color: #e8eced;
  color: #333;
  position: relative;
  overflow: hidden;
  border-radius: 7px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #e8eced;
  }
`;

const NCircle = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  top: -30px;
  right: -30px;
  background-color: #43bbcd;
  transition: all 0.4s ease-in-out;
`;

const Image = styled(motion.img)`
  position: absolute;
  right: 25px;
  top: 80px;
  transition: all 0.5s ease-in-out;
`;

const Title = styled(motion.h2)`
  position: absolute;
  bottom: 80px;
  left: 55px;
  letter-spacing: 4px;
  transition: all 0.6s ease-in-out;
`;

const Colors = styled(motion.div)`
  width: 100%;
  position: absolute;
  bottom: 40px;
  display: flex;
  justify-content: space-evenly;
  transition: all 1s ease-in-out;
`;

const Circle = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const BuyButton = styled(motion.button)`
  position: absolute;
  bottom: 10px;
  left: 70px;
  background-color: #43bbcd;
  border: none;
  padding: 10px 30px;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  opacity: 0;
  transition: all 1.5s ease-in-out;
`;

const IconsContainer = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  color: ${(props) => props.color};
`;

const YoutubeLink = styled.a`
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: #f00;
  background-color: #fff;
  padding: 10px;
  font-weight: bold;
  border-radius: 20px;
  text-decoration: none;
  font-family: cursive;
  transition: 0.5s;
  border: 2px solid #333;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const Title1 = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #222;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #555;
  max-width: 600px;
  margin: 0 auto 40px;
  text-align: center;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  /* background: url("https://i.ibb.co/KsRZMZX/image.png") no-repeat center center/cover; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    background: none;
    height: auto;
    padding: 20px;
  }
`;

// Framer Motion Variants
const cardVariants = {
  hover: {
    scale: 1.05,
    rotate: 2,
    transition: { type: "spring", stiffness: 300 },
  },
};

// ProductCard Component
const ProductCard = ({ title, image }) => {
  const [circleColor, setCircleColor] = useState("#43bbcd");

  const handleColorHover = (color) => {
    setCircleColor(color);
  };

  return (
    <CardContainer
      variants={cardVariants}
      whileHover="hover"
      initial="initial"
      animate="animate"
    >
      <NCircle style={{ backgroundColor: circleColor }} />
      <Image
        src={image}
        alt="image"
        width="150px"
        height="150px"
        className="image"
        whileHover={{ scale: 1.1 }}
      />
      <Title>{title}</Title>
      <Colors className="colors">
        <span className="text" style={{ fontWeight: "bold" }}>
          Colors
        </span>
        <ColorCircle color="#22d029" onHover={() => handleColorHover("#22d029")} />
        <ColorCircle color="#ff9800" onHover={() => handleColorHover("#ff9800")} />
        <ColorCircle color="#03a9f4" onHover={() => handleColorHover("#03a9f4")} />
        <ColorCircle color="#ff0062" onHover={() => handleColorHover("#ff0062")} />
      </Colors>
      <BuyButton title="buy now" whileHover={{ opacity: 1 }}>
        Buy Now
      </BuyButton>
      <SocialIcons color={circleColor}>
        <i className="fa fa-facebook" title="facebook"></i>
        <i className="fa fa-twitter" title="twitter"></i>
        <i className="fa fa-google" title="google"></i>
        <i className="fa fa-instagram" title="instagram"></i>
      </SocialIcons>
    </CardContainer>
  );
};

// Main App Component
const ProductCardApp = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <MainContainer id="store">
      <Title1>New <b>Features</b></Title1>
      <Subtitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices pretium nisi quis interdum.
      </Subtitle>
      <CardsWrapper>
        <ProductCard
          title="Nike Shoes"
          image="https://i.ibb.co/KsRZMZX/image.png"
        />
        <ProductCard
          title="Adidas Sneakers"
          image="https://i.ibb.co/KsRZMZX/image.png"
        />
        <ProductCard
          title="Puma Running Shoes"
          image="https://i.ibb.co/KsRZMZX/image.png"
        />
      </CardsWrapper>
    </MainContainer>
  );
};

export default ProductCardApp;