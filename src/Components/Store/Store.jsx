import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Sample product data
const products = [
  {
    id: 1,
    model: 'Model 00035',
    price: 120,
    imgSrc: 'src/assets/01-removebg-preview.png', // Replace with your image source
    details: 'Details about Model 00035',
  },
  {
    id: 2,
    model: 'Model 00045',
    price: 130,
    imgSrc: 'src/assets/01-removebg-preview.png', // Replace with your image source
    details: 'Details about Model 00045',
  },
  {
    id: 3,
    model: 'Model 00025',
    price: 110,
    imgSrc: 'src/assets/01-removebg-preview.png', // Replace with your image source
    details: 'Details about Model 00025',
  },
];

// Styled Components
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Center vertically */
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 20px; /* Space between cards */
`;

const Card = styled(motion.div)`
  width: 200px;
  height: 300px; /* Adjust height for better layout */
  background-color: #f0f0f0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  padding: 20px;
  border: 1px solid #ddd;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const CardContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0; /* Rounded top corners */
`;

const Store = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <CardContainer>
      <CardWrapper>
        {products.map((product) => (
          <Card
            key={product.id}
            onMouseEnter={() => setHoveredCard(product.id)} // Scale up on mouse enter
            onMouseLeave={() => setHoveredCard(null)} // Scale down on mouse leave
            initial={{ scale: 1, opacity: 0 }} // Initial scale and opacity
            animate={{ scale: hoveredCard === product.id ? 1.2 : 1, opacity: 1 }} // Scale up when hovered
            transition={{ duration: 0.5 }} // Slow transition
          >
            <Image src={product.imgSrc} alt={product.model} />
            <CardContent>
              <h3>{product.model}</h3>
              <p>Price: ${product.price}</p>
              {hoveredCard === product.id && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {product.details}
                </motion.p>
              )} {/* Show details if hovered */}
            </CardContent>
          </Card>
        ))}
      </CardWrapper>
    </CardContainer>
  );
};

export default Store;