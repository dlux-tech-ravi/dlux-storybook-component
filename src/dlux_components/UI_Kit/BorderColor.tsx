import React from 'react';

const borderColors = [
  { label: 'border-primary', border: 'border-primary' ,background : 'bg-bordercolour-borderprimary'},
  { label: 'border-secondary', border: 'border-secondary',background : 'bg-bordercolour-bordersecondary' },  
  { label: 'border-invert', border: 'border-invert' ,background : 'bg-bordercolour-borderinvert'},
  { label: 'border-accent', border: 'border-accent' ,background : 'bg-bordercolour-borderaccent'}, 
  { label: 'border-error', border: 'border-error',background : 'bg-bordercolour-bordererror' },
  { label: 'border-success', border: 'border-success',background : 'bg-bordercolour-bordersuccess' },
];

export default function BorderColor() {
  return (
    <div className="p-4 sm:p-6 md:p-10 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-4">Border Colours</h2>
        <hr className="mb-6 border-gray-300" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-8">
          {borderColors.map(({ label, border, background }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <div
                className={`w-24 sm:w-28 md:w-32 h-20 sm:h-24 md:h-28 ${background} border-4 rounded-xl shadow-md transition-transform transform hover:scale-105 ${border}`}
              />
              <p className="text-xs sm:text-sm text-gray-700 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
