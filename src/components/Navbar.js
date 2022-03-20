import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { FaCocktail, FaBook } from 'react-icons/fa';

import SearchForm from '../components/SearchForm';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <SearchForm />
        <Link to='/'>
          <h1 className='logo'>
            Lets go for a <FaCocktail />
          </h1>
          <h1 className='icon'>
            <FaCocktail />
          </h1>
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/about'>
              <FaBook />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
