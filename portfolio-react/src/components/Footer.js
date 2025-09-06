import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="copyright">
            <p>&copy; Bimme Audrey Z 2️⃣0️⃣2️⃣3️⃣.</p>
          </div>
        </div>
        
        <div className="scroll-to-top" onClick={scrollToTop}>
          <i className="fa fa-angle-up"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
