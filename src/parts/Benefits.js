import React from 'react';

export default function Benefits() {
  return (
    <section className='benefit-section'>
      <div className='container'>
        <div className='w-full pb-16 text-center md:pb-20'>
          <h2 className='sub-header'>Our Super Benefits</h2>
          <h3 className='secondary-header'>Learn Faster & Better</h3>
        </div>
        <div className='flex flex-wrap text-center'>
          <div className='benefit-item'>
            <div className='benefit-icon bg-secondary'>
              <img src='images/benefits/globe.svg' alt='' className='mx-auto' />
            </div>
            <h4 className='benefit-title'>Diversity</h4>
            <p className='benefit-text'>
              Learn from anyone around the <br /> world and get a new skills
            </p>
          </div>
          <div className='benefit-item'>
            <div className='benefit-icon bg-primary'>
              <img
                src='images/benefits/codesandbox.svg'
                alt=''
                className='mx-auto'
              />
            </div>
            <h4 className='benefit-title'>A.I Guideline</h4>
            <p className='benefit-text'>
              Lara will help you to choose <br /> which path that suitable for
              you
            </p>
          </div>
          <div className='benefit-item'>
            <div className='benefit-icon bg-secondary'>
              <img src='images/benefits/users.svg' alt='' className='mx-auto' />
            </div>
            <h4 className='benefit-title'>1-1 Mentoring</h4>
            <p className='benefit-text'>
              We will ensure that you will get <br /> what you really do need
            </p>
          </div>
          <div className='benefit-item'>
            <div className='benefit-icon bg-primary'>
              <img
                src='images/benefits/briefcase.svg'
                alt=''
                className='mx-auto'
              />
            </div>
            <h4 className='benefit-title'>Future Job</h4>
            <p className='benefit-text'>
              Get your dream job in your dream <br /> company together with us
            </p>
          </div>
        </div>

        {/* Part 1 */}
        <div className='category-item'>
          <div className='benefits-img xl:pl-20'>
            <img src='images/image-1.png' alt='' className='w-[340px]' />

            <div className='circle-img bg-yellow-300 xl:left-40'>
              <div className='mx-auto text-white'>1.</div>
            </div>

            <div className='overlay-2 -bottom-12 right-8'>
              <div className='flex items-center'>
                <img src='/icons/ic_check.svg' alt='' className='h-5 w-5' />
                <span className='title-img'>Interview</span>
              </div>
              <p className='description-img'>
                Before taking any program it is good to choose the path
              </p>
            </div>
          </div>

          <div className='w-full sm:px-9 lg:w-1/2 lg:px-0 lg:pl-10'>
            <h2 className='sub-header'>Better Career</h2>
            <h3 className='secondary-header'>Prepare The Journey</h3>
            <p className='paragraph'>
              We do really care to our students’ future career{' '}
              <br className='hidden sm:block' /> so it would be good if you are
              taking a quick interview
            </p>
            <button className='btn btn-secondary'>Learn More</button>
          </div>
        </div>

        {/* Part 2 */}
        <div className='category-item'>
          <div className=' w-full text-right sm:px-9 lg:w-1/2 lg:px-0 lg:pr-10'>
            <h2 className='sub-header'>Study Harder</h2>
            <h3 className='secondary-header'>Finish The Project</h3>
            <p className='paragraph'>
              Each of you will be joining the private group and also{' '}
              <br className='hidden sm:block' /> working together with team
              members on project
            </p>
            <button className='btn btn-secondary'>View Demo</button>
          </div>

          <div className='benefits-img xl:pr-20'>
            <img src='images/image-2.png' alt='' className='w-[340px]' />

            <div className='circle-img bg-primary xl:left-20'>
              <div className='mx-auto text-white'>2.</div>
            </div>

            <div className='overlay-2 -bottom-12 right-8 xl:-bottom-10 xl:right-28'>
              <div className='flex items-center'>
                <img src='/icons/ic_check.svg' alt='' className='h-5 w-5' />
                <span className='title-img'>Fokus</span>
              </div>
              <p className='description-img'>
                Study and follow the journey based on your career path
              </p>
            </div>
          </div>
        </div>

        {/* Part 3 */}
        <div className='category-item'>
          <div className='benefits-img xl:pl-20'>
            <img src='images/image-3.png' alt='' className='w-[340px]' />

            <div className='circle-img bg-secondary xl:left-40'>
              <div className='mx-auto text-white'>3.</div>
            </div>

            <div className='overlay-2 -bottom-12 right-8'>
              <div className='flex items-center'>
                <img src='/icons/ic_check.svg' alt='' className='h-5 w-5' />
                <span className='title-img'>Final Gate</span>
              </div>
              <p className='description-img'>
                Demonstration for your final project to the judges
              </p>
            </div>
          </div>

          <div className='w-full sm:px-9 lg:w-1/2 lg:px-0 lg:pl-10'>
            <h2 className='sub-header'>End Game</h2>
            <h3 className='secondary-header'>Big Demo Day</h3>
            <p className='paragraph'>
              Learn how to speaking in public to demonstrate your{' '}
              <br className='hidden sm:block' /> final project and receive the
              important feedbacks
            </p>
            <button className='btn btn-secondary'>Showcase</button>
          </div>
        </div>
      </div>
    </section>
  );
}
