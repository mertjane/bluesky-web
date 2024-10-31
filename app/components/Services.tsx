import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { forwardRef } from "react";



const services = [
  {
    title: "Dress Alterations",
    description:
      "Perfect fit for all types of dresses including wedding, evening, and casual wear.",
    icon: "/images/services-1.webp",
  },
  {
    title: "Suit Tailoring",
    description: "Professional alterations for suits, jackets, and trousers.",
    icon: "/images/services-2.webp",
  },
  {
    title: "Repairs & Mending",
    description: "Quality repairs for tears, zippers, buttons, and more.",
    icon: "/images/services-3.webp",
  },
  {
    title: "Resizing",
    description: "Expert garment resizing to achieve your perfect fit.",
    icon: "/images/services-4.webp",
  },
  {
    title: "Hemming",
    description: "Professional hemming for trousers, skirts, and dresses.",
    icon: "/images/services-5.webp",
  },
  {
    title: "Custom Work",
    description: "Specialized alterations tailored to your specific needs.",
    icon: "/images/services-6.webp",
  },
  {
    title: "Dry Cleaning",
    description:
      "Eco-friendly dry cleaning preserves delicate garment quality.",
    icon: "/images/services-7.webp",
  },
  {
    title: "Washing & Ironing",
    description: "Expert washing and ironing for fresh, crisp clothes.",
    icon: "/images/services-8.webp",
  },
  {
    title: "Shoe Repairing",
    description:
      "Skilled shoe repairs, including sole replacement and leather restoration services.",
    icon: "/images/services-9.webp",
  },
  {
    title: "Upholstery",
    description:
      "Expert upholstery services for restoring and enhancing furniture comfort with good designs.",
    icon: "/images/services-10.webp",
  },
];

const Services = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="services"
      className="max-w-7xl px-4 mx-auto p-20 h-auto sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">How We Help You</h1>
        <p className="text-lg text-gray-600 leading-relaxed mt-6 px-8 lg:px-0">
          Professional alterations for all your clothing needs
        </p>
      </div>

      {/* Services List */}
      <div className="px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="mx-auto bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col align-top justify-between"
          >
            <div className="mx-auto mb-4">
              <Image
                src={service.icon}
                alt={service.title}
                width={1000}
                height={200}
                className="object-cover w-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <Link href='#contact'>
            <button className="border-2  border-slate-900 flex items-center justify-start max-w-min px-6 py-2 mt-4 hover:bg-slate-900 hover:text-white ease-in-out duration-150">
              Enquire
              <ChevronRight />
            </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
});


Services.displayName = 'Services';

export default Services;
