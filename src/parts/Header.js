import React from 'react';

export default function Header() {
  return (
    <header className='shadow-header'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <div className='flex'>
            <a href='#home' className='block py-7'>
              <img src='/images/logo.png' alt='' className='h-10' />
            </a>
            <div className='flex items-center'>
              <nav>
                <ul className='flex lg:space-x-7 lg:pl-12'>
                  <li>
                    <a href='#' className='text-navbar'>
                      Program
                    </a>
                  </li>
                  <li>
                    <a href='#' className='text-navbar'>
                      Mentor
                    </a>
                  </li>
                  <li>
                    <a href='#' className='text-navbar'>
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href='#' className='text-navbar'>
                      Business
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className='flex lg:space-x-5'>
            <a href='#' className='btn btn-secondary'>
              Sign In
            </a>
            <a href='#' className='btn btn-primary'>
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
