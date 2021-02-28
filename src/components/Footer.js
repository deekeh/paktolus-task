import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-copyright">
        Copyright &copy; Paktolus Group LLC. All rights reserved
      </div>
      <div id="footer-links">
        <a href="http://paktolus.com" target="_blank" rel="noopener noreferrer">
          Home
        </a>
        <a
          href="http://paktolus.com/about-us"
          target="_blank"
          rel="noopener noreferrer"
        >
          About Us
        </a>
        <a
          href="http://paktolus.com/services"
          target="_blank"
          rel="noopener noreferrer"
        >
          Services
        </a>
        <a
          href="http://paktolus.com/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
        <a
          href="http://jobs.paktolus.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Our Team
        </a>
        <a
          href="http://paktolus.com/contact-us"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Footer;
