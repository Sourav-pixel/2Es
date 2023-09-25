import React from 'react';
import { Reveal } from 'react-reveal';
// Import necessary animation styles

const AboutUs = () => {
  return (
    <div className="bg-blue200 min-h-screen flex flex-col justify-start items-center p-8 relative">
      {/* Blob 1 */}
      <img
        src="/blob 2.svg"
        alt="/blob.svg"
        className="absolute left-0 top-0 w-42  md:w-96 z-0 mt-16 ml-8 "
      />

      {/* Blob 2 */}
      <img
        src="/blob.svg"
        alt="/blob_1.svg"
        className="absolute right-0 bottom-0 w-42 md:w-96 z-0 mb-14 mr-15"
      />

      {/* "About Us" title at the top */}
      <Reveal effect="fadeInUp">
        <h1 className="text-4xl font-semibold mb-4 text-white">About Us</h1>
      </Reveal>

      {/* Glassmorphism UI container */}
      <div className="bg-opacity-30 bg-white p-8 rounded-lg shadow-md backdrop-blur-lg w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 relative z-10">
        <Reveal effect="fadeInUp">
          <p className="text-white text-lg mb-4">
            Welcome to [Your Online Grocery Shop]! At [Your Online Grocery Shop], we're passionate about making your grocery shopping experience convenient, affordable, and delightful. We understand that life can get busy, and going to the grocery store may not always be on the top of your to-do list. That's where we come in!
          </p>
        </Reveal>

        <Reveal effect="fadeInUp">
          <p className="text-white text-lg">
            Our mission is simple: To bring the freshest, highest-quality groceries right to your doorstep. We believe that everyone should have access to fresh produce, pantry staples, and specialty items without the hassle of traditional grocery shopping.
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default AboutUs;
