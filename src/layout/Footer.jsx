import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;  // Aligns items to the start vertically
  background-color: #333;  // Dark background color
  color: #fff;  // Light text color
  padding: 40px;  // Increased padding
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.div`
  flex: 1;
  text-align: left;

  & h2 {
    margin: 0;  // Remove margin for logo
  }
`;

const Menu = styled.div`
  flex: 2;
  text-align: center;

  & h3 {
    margin-bottom: 15px;  // More space below header
    font-weight: bold;  // Bolder font for titles
  }

  & p {
    margin: 8px 0;  // Consistent margin for options
    cursor: pointer;  // Change cursor to pointer
  }
`;

const Subscribe = styled.div`
  flex: 1;
  text-align: right;

  & h3 {
    margin-bottom: 15px;  
  }
  
  & input {
    padding: 10px;  // More padding for input
    border: none;   // No border
    border-radius: 5px;  // Rounded corners
    margin-right: 5px;  // Space between input and button
  }

  & button {
    padding: 10px 15px;  // Button padding
    background-color: #007bff;  // Button background color
    color: white;  // Button text color
    border: none;  // No border
    border-radius: 5px;  // Rounded corners
    cursor: pointer;  
  }

  & button:hover {
    background-color: #0056b3;  // Darker color on hover
  }
`;

const SocialMedia = styled.div`
  text-align: center;
  margin-top: 10px;

  & p {
    margin: 5px 0;  // Space between social media links
    font-size: 14px;  // Font size for social links
  }

  & i {
    margin: 0 10px;  // Space around icons
    cursor: pointer;  
  }
`;

const Footer111 = () => {
  return (
    <FooterContainer>
      <Logo>
        <img src="src/assets/WhatsApp Image 2025-03-28 at 3.01.27 AM.jpeg" alt="" />
      </Logo>
      <Menu>
        <h3>MENU</h3>
        <p>About Us</p>
        <p>Contacts</p>
        <p>Terms & Condition</p>
        <p>Privacy Policy</p>
      </Menu>
      <Subscribe>
        <h3>NEWSLETTER</h3>
        <p>Subscribe here:</p>
        <input type="text" placeholder="Search for..." />
        <button>Submit</button>
      </Subscribe>
      <SocialMedia>
        <p>Follow Us:</p>
        <p>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-rss"></i>
        </p>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer111;