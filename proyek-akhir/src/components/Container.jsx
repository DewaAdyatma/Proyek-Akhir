import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx'; // Fixed casing on import

function Container({ children, showHeaderFooter = true }) {
  return (
    <div>
      {showHeaderFooter && <Header />} {/* Example Header */}
      {children}
      {showHeaderFooter && <Footer />} {/* Example Footer */}
    </div>
  );
}

export default Container;
