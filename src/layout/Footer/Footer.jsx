import React from 'react'
import "./footer.css"
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';

const footerStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
};

const iconContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
};

const iconStyle = {
    margin: '0 10px',
};

const textStyle = {
    margin: '0',
};

const Footer = () => {
  return (
    <footer>
      <article>
        <h2>Try Powercard today.</h2>
        <button>
          <p>Sign up free</p>
          {/* <span class="material-symbols-outlined"> trending_flat </span> */}
        </button>
      </article>

      <section class="top">
        {/* <img src="src/assets/WhatsApp Image 2025-03-28 at 3.01.27 AM.jpeg" style={{width:"200px", height:"200px"}} /> */}
        <ul>
          <li>
            <h3>Resources</h3>
            <a>Usage</a>
            <a>Docs</a>
            <a>Support</a>
            <a>Hardware</a>
          </li>
          <li>
            <h3>Pricing</h3>
            <a>Overview</a>
            <a>Flexible Data</a>
            <a>High Volume</a>
            <a>Enterprise</a>
          </li>
          <li>
            <h3>Follow Us</h3>
            <a>Facebook</a>
            <a>Instagram</a>
            <a>Twitter</a>
            <a>linkedin</a>
          </li>
          <li>
            <h3>Company</h3>
            <a href='#about'>About Us</a>
            <a>Contact Us</a>
            <a>Features</a>
            <a>Careers</a>
          </li>
        </ul>
      </section>

      <section class="bottom">
      <div style={iconContainerStyle}>
                <FaCcVisa size={30} style={iconStyle} />
                <FaCcMastercard size={30} style={iconStyle} />
                <FaCcPaypal size={30} style={iconStyle} />
            </div>
        © 2025 Aditya Jyoti
      
      </section>
    </footer>
  
  );
};

export default Footer;