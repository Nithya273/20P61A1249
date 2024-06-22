
import React, { useState, useEffect } from 'react';

interface Product {
  id: number; 
  name: string; 
  price: number;
  rating: number;
  discount: number;
  availability: string;
}

const Products: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: 'Laptop Model A',
      price: 999.99,
      rating: 4.5,
      discount: 10,
      availability: 'In Stock'
    },
    {
      id: 2,
      name: 'Laptop Model B',
      price: 799.99,
      rating: 4.0,
      discount: 15,
      availability: 'In Stock'
    },
    {
      id: 3,
      name: 'Laptop Model C',
      price: 1199.99,
      rating: 4.8,
      discount: 5,
      availability: 'Limited Stock'
    },
    {
      id: 4,
      name: 'Laptop Model D',
      price: 699.99,
      rating: 3.8,
      discount: 20,
      availability: 'Out of Stock'
    },
    {
      id: 5,
      name: 'Laptop Model E',
      price: 499.99,
      rating: 3.5,
      discount: 25,
      availability: 'In Stock'
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate a delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setData(products);
        setLoading(false);
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center py-10 text-blue-800">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700"><strong>Price:</strong> ${product.price.toFixed(2)}</p>
            <p className="text-gray-700"><strong>Availability:</strong> {product.availability}</p>
            <p className="text-gray-700"><strong>Rating:</strong> {product.rating}</p>
            <p className="text-gray-700"><strong>Discount:</strong> {product.discount}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
