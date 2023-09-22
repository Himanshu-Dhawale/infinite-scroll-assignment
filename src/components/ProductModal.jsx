import React from 'react';

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="text-center">
          <img src={product.thumbnail} alt={product.title} className="w-32 h-32 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-600 text-sm mb-4">{product.description}</p>
          <p className="text-gray-700 text-lg mb-2">Price: ${product.price.toFixed(2)}</p>
          <p className="text-gray-700 text-lg mb-2">Rating: {product.rating}</p>
          <p className="text-gray-700 text-lg">In Stock: {product.stock} units</p>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
