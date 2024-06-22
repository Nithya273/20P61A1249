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
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE5MDM0MjUwLCJpYXQiOjE3MTkwMzM5NTAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjY4OTkyYTI1LTJiN2QtNDc3Ni05ZGY2LTEwZjIxMDgxZjcyMiIsInN1YiI6Im5pdGh5YWt1bWJoZW1AZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiI2ODk5MmEyNS0yYjdkLTQ3NzYtOWRmNi0xMGYyMTA4MWY3MjIiLCJjbGllbnRTZWNyZXQiOiJmUWx5a3BrdVZjSlVuZlpQIiwib3duZXJOYW1lIjoiTml0aHlhIEt1bWJoZW0iLCJvd25lckVtYWlsIjoibml0aHlha3VtYmhlbUBnbWFpbC5jb20iLCJyb2xsTm8iOiIyMFA2MUExMjQ5In0.GBzvoAoiKyNr723UJbj6CqJpVoVQYNihBU3OYszbg1U";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data: Product[] = await response.json();
        setData(data);
        setLoading(false);
        console.log(data); 
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((product) => (
          <div className='grid'>
             <li key={product.id}>{product.name}</li>
             <li>{product.price}</li>
             <li>{product.availability}</li>
             <li>{product.rating}</li>
             <li>{product.discount}</li>
             <li>{product.name}</li>
          </div>
         
          
        ))}
      </ul>
    </div>
  );
};

export default Products;
