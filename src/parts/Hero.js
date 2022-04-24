import React from 'react';

export default function Hero() {
  return (
    <section className='pt-36 pb-10'>
      <div className='container'>
        <div className='flex flex-wrap items-center justify-center'>
          <div className='w-full lg:w-2/5 px-5'>
            <span className='uppercase text-secondary font-semibold text-base'>
              Learn From Experts
            </span>
            <h1 className='text-4xl font-semibold my-5 '>
              Start Your <span className='text-primary'>Developer Journey</span>{' '}
              Today
            </h1>
            <p className='font-normal text-base text-gray-600 leading-7 mb-10'>
              Our bootcamp is helping junior developers who <br /> are really
              passionate in the programming.
            </p>
            <a href='#' className='btn btn-primary'>
              Get Started
            </a>
          </div>
          <div className='relative flex w-full lg:w-1/2 px-5 justify-center'>
            <img src='/images/hero.png' alt='' className='w-[490px]' />
            <div className='overlay -left-0 -top-10'>
              <div className='flex'>
                <img src='/icons/ic_check.svg' alt='' className='w-5' />
                <span className='title-img'>Great & Solid</span>
              </div>
              <p className='description-img'>
                We help people how to <br /> finish the project together
              </p>
            </div>
            <div className='overlay -bottom-12 -right-0	'>
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
