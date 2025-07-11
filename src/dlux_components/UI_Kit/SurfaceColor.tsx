import React from 'react';

const surfaceColors = [
  { label: 'surface-primary', className: 'bg-surface-primary' },
  { label: 'surface-secondary', className: 'bg-surface-secondary' },
  { label: 'surface-tertiary', className: 'bg-surface-tertiary' },
  { label: 'surface-invert', className: 'bg-surface-invert' },
  { label: 'surface-accent', className: 'bg-surface-accent' },
  { label: 'surface-accent-secondary', className: 'bg-surface-accentsecondary' },
  { label: 'surface-disabled', className: 'bg-surface-disabled' },
  { label: 'surface-error', className: 'bg-surface-error' },
  { label: 'surface-success', className: 'bg-surface-success' },
];

export default function SurfaceColor() {
  return (
    <div className="bg-white p-4 sm:p-6 md:p-10 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-4">Surface Colours</h2>
        <hr className="mb-6 border-gray-300" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {surfaceColors.map(({ label, className }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <div
                className={`w-24 sm:w-28 md:w-32 h-20 sm:h-24 md:h-28 rounded-md shadow-md transition-transform transform hover:scale-105 ${className}`}
              />
              <p className="text-xs sm:text-sm text-gray-700 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
