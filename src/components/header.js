import React from 'react';

const Header = () => {
  return (
    <header>
      <h2></h2>
  		<nav>
        <li><a href='#background'>Background</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href={`${process.env.PUBLIC_URL}/Resume_software_3a.pdf`}>Resume</a></li>
        <li><a href='#hire-me'>Hire&nbsp;Me</a></li>
  		</nav>
  	</header>
  )
}

export default Header;
