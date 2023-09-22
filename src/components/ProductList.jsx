import React, { useState } from 'react';
import ProductModal from './ProductModal'; // Import the ProductModal component

const ProductList = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={`${product.id}-${index}`} 
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:cursor-pointer hover:shadow-xl transition-transform transform hover:scale-105"
            onClick={() => handleProductClick(product)}>
            <img src={product.thumbnail} alt={product.title} className="w-full h-auto" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && <ProductModal product={selectedProduct} onClose={handleCloseModal} />}
    </div>
  );
};

export default ProductList;
