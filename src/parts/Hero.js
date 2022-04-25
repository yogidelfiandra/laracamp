import React from 'react';

export default function Hero() {
  return (
    <section className='pt-36 pb-10 lg:pt-60'>
      <div className='container'>
        <div className='flex flex-wrap items-center justify-center'>
          <div className='w-full px-5 pb-24 text-center lg:w-2/5 lg:pb-0 lg:text-left'>
            <span className='text-sm font-semibold uppercase text-secondary lg:text-base'>
              Learn From Experts
            </span>
            <h1 className='my-5 text-[22px] font-semibold lg:text-4xl '>
              Start Your <span className='text-primary'>Developer Journey</span>{' '}
              Today
            </h1>
            <p className='mb-10 text-sm font-normal leading-7 text-gray-600 lg:text-base'>
              Our bootcamp is helping junior developers who{' '}
              <br className='hidden lg:block' /> are really passionate in the
              programming.
            </p>
            <a href='#' className='btn btn-primary'>
              Get Started
            </a>
          </div>
          <div className='relative flex w-full justify-center lg:w-1/2 lg:px-5'>
            <img src='/images/hero.png' alt='' className='w-[490px]' />

            <div className='overlay -left-0 -top-10 hidden lg:block'>
              <div className='flex'>
                <img src='/icons/ic_check.svg' alt='' className='w-5' />
                <span className='title-img'>Great & Solid</span>
              </div>
              <p className='description-img'>
                We help people how to <br /> finish the project together
              </p>
            </div>
            <div className='overlay -bottom-12 -right-0	hidden lg:block'>
              <div className='flex'>
                <img src='/icons/ic_check.svg' alt='' className='w-5' />
                <span className='title-img'>Up to Date</span>
              </div>
              <p className='description-img'>
                We encourage people to <br /> use the latest techstack
              </p>
            </div>

            <button className='video'></button>
          </div>
        </div>
      </div>
    </section>
  );
}
