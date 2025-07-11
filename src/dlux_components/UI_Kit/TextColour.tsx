import React from 'react';

const textColors = [
  { label: 'text-primary', className: 'text-primary' },
  { label: 'text-secondary', className: 'text-secondary' },
  { label: 'text-primary-invert', className: 'text-primary-invert', background: "surface-invert"},
  { label: 'text-secondary-invert', className: 'text-secondary-invert', background: "surface-invert"},
  { label: 'text-accent', className: 'text-accent'},
  { label: 'text-accent-secondary', className: 'text-accent-secondary' },
  { label: 'text-link', className: 'text-link' },
  { label: 'text-link-invert', className: 'text-link-invert',background: "surface-invert"},
  { label: 'text-disabled', className: 'text-disabled'},
  { label: 'text-error', className: 'text-error'},
  { label: 'text-success', className: 'text-success'},
];

export default function TextColor() {
  return (
    <div className="bg-white p-4 sm:p-6 md:p-10 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-4">Text Colours</h2>
        <hr className="mb-6 border-gray-300" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {textColors.map(({ label, className, background }) => (
            <div key={label} className={`p-4 border rounded-md shadow-sm bg-${background}`}>
              <p className={`text-2xl font-medium ${className}`}>Aa</p>
              <p className={`text-sm ${className} mt-2`}>{label}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
