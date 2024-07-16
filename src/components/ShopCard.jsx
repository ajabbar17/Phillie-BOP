"use client"
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import React from 'react'


const ShopCard = ({ name, price, imageUrl }) => {
    const { cart, setCart } = useCart();
    const router = useRouter();

    const addToCart = () => {
        const productIndex = cart.findIndex((item) => item.name === name);

        
    
        if (productIndex !== -1) {
          const newCart = [...cart];
          newCart[productIndex].quantity += 1;
          setCart(newCart);
        } else {
          setCart([...cart, {  name, price, imageUrl, quantity: 1 }]);
        }
    
        console.log(cart);
        router.push("/cart")
      };

  return (
    <div className="w-auto md:w-1/5">
    <img
    src={imageUrl}
      alt="Worthy"
      className="aspect-[3/2]"
      layout="responsive"
      
    />
    <div className="flex justify-between py-4">
      <div className="font-bold text-xl mb-2 text-white">{name}</div>
      <p className="text-gray-400 text-xl pb">${price.toFixed(2)}</p>
    </div>
    <div className=" pt-4 pb-2">
      <button className="bg-white text-black font-bold p-3 md:py-4 md:px-6 w-full rounded-full"
        
        onClick={addToCart}
      >
        ADD TO CART
      </button>
    </div>
  </div>
  )
}

export default ShopCard