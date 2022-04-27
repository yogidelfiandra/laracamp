import React from 'react';

export default function Price() {
  return (
    <section className='pricing-section'>
      <div className='container'>
        <div className='flex flex-wrap justify-center'>
          <div className='w-full pb-16 text-center md:pb-20 xl:w-2/5 xl:pb-0 xl:pt-32 xl:pl-12 xl:text-left'>
            <h2 className='sub-header'>Good Investment</h2>
            <h3 className='text-2xl font-semibold text-white sm:text-3xl'>
              Start Your Journey
            </h3>
            <p className='my-7 text-base font-normal leading-7 text-[#CBB0FF]'>
              We do have a couple of plans that might fit for you.{' '}
              <br className='hidden sm:block' /> Kindly download our full
              syallbus below.
            </p>
            <button className='btn border-secondary bg-secondary text-white hover:border-green-600 hover:bg-green-600'>
              View Syllabus
            </button>
          </div>

          <div className='flex w-full flex-wrap justify-center text-center md:absolute md:inset-x-0 md:-bottom-60 md:space-x-10 xl:relative xl:left-0 xl:top-0 xl:w-7/12 xl:space-x-8'>
            {/* Pricing 1 */}
            <div className='pricing-group-item'>
              <div className='card'>
                <h4 className='sub-header'>Gila Belajar</h4>
                <h5 className='mb-10 text-4xl font-semibold text-slate-900'>
                  $280K
                </h5>

                <ul>
                  <li className='list-group-item'>
                    <img
                      src='/icons/ic_check.svg'
                      alt=''
                      className='mr-2 h-5 w-5'
                    />
                    Pro Techstack Kit
                  </li>
                  <hr />
                  <li className='list-group-item'>
                    <img
                      src='/icons/ic_check.svg'
                      alt=''
                      className='mr-2 h-5 w-5'
                    />
                    iMac Pro 2021 & Display
                  </li>
                  <hr />
                  <li className='list-group-item'>
                    <img
                      src='/icons/ic_check.svg'
                      alt=''
                      className='mr-2 h-5 w-5'
                    />
                    1-1 Mentoring Program
                  </li>
                  <hr />
                  <li className='list-group-item'>
                    <img
                      src='/icons/ic_check.svg'
                      alt=''
                      className='mr-2 h-5 w-5'
                    />
                    Final Project Certificate
                  </li>
                  <hr />
                  <li className='list-group-item'>
                    <img
                      src='/icons/ic_check.svg'
                      alt=''
                      className='mr-2 h-5 w-5'
                    />
                    Offline Course Videos
                  </li>
                  <hr />
                  <li className='list-group-item'>
                    <img
                      src='/icons/ic_check.svg'
                      alt=''
                      className='mr-2 h-5 w-5'
                    />
                    Future Job Opportinity
                  </li>
                  <hr />
                  <li className='list-group-item'>
                    <img
                      src='/icons/ic_check.svg'
                      alt=''
                      className='mr-2 h-5 w-5'
                    />
                    Premium Design Kit
                  </li>
                  <hr />
                  <li className='list-group-item'>
                    <img
                      src='/icons/ic_check.svg'
                      alt=''
                      className='mr-2 h-5 w-5'
                    />
                    Website Builder
                  </li>
                </ul>

                <button className='btn btn-primary mt-10 w-full'>
                  Take This Plan
                </button>
              </div>
            </div>

            {/* Pricing 2 */}
            <div className='pricing-group-item mt-10 md:mt-0'>
              <div className='card'>
                <h4 className='sub-header'>Mulai Belajar</h4>
                <h5 className='mb-10 text-4xl font-semibold text-slate-900'>
                  $140K
                </h5>

                <ul>
                  <li className='list-group-item'>
                    <img
                      src='/icons/ic_check.svg'
                      alt=''
                      className='mr-2 h-5 w-5'
                    />
                    1-1 Mentoring Program
                  </li>
                  <hr />
                  <li className='list-group-item'>
                    <img
                      src='/icons/ic_check.svg'
                      alt=''
                      className='mr-2 h-5 w-5'
                    />
                    Final Project Certificate
                  </li>
                  <hr />
                  <li className='list-group-item'>
                    <img
                      src='/icons/ic_check.svg'
                      alt=''
                      className='mr-2 h-5 w-5'
                    />
                    Offline Course Videos
                  </li>
                </ul>

                <button className='btn btn-secondary mt-10 w-full'>
                  Start With This Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
