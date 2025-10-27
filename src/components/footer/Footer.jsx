import { FaGithub, FaTelegram, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <h3 className="footer-title">Shahnoza Rahimova</h3>
      <div className="footer-icons">
        <a href="https://github.com/shaxnoza_rah1mova" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://t.me/Shakhnoza4040" target="_blank" rel="noopener noreferrer">
          <FaTelegram className="icon" />
        </a>
        <a
          href="https://instagram.comhttps://www.instagram.com/shomurod1410?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==
"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon" />
        </a>
      </div>
      <p className="footer-text">© Shaxnoza uchun huquqlar himoyalangan. </p>
    </footer>
  );
};

export default Footer;
