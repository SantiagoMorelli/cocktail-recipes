import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { FaCocktail } from 'react-icons/fa';
import SearchForm from '../components/SearchForm';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <h1 className='logo'>
            Lets go for a <FaCocktail />
          </h1>
          <h1 className='icon'>
            <FaCocktail />
          </h1>
        </Link>
        <SearchForm />
        <ul className='nav-links'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
