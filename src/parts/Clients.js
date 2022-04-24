import React from 'react';

export default function Clients() {
  return (
    <section className='pt-20 pb-20'>
      <div className='container'>
        <div className='flex flex-wrap justify-center lg:space-x-12'>
          <div className='clients-img'>
            <img src='images/clients/apple.svg' alt='' />
          </div>
          <div className='clients-img'>
            <img src='images/clients/adobe.svg' alt='' />
          </div>
          <div className='clients-img'>
            <img src='images/clients/slack.svg' alt='' />
          </div>
          <div className='clients-img'>
            <img src='images/clients/spotify.svg' alt='' />
          </div>
          <div className='clients-img'>
            <img src='images/clients/google.svg' alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}
