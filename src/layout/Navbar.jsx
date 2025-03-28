import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  z-index: 9;
`;

const NavHeader = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 786px) {
    background-color: #000000;
  }
`;

const NavLogo = styled.div`
  img {
    max-width: 150px;
  }
`;

const NavMenuButton = styled.button`
  display: none;

  @media (max-width: 786px) {
    display: block;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: black;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 112px;
  list-style: none;

  @media (max-width: 786px) {
    position: absolute;
    top: 65px;
    left: 0;
    width: 100%;
    padding: 2rem;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    background-color: #000000; /* var(--text-dark) */
    transition: 0.5s;
    z-index: -1;
    transform: translateY(-100%);

    &.responsive_nav {
      transform: translateY(0);
    }
  }
`;

const NavLink = styled.li`
  color: black;
  text-decoration: none;
  font-weight: 500;
  gap: 20px;

  @media (max-width: 786px) {
    a {
      font-weight: 500;
      color: white;
      transition: 0.3s;
      text-decoration: none;
    }
  }
`;

const CloseButton = styled.button`
  display: none;

  @media (max-width: 786px) {
    display: block;
    color: white;
  }
`;

const PreOrderButton = styled.button`
  max-width: fit-content;
  padding: 0.75rem 3.5rem;
  outline: none;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background-color: #000000; /* var(--text-dark) */
  border-radius: 2rem;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: #000000; /* var(--text-dark) */
    background-color: #f3f4f6; /* var(--extra-light) */
  }
`;

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <Nav>
      <NavHeader>
        {/* <NavLogo>
          <a href="#">
            <img src="assets/logo-dark.png" alt="logo" className="logo-dark" />
            <img src="assets/logo-white.png" alt="logo" className="logo-white" />
          </a>
        </NavLogo> */}
        <NavMenuButton onClick={showNavbar}>
          <FaBars />
        </NavMenuButton>
      </NavHeader>
      <NavLinks ref={navRef}>
        <NavLink>
          <Link to="/">
          <a >Home</a>
          </Link>
        </NavLink>
        <NavLink>
          <a href="#product">Product</a>
        </NavLink>
        <NavLink>
          <a href="#feature">Features</a>
        </NavLink>
        <NavLink>
          <a href="#product">About</a>
        </NavLink>
        <NavLink>
          <a href="#contact">Contact</a>
        </NavLink>
        
        <NavLink>
          <PreOrderButton>Pre Order</PreOrderButton>
        </NavLink>
        <CloseButton onClick={showNavbar}>
          <FaTimes />
        </CloseButton>
      </NavLinks>
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
      </Nav>
  );
}

export default Navbar;