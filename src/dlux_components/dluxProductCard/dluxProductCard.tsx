'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface DluxProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  materials: string;
  price: string;
  inStock: boolean;
  colors: string[];
  bgColor?: string;
  textColor?: string;
}

export const DluxProductCard: React.FC<DluxProductCardProps> = ({
  imageUrl,
  title,
  description,
  materials,
  price,
  inStock,
  colors,
  bgColor = '#f3f4f6',
  textColor = '#1f2937',
}) => {
  const [activeTab, setActiveTab] = useState<'Description' | 'Materials'>('Description');

  const fallbackImage =
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const validImageUrl = imageUrl && imageUrl.trim() !== '' ? imageUrl : fallbackImage;

  return (
    <div
      className="max-w-sm rounded-lg overflow-hidden shadow p-4"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="w-full h-48 relative rounded-md overflow-hidden">
        <Image
          src={validImageUrl}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-md"
        />
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm mb-2">{inStock ? 'In stock' : 'Out of stock'}</p>

        <div className="flex gap-2 mb-4">
          {(Array.isArray(colors) ? colors : []).map((color, i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-lg font-medium">{price}</p>
        </div>

        <button
          disabled={!inStock}
          className={`w-full py-2 rounded ${
            inStock ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {inStock ? 'Add to cart' : 'Out of stock'}
        </button>

        {/* Tabs */}
        <div className="mt-4">
          <div className="flex gap-4 mb-2 text-sm font-medium">
            <button
              className={activeTab === 'Description' ? 'underline' : 'text-gray-400'}
              onClick={() => setActiveTab('Description')}
            >
              Description
            </button>
            <button
              className={activeTab === 'Materials' ? 'underline' : 'text-gray-400'}
              onClick={() => setActiveTab('Materials')}
            >
              Materials
            </button>
          </div>
          <p className="text-sm leading-relaxed">
            {activeTab === 'Description' ? description : materials}
          </p>
        </div>
      </div>
    </div>
  );
};
