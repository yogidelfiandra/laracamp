import React from 'react';

export default function Hero() {
  return (
    <section className='pt-36 pb-10 lg:pt-60'>
      <div className='container'>
        <div className='flex flex-wrap items-center justify-center md:justify-evenly'>
          <div className='w-full px-5 pb-24 text-center md:w-2/5 md:pb-0 md:text-left'>
            <span className='text-sm font-semibold uppercase text-secondary lg:text-base'>
              Learn From Experts
            </span>
            <h1 className='my-5 text-[22px] font-semibold sm:text-2xl lg:text-3xl xl:text-4xl'>
              Start Your <span className='text-primary'>Developer Journey</span>{' '}
              Today
            </h1>
            <p className='mb-10 text-sm font-normal leading-7 text-gray-600 lg:text-base'>
              Our bootcamp is helping junior developers who{' '}
              <br className='hidden sm:block md:hidden xl:block' /> are really
              passionate in the programming.
            </p>
            <a href='#' className='btn btn-primary'>
              Get Started
            </a>
          </div>
          <div className='relative flex w-full justify-center md:w-1/2 md:px-5 lg:w-1/2'>
            <img
              src='/images/hero.png'
              alt=''
              className='w-80 lg:w-[400px] xl:w-[490px]'
            />

            <div className='overlay hidden md:-left-10 md:-top-14 md:block lg:-left-4 xl:-left-0 xl:-top-10'>
              <div className='flex items-center'>
                <img src='/icons/ic_check.svg' alt='' className='h-5 w-5' />
                <span className='title-img'>Great & Solid</span>
              </div>
              <p className='description-img'>
                We help people how to <br /> finish the project together
              </p>
            </div>
            <div className='overlay hidden md:-bottom-20 md:-right-8 md:block	lg:-bottom-12 lg:-right-0'>
              <div className='flex items-center'>
                <img src='/icons/ic_check.svg' alt='' className='h-5 w-5' />
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
