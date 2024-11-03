"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import the Image component

const SliderSection = () => {


  return (
    <section id="home" className="container-xl relative pt-20 h-screen border border-red-500 overflow-hidden">
      {/** Background image containers */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
          <Image
            src="/images/hero-1.webp" // Use Next.js Image component
            alt="Blue Sky Banner"
            fill
            style={{ objectFit: "cover"}}
            priority={true}
            blurDataURL="data:image/jpeg;base64,/9j..." // Add a base64 blur placeholder
            sizes="100vw" // Add this line to help Next.js optimize the image
          />
        </div>
      </div>

      {/* Content */}
      <div className="absolute lg:top-1/2 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-4">
        <div className="text-left">
          <h1 className="text-5xl lg:text-8xl w-min tracking-tight font-black text-white sm:text-5xl md:text-5xl">
            Blue Sky Alterations
          </h1>
          <p className="mt-3 max-w-md text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Professional clothing alterations and repairs in Rottingdean
          </p>
          <div className="mt-5 lg:max-w-auto sm:flex lg:justify-start sm:justify-center md:mt-8 max-w-60">
            <div className="">
              <Link
                href="#contact"
                className="flex items-center justify-center px-8 py-3 border-transparent text-base font-medium text-white bg-transparent border-2 border-white hover:bg-gray-50 hover:text-black md:py-4 md:text-lg md:px-10"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
