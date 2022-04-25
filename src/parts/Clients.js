import React from 'react';

export default function Clients() {
  return (
    <section className='pt-10 pb-20 md:pt-20'>
      <div className='container'>
        <div className='flex flex-wrap items-center justify-center space-y-8 text-center sm:space-y-0 sm:space-x-3 md:space-x-6 lg:space-x-12'>
          <div className='clients-img'>
            <img src='images/clients/apple.svg' alt='' className='mx-auto' />
          </div>
          <div className='clients-img'>
            <img src='images/clients/adobe.svg' alt='' className='mx-auto' />
          </div>
          <div className='clients-img'>
            <img src='images/clients/slack.svg' alt='' className='mx-auto' />
          </div>
          <div className='clients-img'>
            <img src='images/clients/spotify.svg' alt='' className='mx-auto' />
          </div>
          <div className='clients-img'>
            <img src='images/clients/google.svg' alt='' className='mx-auto' />
          </div>
        </div>
      </div>
    </section>
  );
}
