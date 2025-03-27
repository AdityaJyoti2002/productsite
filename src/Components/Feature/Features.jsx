import React from "react";
import styled from "styled-components";
// import "../Header/Header.css"

const Container = styled.div`
  text-align: center;
  padding: 50px;
  height: 48rem;
  background: #e8eced;

  @media screen and (max-width: 768px) {
    height: 101rem;
}

`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #222;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #555;
  max-width: 600px;
  margin: 0 auto 40px;
`;

const FeaturesSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const WatchImage = styled.img`
  width: 280px;
  height: auto;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
`;

const FeaturesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;

const FeatureCard = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureIcon = styled.div`
  font-size: 28px;
  color: #007bff;
  margin-right: 20px;
  background: #eaf4ff;
  padding: 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 5px;
  color: #222;
`;

const FeatureText = styled.ul`
  font-size: 14px;
  color: #555;
`;
const ProductButton = styled.div`
  text-align: center;
`;

const Button = styled.a`
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

const features = [
  { id: 1, title: "Ultra-Slim & Portable", text: "", icon: "⚙️" },
  { id: 2, title: "Fast Charging", text: "", icon: "📍" },
  { id: 3, title: "Custom Branding & Personalization", text: "", icon: "⚡" },
  { id: 4, title: "Eco-Friendly & Sustainable", text: "", icon: "📷" },
  { id: 5, title: "Affordable & Travel-Ready", text: "", icon: "🔒" },
  { id: 6, title: "Dual Functionality: Power Bank + Business Card", text: "", icon: "🔋" },
  { id: 7, title: "Never Run Out of Battery Again!", text: "", icon: "🔋" },
  { id: 8, title: " Universal Compatibility", text: "", icon: "🔋" },
];

const Features = () => {
  return (
    <Container id="feature">
      <Title><b>Features</b></Title>
      {/* <Subtitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices pretium nisi quis interdum.
      </Subtitle> */}
      <FeaturesSection>
        <FeaturesGrid>
          {features.slice(0, 4).map((feature) => (
            <FeatureCard key={feature.id}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureContent>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureText>{feature.text}</FeatureText>
              </FeatureContent>
            </FeatureCard>
          ))}
        </FeaturesGrid>
        <ImageContainer>
          <WatchImage src="src/assets/01-removebg-preview.png" alt="Smart Watch" />
        </ImageContainer>
        <FeaturesGrid>
          {features.slice(4).map((feature) => (
            <FeatureCard key={feature.id}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureContent>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureText>{feature.text}</FeatureText>
              </FeatureContent>
            </FeatureCard>
          ))}
        </FeaturesGrid>
        
      </FeaturesSection>
      <ProductButton>
          <Button href="#store"
            
          >
            PreOrder
          </Button>
        </ProductButton>
    </Container>
  );
};

export default Features;