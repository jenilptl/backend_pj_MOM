import "./Footer.css";
import logo from "../../assets/mom-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src={logo} alt="MOM Logo" className="footer-logo" />

        <p className="footer-greeting">
          Thanks for visiting <strong>MOM Management System</strong> 💚
        </p>

        <div className="footer-socials">
          <a href="https://www.instagram.com/jenilllll_/" aria-label="Instagram">📷</a>
          <a href="https://www.facebook.com/" aria-label="Facebook">📘</a>
          <a href="https://x.com/PTLJEN" aria-label="X">✖️</a>
          <a href="https://in.linkedin.com/" aria-label="LinkedIn">💼</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} MOM Management System.  
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
