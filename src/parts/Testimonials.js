import React from 'react';

export default function Testimonials() {
  return (
    <section className='mt-20 bg-[#F7F7FB] py-20'>
      <div className='container'>
        <div className='mb-20 w-full text-center'>
          <h2 className='mb-2 text-base font-semibold uppercase text-secondary'>
            Success Students
          </h2>
          <h3 className='text-2xl font-semibold text-slate-900 sm:text-3xl'>
            We Really Love Laracamp
          </h3>
        </div>
        <div className='flex flex-wrap justify-center space-y-5 sm:space-x-5 sm:space-y-0 '>
          <div className='w-full sm:mb-10 sm:w-[287px] lg:mb-0'>
            <div className='rounded-xl bg-white p-5'>
              <div className='flex flex-wrap space-x-1'>
                <img src='images/icon-star.svg' alt='' className='h-9 w-9' />
                <img src='images/icon-star.svg' alt='' className='h-9 w-9' />
                <img src='images/icon-star.svg' alt='' className='h-9 w-9' />
                <img src='images/icon-star.svg' alt='' className='h-9 w-9' />
                <img src='images/icon-star.svg' alt='' className='h-9 w-9' />
              </div>
              <p className='my-7 text-base font-normal leading-7 text-gray-600 sm:h-36'>
                I was not really into code but after they teach me how to train
                my logic then I was really fall in love with code
              </p>
              <div className='flex items-center'>
                <img src='images/profile-1.png' alt='' className='w-14' />
                <div className='ml-4 flex flex-wrap'>
                  <h4 className='text-lg font-medium text-slate-900'>
                    Ashlynn Saris
                  </h4>
                  <span className='text-base font-normal text-gray-600'>
                    Developer at Google
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full sm:mb-10 sm:w-[287px] lg:mb-0'>
            <div className='rounded-xl bg-white p-5'>
              <div className='flex flex-wrap space-x-1'>
                <img src='images/icon-star.svg' alt='' className='h-9 w-9' />
                <img src='images/icon-star.svg' alt='' className='h-9 w-9' />
                <img src='images/icon-star.svg' alt='' className='h-9 w-9' />
                <img src='images/icon-star.svg' alt='' className='h-9 w-9' />
                <img src='images/icon-star.svg' alt='' className='h-9 w-9' />
              </div>
              <p className='my-7 text-base font-normal leading-7 text-gray-600 sm:h-36'>
                Code is really important if we want to build a company and
                strike to the win
              </p>
              <div className='flex items-center'>
                <img src='images/profile-2.png' alt='' className='w-14' />
                <div className='ml-4 flex flex-wrap'>
                  <h4 className='text-lg font-medium text-slate-900'>
                    Yogi Delfiandra
                  </h4>
                  <span className='text-base font-normal text-gray-600'>
                    CEO at kodingHack
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full sm:mb-10 sm:w-[287px] lg:mb-0'>
            <div className='rounded-xl bg-white p-5'>
              <div className='flex flex-wrap space-x-1'>
                <img src='images/icon-star.svg' alt='' className='h-9 w-9' />
                <img src='images/icon-star.svg' alt='' className='h-9 w-9' />
                <img src='images/icon-star.svg' alt='' className='h-9 w-9' />
                <img src='images/icon-star.svg' alt='' className='h-9 w-9' />
                <img src='images/icon-star.svg' alt='' className='h-9 w-9' />
              </div>
              <p className='my-7 text-base font-normal leading-7 text-gray-600 sm:h-36'>
                My background is design and art but I do really love how to make
                my design working in the development phase
              </p>
              <div className='flex items-center'>
                <img src='images/profile-3.png' alt='' className='w-14' />
                <div className='ml-4 flex flex-wrap'>
                  <h4 className='text-lg font-medium text-slate-900'>
                    Giana Workman
                  </h4>
                  <span className='text-base font-normal text-gray-600'>
                    QA at Facebook
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
