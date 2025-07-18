"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Navigation = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Section refs for smooth scrolling
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const handleRotate = () => {
    const svgElement = svgRef.current;
    if (svgElement) {
      svgElement.classList.add("rotate");

      // Remove the class after animation completes so it can be reapplied
      setTimeout(() => {
        svgElement.classList.remove("rotate");
      }, 1000); // Matches the animation duration in milliseconds
    }
    // Toggle the mobile menu visibility
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-4">
            <Image
              src="/images/logo.svg"
              alt="Blue Sky Alterations"
              height={50}
              width={50}
              loading="lazy"
            />

            <h2 className="text-xl font-sans text-gray-800">Blue Sky Alterations</h2>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#home"
                className="nav-link text-gray-800 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="#services"
                onClick={() => scrollToSection(servicesRef)}
                className="nav-link text-gray-800 text-sm font-medium"
              >
                Services
              </Link>
              <Link
                href="#about"
                onClick={() => scrollToSection(aboutRef)}
                className="nav-link text-gray-800 text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="#contact"
                onClick={() => scrollToSection(contactRef)}
                className="nav-link text-gray-800 text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>

          {isMobileMenuOpen ? (
            <div className="md:hidden">
              <button
                className="relative lg:right-0 right-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="2"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <rect width="24" height="24" fill="#00000"></rect>
                    <path
                      d="M7 17L16.8995 7.10051"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M7 7.00001L16.8995 16.8995"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          ) : (
            <div className="md:hidden relative">
              <button id="mobile-menu-button" onClick={handleRotate}>
                <svg
                  ref={svgRef}
                  fill="#000000"
                  version="1.1"
                  className="h-6 w-6 absolute top-0 right-0 z-50"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M446.529,444.154c62.338-65.719,77.651-163.52,37.84-245.27c-2.429-4.989-8.441-7.061-13.432-4.634 c-4.989,2.429-7.062,8.444-4.634,13.432c36.906,75.781,21.631,166.768-38.01,226.409c-6.014,6.014-12.32,11.557-18.876,16.633 c11.247-32.51,14.811-67.731,10.028-101.977c-6.588-47.181-27.923-89.971-61.697-123.747c-8.273-8.273-17.091-15.794-26.378-22.54 c-0.735-0.714-1.567-1.306-2.468-1.76c-28.058-19.789-60.296-32.563-94.904-37.397c-34.246-4.78-69.464-1.218-101.973,10.03 c5.076-6.556,10.619-12.863,16.633-18.876c37.346-37.347,87-57.914,139.817-57.914c52.817,0,102.471,20.568,139.817,57.914 c3.924,3.921,10.284,3.924,14.209,0c3.924-3.925,3.924-10.286,0-14.209c-41.142-41.142-95.843-63.799-154.027-63.799 c-52.743,0-102.622,18.618-142.137,52.746l-50.541-52.98c12.607-19.071,10.524-45.065-6.255-61.845 c-19.163-19.161-50.337-19.161-69.5,0c-19.16,19.162-19.16,50.339,0,69.5c9.581,9.58,22.165,14.371,34.75,14.371 c9.317,0,18.629-2.632,26.727-7.884l50.235,52.656c-13.972,14.471-25.542,30.411-34.712,47.32 c-0.351,0.524-0.65,1.078-0.895,1.656c-43.73,82.338-30.968,187.039,38.305,256.312c25.201,25.199,55.09,42.923,86.886,53.168 c0.698,0.309,1.428,0.528,2.177,0.674c21.116,6.56,43.038,9.855,64.963,9.855c35.221,0,70.44-8.476,102.309-25.406 c0.506-0.217,0.987-0.488,1.453-0.786c14.03-7.592,27.392-16.834,39.805-27.727l46.797,48.757c1.973,2.055,4.608,3.09,7.25,3.09 c2.502,0,5.008-0.928,6.955-2.798c4.003-3.842,4.134-10.203,0.292-14.205L446.529,444.154z M75.33,69.66 c-11.324,11.326-29.757,11.326-41.081,0c-11.326-11.325-11.326-29.755,0-41.081c5.663-5.664,13.101-8.496,20.54-8.496 s14.878,2.832,20.54,8.496C86.657,39.906,86.657,58.335,75.33,69.66z M148.658,434.092 C86.31,371.747,74.393,277.785,112.885,203.34c36.036-18.623,77.927-25.774,118.333-20.134 c26.128,3.648,50.77,12.291,72.981,25.433c-17.523,9.798-33.634,21.987-48.047,36.397 c-33.355,33.356-54.644,75.409-61.563,121.613c-5.433,36.292-1.329,73.608,11.545,107.398 C185.299,464.531,165.784,451.219,148.658,434.092z M379.409,469.866c-45.61,23.583-98.543,28.247-147.048,13.979 c-17.396-34.732-23.753-75.116-17.897-114.219c6.277-41.918,25.607-80.086,55.899-110.379 c15.565-15.564,33.297-28.275,52.77-37.863c7.136,5.432,13.955,11.377,20.405,17.829c30.661,30.66,50.026,69.498,56.005,112.316 C405.185,391.936,398.034,433.829,379.409,469.866z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M474.76,284.706c-7.751-44.188-28.676-84.371-60.51-116.206c-28.873-28.871-65.058-48.98-104.647-58.158 c-5.395-1.248-10.803,2.113-12.057,7.519c-1.253,5.405,2.114,10.803,7.519,12.057c35.922,8.326,68.764,26.582,94.974,52.791 c28.898,28.898,47.893,65.369,54.928,105.468c0.856,4.879,5.096,8.314,9.884,8.314c0.576,0,1.16-0.05,1.748-0.153 C472.066,295.38,475.719,290.171,474.76,284.706z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M385.999,196.751c-27.816-27.814-62.572-47.579-100.511-57.156c-21.357-5.392-43.365-7.518-65.403-6.322 c-5.541,0.303-9.789,5.037-9.487,10.578c0.303,5.541,5.04,9.786,10.578,9.487c20.018-1.088,40,0.843,59.393,5.738 c34.425,8.69,65.969,26.631,91.221,51.883c38.385,38.385,58.94,89.424,57.875,143.715c-0.107,5.55,4.301,10.136,9.849,10.245 c0.068,0.001,0.135,0.001,0.201,0.001c5.456,0,9.933-4.37,10.042-9.852C450.928,295.263,428.285,239.038,385.999,196.751z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M147.103,202.057c-4.673-2.994-10.887-1.633-13.878,3.042c-14.819,23.136-24.993,48.586-30.243,75.641 c-1.057,5.447,2.501,10.72,7.949,11.777c0.646,0.126,1.29,0.186,1.925,0.186c4.715,0,8.92-3.333,9.852-8.134 c4.766-24.551,13.996-47.642,27.438-68.631C153.138,211.263,151.775,205.048,147.103,202.057z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M197.668,203.885c-4.113-3.726-10.468-3.413-14.191,0.702c-36.354,40.14-56.331,92.136-56.25,146.41 c0.008,5.545,4.504,10.032,10.047,10.032c0.004,0,0.011,0,0.015,0c5.55-0.008,10.04-4.513,10.032-10.062 c-0.072-49.268,18.057-96.464,51.049-132.894C202.097,213.963,201.78,207.61,197.668,203.885z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M243.535,216.326c-3.671-4.158-10.019-4.556-14.181-0.887c-3.436,3.032-6.827,6.217-10.077,9.466 c-43.091,43.093-66.268,102.744-63.589,163.662c0.238,5.392,4.685,9.605,10.03,9.605c0.149,0,0.3-0.003,0.45-0.009 c5.543-0.245,9.839-4.936,9.596-10.48c-2.433-55.301,18.606-109.452,57.723-148.567c2.955-2.957,6.038-5.851,9.162-8.608 C246.809,226.837,247.205,220.489,243.535,216.326z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M388.835,389.136c-3.095-4.604-9.343-5.829-13.944-2.727c-38.937,26.195-91.177,28.82-136.324,6.857 c-4.993-2.43-11.004-0.35-13.43,4.639c-2.429,4.991-0.351,11.004,4.639,13.43c23.124,11.249,47.921,16.818,72.291,16.818 c29.972,0,59.297-8.426,84.041-25.072C390.711,399.983,391.933,393.741,388.835,389.136z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M385.385,432.307c-2.516-4.946-8.565-6.91-13.51-4.398c-46.558,23.694-93.666,27.352-129.24,10.039 c-4.991-2.423-11.002-0.351-13.431,4.638c-2.429,4.99-0.352,11.002,4.638,13.431c17.573,8.552,37.378,12.791,58.362,12.791 c28.322,0,58.788-7.724,88.784-22.989C385.932,443.301,387.901,437.251,385.385,432.307z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M389.148,348.534c-2.662-4.868-8.764-6.658-13.636-3.999c-38.424,20.997-85.032,21.608-124.683,1.633l-1.688-0.835 c-1.23-0.607-2.776-1.368-3.144-1.558c-4.926-2.559-10.989-0.642-13.547,4.283s-0.64,10.989,4.284,13.547 c0.356,0.185,2.118,1.057,3.514,1.746l1.551,0.768c22.126,11.146,46.143,16.704,70.071,16.704 c25.321,0,50.542-6.229,73.279-18.653C390.019,359.51,391.809,353.405,389.148,348.534z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M377.728,314.622c-2.072-5.147-7.924-7.645-13.073-5.566c-34.262,13.802-73.304,12.647-107.109-3.163 c-5.03-2.35-11.008-0.181-13.359,4.844c-2.35,5.026-0.181,11.006,4.845,13.357c20.819,9.736,43.374,14.63,65.893,14.63 c19.489,0,38.949-3.665,57.236-11.029C377.31,325.621,379.802,319.769,377.728,314.622z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M352.465,276.796c-1.444-5.357-6.957-8.529-12.318-7.083c-16.517,4.457-33.127,3.751-48.032-2.044 c-5.17-2.012-10.994,0.551-13.005,5.723c-2.011,5.171,0.552,10.994,5.723,13.005c10.8,4.2,22.254,6.308,33.943,6.308 c8.795,0,17.723-1.195,26.606-3.591C350.74,287.669,353.911,282.154,352.465,276.796z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <circle
                          cx="457.585"
                          cy="173.4"
                          r="10.047"
                        ></circle>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Mobile Menu */}
      <div
          className={`md:hidden absolute w-full bg-white shadow-lg transform transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full opacity-0 absolute -z-50'
          }`}
          style={{
            top: '100%',
            left: 0,
          }}
        >
          <div className="flex flex-col items-center border-t border-gray-200">
            <Link
              href="#home"
              className="block w-full text-center py-4 text-gray-800 hover:bg-gray-200 hover:text-neutral-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="block w-full text-center py-4 text-gray-800 hover:bg-gray-200 hover:text-neutral-900"
              onClick={() => scrollToSection(servicesRef)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="block w-full text-center py-4 text-gray-800 hover:bg-gray-200 hover:text-neutral-900"
              onClick={() => scrollToSection(aboutRef)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block w-full text-center py-4 text-gray-800 hover:bg-gray-200 hover:text-neutral-900"
              onClick={() => scrollToSection(contactRef)}
            >
              Contact
            </Link>
          </div>
        </div>
    </nav>
  );
};

Navigation.displayName = "Navigation";

export default Navigation;
