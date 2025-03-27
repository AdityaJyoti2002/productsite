import React from "react";
import styled from "styled-components";

const ContactPage = () => {
  return (
    <Container id="contact">
      <ContactForm>
        <Title>Contact Us</Title>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="Enter your name" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Enter your email" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea id="message" placeholder="Enter your message" rows="5" />
        </FormGroup>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </Container>
  );
};

export default ContactPage;

// Styled Components
const Container = styled.div`
  background-color: #e8eced;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ContactForm = styled.div`
  background-color: #43bbcd;
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: #fff;
  display: block;
  margin-bottom: 5px;
  font-size: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #444;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #444;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #e8eced;
  color: black;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #43bbcd;
  }
`;