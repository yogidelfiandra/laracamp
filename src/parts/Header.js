import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { RiMenu4Fill } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? '#7839F3' : '',
    };
  };

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
      header.classList.add('fixed-nav');
    } else {
      header.classList.remove('fixed-nav');
    }
  };

  return (
    <header className='header-section'>
      <div className='container'>
        <div className='relative flex items-center justify-between'>
          <div className='flex'>
            <Link to='/' className='flex items-center py-5 lg:py-7'>
              <img src='/images/logo.svg' alt='' className='h-6 lg:h-9' />
              <span className='pl-2.5 text-lg font-medium text-slate-900 lg:text-2.5xl'>
                laracamp
              </span>
            </Link>
            <div className='flex items-center'>
              <nav
                className={[
                  'md:static md:block md:rounded-none md:bg-transparent md:px-0 md:shadow-none',
                  click
                    ? 'absolute top-16 right-4 w-full max-w-[15.625rem] rounded bg-white py-5 px-5 shadow-lg sm:max-w-[31.25rem]'
                    : 'hidden',
                ].join(' ')}
              >
                {/* desktop */}
                <ul className='hidden md:flex md:space-x-7 md:pl-12'>
                  <li>
                    <NavLink
                      to='/program'
                      className='nav-link'
                      style={navLinkStyles}
                    >
                      Program
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/mentor'
                      className='nav-link'
                      style={navLinkStyles}
                    >
                      Mentor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/pricing'
                      className='nav-link'
                      style={navLinkStyles}
                    >
                      Pricing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/business'
                      className='nav-link'
                      style={navLinkStyles}
                    >
                      Business
                    </NavLink>
                  </li>
                </ul>

                {/* mobile */}
                <ul className='block space-y-5 md:hidden'>
                  <li>
                    <NavLink
                      to='/program'
                      className='nav-link'
                      style={navLinkStyles}
                    >
                      Program
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/mentor'
                      className='nav-link'
                      style={navLinkStyles}
                    >
                      Mentor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/pricing'
                      className='nav-link'
                      style={navLinkStyles}
                    >
                      Pricing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/business'
                      className='nav-link'
                      style={navLinkStyles}
                    >
                      Business
                    </NavLink>
                  </li>
                  <li className='flex flex-wrap space-y-3 text-center'>
                    <Link to='/login' className='btn btn-secondary w-full'>
                      Sign In
                    </Link>
                    <Link to='/signup' className='btn btn-primary w-full'>
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Desktop */}
          <div className='hidden lg:flex lg:space-x-5'>
            <Link to='/signin' className='btn btn-secondary'>
              Sign In
            </Link>
            <Link to='/signup' className='btn btn-primary'>
              Sign Up
            </Link>
          </div>

          {/* Tablet */}
          <nav
            className={[
              click
                ? 'absolute top-16 right-4 z-[50] hidden w-full max-w-[15.625rem] rounded bg-white py-5 px-5 shadow-lg md:block lg:hidden'
                : 'hidden',
            ].join(' ')}
          >
            <ul className='block space-y-5'>
              <li className='flex flex-wrap space-y-3 text-center'>
                <Link to='/signin' className='btn btn-secondary w-full'>
                  Sign In
                </Link>
                <Link to='/signup' className='btn btn-primary w-full'>
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>

          <div className='hamburger lg:hidden'>
            <button
              className='rounded-md bg-dark px-1.5 py-1.5 transition duration-500'
              onClick={handleClick}
            >
              {click ? (
                <FaTimes size={20} style={{ color: 'white' }} />
              ) : (
                <RiMenu4Fill size={20} style={{ color: 'white' }} />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
