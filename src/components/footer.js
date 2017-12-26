import React from 'react';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <p className="copyright">&copy; {year} sidhantsharma.com. All rights reserved.</p>
  	</footer>
  )
}

export default Footer;
