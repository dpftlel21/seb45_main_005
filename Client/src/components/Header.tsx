import React from 'react';
import Logo from '../images/logo.png';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <h1 className="text-2xl font-bold">title</h1>
      <p className="text-sm">subtitle</p>
      <img src={Logo} alt="Header Image" />
      <button>buttonText</button>
    </header>
  );
};

export default Header;
