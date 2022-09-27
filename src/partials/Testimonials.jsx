import React from 'react';

import TestimonialImage from '@/images/testimonial.jpg';
import aircraft from '@/images/aircraft.png';
import zfbhb from '@/images/zfbhb.jpg';

function Testimonials() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 mb-16 bg-gray-100 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 w-px h-20 p-px m-auto transform -translate-y-1/2 bg-gray-200"></div>


      {/* Illustration behind content */}
      <div className="absolute bottom-0 -mb-32 transform -translate-x-1/2 pointer-events-none left-1/2" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl px-4 mx-auto sm:px-6" >
        <div className="py-12 md:py-20" >

          {/* Testimonials  */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start bg-white border-2 border-gray-200 rounded">

              {/* Testimonial */}
              <div className="px-12 py-8 pt-20 mx-4 text-center md:mx-0">
                <div className="absolute top-0 -mt-8 transform -translate-x-1/2 left-1/2">
                  <svg className="absolute top-0 right-0 w-16 h-16 -mt-3 -mr-8 text-blue-500 fill-current" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <img className="relative rounded-full" src={TestimonialImage} width="96" height="96" alt="Testimonial 01" />
                </div>
                <blockquote className="mb-4 text-xl font-medium">
                  “I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes.”
                </blockquote>
                <cite className="block mb-1 text-lg not-italic font-bold">试试你的手气如何</cite>
                <div>
                  {/*<span>学生 & 开发者 @</span><a className="text-blue-600 hover:underline" href="/">首页</a>*/}
                  <img className="mx-auto" src={zfbhb} width="50%"  />
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;