import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Продукти</Link></li>
          <li><Link to="/basket">Кошик</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
