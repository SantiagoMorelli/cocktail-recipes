import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { FaCocktail, FaBook } from 'react-icons/fa';

import SearchForm from '../components/SearchForm';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <nav className='nav-center'>
        <div>
          <SearchForm />
        </div>
        <div>
          <Link to='/'>
            <h1 className='logo'>
              Lets go for a <FaCocktail />
            </h1>
            <h1 className='icon'>
              <FaCocktail />
            </h1>
          </Link>
        </div>
        <div>
          <Link to='/about'>
            <h1 className='logo'>
              About <FaBook />
            </h1>
            <h1 className='icon'>
              <FaBook />
            </h1>
          </Link>
        </div>
      </nav>
    </nav>
  );
}
