// components/PizzaItem.tsx

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import veggie from '../public/item/Veggie.jpg';
import fajita from '../public/item/fajita.webp';
import behari from '../public/item/behari.jpg';

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  bgColor: string;
  image: StaticImageData;
}

const pizzaItems: Product[] = [
  {
   
    id: 1,
    title: 'Veggie Delight',
    category: 'Vegetarian',
    price: 749,
    bgColor: 'bg-yellow-500',
    image: veggie,
  },
  {
    id: 2,
    title: 'Fajita',
    category: 'Tropical',
    price: 899,
    bgColor: 'bg-pink-500',
    image: fajita,
  },
  {
    id: 3,
    title: 'Barbecue Chicken',
    category: 'Specialty',
    price: 999,
    bgColor: 'bg-purple-500',
    image: behari,
  },
];

const PizzaItem: React.FC = () => {
  const handleAddToCart = (pizza: Product) => {
    console.log(`${pizza.title} added to cart!`);
    
  };

  return (
    <section className='bg-orange-600 py-8'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-6'> Pizzas Item</h1>
        <div className='flex justify-center space-x-4'>
          {pizzaItems.map((product) => (
            <div
              key={product.id}
              className={`rounded-lg shadow-md overflow-hidden w-64 transition-transform duration-300 hover:scale-105 ${product.bgColor}`}>
              <Image
                src={product.image}
                alt={product.title}
                width={256}
                height={144}
                className='w-full h-40 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold text-white'>{product.title}</h3>
                <p className='text-white text-sm mb-1'>Category: {product.category}</p>
                <span className='text-lg font-bold text-white'>PKR {product.price}</span>
                <div className='mt-2'>
                  <button className='px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition duration-300'>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PizzaItem;