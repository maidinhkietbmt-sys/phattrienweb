
import React from 'react';
import { Product } from '../types';

interface Props {
  product: Product;
  onSelect: (p: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, onSelect }) => {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md border border-stone-200 transition-transform hover:-translate-y-1 cursor-pointer"
      onClick={() => onSelect(product)}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold text-stone-800 mb-1">{product.name}</h3>
        <p className="text-stone-500 text-sm mb-3 line-clamp-1">{product.shortDescription}</p>
        <div className="text-[#C62828] font-bold text-lg">
          {product.priceBase.toLocaleString('vi-VN')}₫ <span className="text-stone-400 text-sm font-normal">/ 250g</span>
        </div>
        <button 
          className="mt-4 w-full py-2 bg-[#4E342E] text-white rounded-md hover:bg-[#3E2723] transition-colors uppercase text-sm font-semibold tracking-wide"
        >
          Chi Tiết / Mua Ngay
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
