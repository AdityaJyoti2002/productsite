import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Styled Components
const SectionContainer = styled(motion.div)`
  max-width: 1200px;
  margin: auto;
  padding: 5rem 1rem;
`;

const ProductSection = styled.section`
  /* overflow: hidden;
  background-image: radial-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 1));
  position: relative; */
  background: #43bbcd;
`;

const BackgroundAnimation = styled(motion.div)`
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1));
  z-index: 0; */
`;

const ProductGrid = styled.div`
  margin-bottom: 4rem;
  display: grid;
  gap: 4rem;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`;

const ProductImage = styled(motion.div)`
  img {
    max-width: 550px;
    height: 600px;
    margin-inline: auto;
    transform: rotate(-15deg);
  }
`;

const ProductContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  flex-direction: column;
`;

const ProductCard = styled(motion.div)`
  text-align: center;

  h4 {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    color: white;
  }

  p {
    margin-bottom: 1rem;
    font-weight: 500;
    color: #727274;
  }

  a {
    font-weight: 500;
    color: #727274;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      color: white;
    }
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ProductColors = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const ColorCircle = styled.div`
  width: 30px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #727274;
  border-radius: 100%;
  cursor: pointer;

  &:nth-child(1) {
    background-color: #3a3a3a;
  }

  &:nth-child(2) {
    background-color: #efefef;
  }

  &:nth-child(3) {
    background-color: #da372b;
  }

  &:nth-child(4) {
    background-color: #2d6890;
  }

  &:nth-child(5) {
    background-color: #754e27;
  }
`;

const ProductButton = styled.div`
  text-align: center;
`;

const Button = styled(motion.button)`
  max-width: fit-content;
  padding: 0.75rem 3.5rem;
  outline: none;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  white-space: nowrap;
  color: #000000;
  background-color: #a76b6b;
  border-radius: 2rem;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: #f3f4f6;
  }
`;

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const backgroundVariants = {
  animate: {
    y: ["0%", "5%", "0%"],
    transition: {
      duration: 10,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Product = () => {
  return (
    <ProductSection id="product">
      <BackgroundAnimation
        variants={backgroundVariants}
        animate="animate"
      />
      <SectionContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ProductGrid>
          <ProductImage variants={imageVariants}>
            <motion.img
              src="src/assets/01-removebg-preview.png"
              alt="product"
            />
          </ProductImage>
          <ProductContent>
            <ProductCard variants={itemVariants}>
              <h4>About</h4>
              <p>At Lastminutes.in, we believe that staying connected should never be a hassle. In a world where smartphones are essential, battery anxiety is real. That’s why we’ve designed the PowerCard—a sleek, ultra-portable mini power bank that fits in your wallet, just like a credit card.

Our mission is simple: to eliminate the inconvenience of bulky power banks and provide a modern, stylish, and functional charging solution for professionals, travelers, and businesses.

More than just a power bank, the PowerCard doubles as a business card, allowing you to network and charge on the go. With eco-friendly materials, wireless & fast charging, and customization options, it’s not just a gadget—it’s a statement.

Whether you're a corporate brand, entrepreneur, or an everyday smartphone user, we help you stay powered while making an impression</p>
              {/* <p>Power up. Connect. Impress</p> */}
              {/* <p>Ports: USB-C & Type-A for all devices.</p>
              <p>Eco-Friendly: Sustainable materials & reusable branding.</p> */}
              {/* <a href="#">Learn More</a> */}
            </ProductCard>
            {/* <ProductCard variants={itemVariants}>
              <h4>Quality</h4>
              <a href="#">Learn More</a>
            </ProductCard>
            <ProductCard variants={itemVariants}>
              {/* <ProductColors>
                <ColorCircle><i className="ri-check-line"></i></ColorCircle>
                <ColorCircle></ColorCircle>
                <ColorCircle></ColorCircle>
                <ColorCircle></ColorCircle>
                <ColorCircle></ColorCircle>
              </ProductColors>
              <p>Available colors</p>
            </ProductCard> */} 
          </ProductContent>
        </ProductGrid>
        <ProductButton>
          <Button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            PreOrder
          </Button>
        </ProductButton>
      </SectionContainer>
    </ProductSection>
  );
};

export default Product;