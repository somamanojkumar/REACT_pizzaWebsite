import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../styles/Footer.css'
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <XIcon /> <FacebookIcon />
      </div>
      <p> &copy; 2024 pizzaparadiso.com  </p>
    </div>
  );
}

export default Footer;
