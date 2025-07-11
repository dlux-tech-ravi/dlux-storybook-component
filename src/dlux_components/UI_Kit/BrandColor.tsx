import React from 'react';

const brandColorGroups = [
  {
    name: 'Seaweed',
    main: 'bg-seaweed-500',
    shades: [
      { label: '50', className: 'bg-seaweed-50' },
      { label: '100', className: 'bg-seaweed-100' },
      { label: '200', className: 'bg-seaweed-200' },
      { label: '300', className: 'bg-seaweed-300' },
      { label: '400', className: 'bg-seaweed-400' },
      { label: '500-brand', className: 'bg-seaweed-500' },
            { label: '600', className: 'bg-seaweed-600' },
      { label: '700', className: 'bg-seaweed-700' },
      { label: '800', className: 'bg-seaweed-800' },
      { label: '900', className: 'bg-seaweed-900' },
    ],
  },
  {
    name: 'Light Seaweed',
    main: 'bg-lightseaweed-500',
    shades: [
      { label: '50', className: 'bg-lightseaweed-50' },
      { label: '100', className: 'bg-lightseaweed-100' },
      { label: '200', className: 'bg-lightseaweed-200' },
      { label: '300', className: 'bg-lightseaweed-300' },
      { label: '400', className: 'bg-lightseaweed-400' },
      { label: '500-brand', className: 'bg-lightseaweed-500' },
      { label: '600', className: 'bg-lightseaweed-600' },
      { label: '700', className: 'bg-lightseaweed-700' },
      { label: '800', className: 'bg-lightseaweed-800' },
      { label: '900', className: 'bg-lightseaweed-900' },
    ],
  },
  {
    name: 'Dark Teal',
    main: 'bg-darkteal-500',
    shades: [
      { label: '50', className: 'bg-darkteal-50' },
      { label: '100', className: 'bg-darkteal-100' },
      { label: '200', className: 'bg-darkteal-200' },
      { label: '300', className: 'bg-darkteal-300' },
      { label: '400', className: 'bg-darkteal-400' },
      { label: '500-brand', className: 'bg-darkteal-500' },
      { label: '600', className: 'bg-darkteal-600' },
      { label: '700', className: 'bg-darkteal-700' },
      { label: '800', className: 'bg-darkteal-800' },
      { label: '900', className: 'bg-darkteal-900' },
    ],
  },
  {
    name: 'Onyx',
    main: 'bg-onyx-500',
    shades: [
      { label: '50', className: 'bg-onyx-50' },
      { label: '100', className: 'bg-onyx-100' },
      { label: '200', className: 'bg-onyx-200' },
      { label: '300', className: 'bg-onyx-300' },
      { label: '400', className: 'bg-onyx-400' },
      { label: '500-brand', className: 'bg-onyx-500' },
      { label: '600', className: 'bg-onyx-600' },
      { label: '700', className: 'bg-onyx-700' },
      { label: '800', className: 'bg-onyx-800' },
      { label: '900', className: 'bg-onyx-900' },
    ],
  },
];

export default function BrandColor() {
  return (
    <div className="bg-white p-10 font-sans text-gray-800">
       <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-4">Branded Colours</h2>
        <hr className="mb-6 border-gray-300" />
      <div className="max-w-7xl mx-auto space-y-12">
        
        {brandColorGroups.map(({ name, main, shades }) => (
          <div
            key={name}
            className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start"
          >
            {/* Left - Main Brand Color */}
            <div className="flex flex-col items-center md:items-start col-span-1">
              <div
                className={`w-32 h-20 rounded-md border border-gray-200 shadow-md ${main}`}
              />
              <p className="mt-3 text-base font-semibold text-gray-800 text-center md:text-left">
                {name}
              </p>
              <p className="text-sm text-gray-500 text-center md:text-left">
                .{main}
              </p>
            </div>

            {/* Right - Shade Columns */}
            <div className="col-span-1 md:col-span-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {shades.map(({ label, className }) => (
                <div key={label} className="flex flex-col items-center">
                  <div
                    className={`w-20 h-16 rounded-md border border-gray-200 ${className}`}
                  />
                  <p className="text-xs text-gray-600 mt-2 font-medium">{label}</p>
                  <p className="text-xs text-gray-400">{className.replace('bg-', '')}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
