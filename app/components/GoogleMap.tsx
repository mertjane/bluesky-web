import React from "react";

const GoogleMap = () => {
  return (
    <section id="gMap" className="pt-10 h-screen border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="gMap-heading text-3xl font-bold text-gray-900 sm:text-4xl pb-14">
          Find Us
        </h2>
        <iframe
          src={process.env.NEXT_PUBLIC_GMAP_URL}
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Blue Sky Alterations - Rottingdean"
        ></iframe>
      </div>
    </section>
  );
};


GoogleMap.displayName = 'GoogleMap';
export default GoogleMap;
