import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Blue Sky Alterations
            </h3>
            <p className="text-gray-300">
              Professional clothing alterations in Rottingdean
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-300">Windmill Lodge, Vicarage Ln</p>
            <p className="text-gray-300">Rottingdean, Brighton</p>
            <p className="text-gray-300">07771 000260</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Opening Hours</h3>
            <p className="text-gray-300">Monday - Saturday: 9am - 5pm</p>
            <p className="text-gray-300">Sunday: Closed</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            &copy; 2024 Blue Sky Alterations. Developed by DiploDev.
          </p>
        </div>
      </div>
    </footer>
  )
}

Footer.displayName = 'Footer';


export default Footer