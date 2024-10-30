"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import Loader from "./components/Icons";

// Dynamically import components
const AboutSection = dynamic(() => import("./components/AboutSection"), {
  ssr: false,
  loading: () => <div className="hidden">Loading About...</div>,
});

const ContactUs = dynamic(() => import("./components/ContactUs"), {
  ssr: false,
  loading: () => <div className="hidden">Loading Contact...</div>,
});

const Footer = dynamic(() => import("./components/Footer"), { 
  ssr: false,
  loading: () => <div className="hidden">Loading Footer...</div>,
});

const GoogleMap = dynamic(() => import("./components/GoogleMap"), {
  ssr: false,
  loading: () => <div className="hidden">Loading Map...</div>,
});

const Navigation = dynamic(() => import("./components/Navigation"), {
  ssr: false,
  loading: () => <div className="hidden">Loading Navigation...</div>,
});

const Services = dynamic(() => import("./components/Services"), { 
  ssr: false,
  loading: () => <div className="hidden">Loading Services...</div>,
});

const SliderSection = dynamic(() => import("./components/SliderSection"), {
  ssr: false,
  loading: () => <div className="hidden">Loading Slider...</div>,
});

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [componentsLoaded, setComponentsLoaded] = useState(false);
  
  // Create refs for each section
  const servicesRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Start loading all components immediately
    Promise.all([
      import("./components/AboutSection"),
      import("./components/ContactUs"),
      import("./components/Footer"),
      import("./components/GoogleMap"),
      import("./components/Navigation"),
      import("./components/Services"),
      import("./components/SliderSection")
    ]).then(() => {
      setComponentsLoaded(true);
    });

    // Set the loading timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  

  return (
    <div className="container-xl h-screen w-full border">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navigation />
          <SliderSection />
          <Services ref={servicesRef} />
          <AboutSection ref={aboutRef} />
          <ContactUs ref={contactRef} />
          <GoogleMap />
          <Footer />
        </>
      )}
      
      {/* Hidden container to pre-load components */}
      {!loading && !componentsLoaded && (
        <div className="hidden">
          <Navigation />
          <SliderSection />
          <Services ref={servicesRef} />
          <AboutSection ref={aboutRef} />
          <ContactUs ref={contactRef} />
          <GoogleMap />
          <Footer />
        </div>
      )}
    </div>
  );
}