import React from 'react';

export default function Typography() {
  return (
 <div className="font-sans px-8 py-12 bg-white grid md:grid-cols-2 gap-12 max-w-screen-xl mx-auto">
      {/* Desktop View */}
      <div>
        <div className="mb-6">
          <p className="text-sm text-gray-400">Display / Desktop</p>
          <h1 className="text-display_dsktp">Display</h1>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-gray-400">Headings / Desktop</p>
          
          <h1 >Heading One</h1>
          <h2>Heading Two</h2>
          <h3>Heading Three</h3>
          <h4>Heading Four</h4>
          <h5>Heading Five</h5>
          <h6>Heading Six</h6>
          <p className="text-eyebrow text-gray-600">Eyebrow / Subheading</p>
        </div>
      </div>

      {/* Mobile View */}
      <div>
        <div className="mb-6">
          <p className="text-sm text-gray-400">Display / Mobile</p>
          <h1 className="text-display font-light text-gray-900">Display</h1>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-gray-400">Headings / Mobile</p>
          <h1 className="text-h1 leading-h1">Heading One</h1>
          <h2 className="text-h2 leading-h2">Heading Two</h2>
          <h3 className="text-h3 leading-h3">Heading Three</h3>
          <h4 className="text-h4 leading-h4">Heading Four</h4>
          <h5 className="text-h5 leading-h5">Heading Five</h5>
          <h6 className="text-h6 leading-h6">Heading Six</h6>
          <p className="text-eyebrow text-gray-600">Eyebrow / Subheading</p>
        </div>
      </div>

       <div>
            <div className="mb-6">
            <p className="text-sm text-gray-400">Body / Desktop</p>
            </div>
            <div className="space-y-4">
                <p className='leading-lg text-h5 md:text-h5_dsktp md:leading-h1'>Intro Body</p>
            </div>
        </div>
         <div>
        <div className="mb-6">
          <p className="text-sm text-gray-400">Body / Mobile</p>
        </div>
        <div className="space-y-4">
                <p className='leading-lg text-h5 md:text-h5 md:leading-h1'>Intro Body</p>
            </div>
      </div>
    </div>
  );
}
