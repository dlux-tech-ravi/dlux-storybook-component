'use client';

import React, { useEffect, useState } from 'react';
import { DluxProductCard } from '@/dlux_components/dluxProductCard/dluxProductCard';
import { DluxLoader } from '@/dlux_components/dluxLoader/DluxLoader';

interface Product {
  id: string;
  imageUrl?: string;
  title: string;
  description: string;
  materials: string;
  price: string;
  inStock: boolean;
  colors: string[];
  bgColor?: string;
  textColor?: string;
}

export default function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  fetch('https://6866493189803950dbb207ce.mockapi.io/dlux-component/product-data')
    .then((res) => res.json())
    .then((data) => {
      const fixedData = data.map((item) => ({
        ...item,
        colors: Array.isArray(item.colors)
          ? item.colors
          : JSON.parse(item.colors ?? '[]'), // convert string to array
      }));
      setProducts(fixedData);
      setLoading(false);
    })
    .catch((err) => {
      console.error('Error fetching products:', err);
      setLoading(false);
    });
}, []);


  if (loading) {
    return <div className="p-10 text-center text-lg">
     <DluxLoader
  autoProgress
  color="#6366f1"
  duration={3000}
  label="Loading..."
  loaderType="percentage"
  size="md"
  variant="inline"
/>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">DLUX Product Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <DluxProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
