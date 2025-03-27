import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f4f4f4;
`;

const Card = styled.div`
  display: flex;
  width: 800px;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const Left = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f8f9fa;
`;

const Right = styled.div`
  flex: 1;
  background: #2bb3ff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Highlight = styled.span`
  color: #ffcc00;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #0056b3;
  }
`;

const ProductImage = styled.img`
  width: 250px;
  height: auto;
`;

const ProductPage = () => {
  return (
    <Container>
      <Card>
        <Left>
          <Title>
            Present your <Highlight>awesome</Highlight> product
          </Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, eros ac cursus varius.
          </Description>
          <Button>BUY NOW</Button>
        </Left>
        <Right>
          <ProductImage src="https://via.placeholder.com/250" alt="Product" />
        </Right>
      </Card>
    </Container>
  );
};

export default ProductPage;
