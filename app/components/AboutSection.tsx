import React, { forwardRef } from "react";
import Image from "next/image";

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="about" className="about-section p-20">
      <div className="container-xl">
        <div className="about-content">
          <h2 className="about-heading text-4xl font-bold text-gray-900">
            About Us
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 px-8 lg:px-0">
            With <span className="highlight-text">years of experience</span> in
            the industry, we provide top-quality alterations and repairs,
            ensuring every garment receives the care and attention it deserves.
            Our team of skilled professionals is dedicated to delivering
            precise, timely, and personalized services to meet your unique
            needs.
          </p>
          <div className="collage-grid ">
            <div className="collage-frame">
              <Image
                width={400}
                height={400}
                src="/images/collage-1.webp"
                alt="Our Workshop"
                loading="lazy"
              />
            </div>
            <div className="collage-frame">
              <Image
                width={400}
                height={384}
                src="/images/collage-2.webp"
                alt="Our Team"
                loading="lazy"
              />
            </div>
            <div className="collage-frame">
              <Image
                width={400}
                height={400}
                src="/images/collage-3.webp"
                alt="Our Work"
                loading="lazy"
              />
            </div>
            <div className="collage-frame">
              <Image
                width={400}
                height={400}
                src="/images/collage-4.webp"
                alt="Our Alterations"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';
export default AboutSection;
