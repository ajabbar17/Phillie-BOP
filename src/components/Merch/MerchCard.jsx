"use client"
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import React from 'react'


const MerchCard = ({ name, price, imageUrl }) => {
    const { cart, setCart } = useCart();
    const router = useRouter();
    const addToCart = () => {
        const productIndex = cart.findIndex((item) => item.name === name);

        
    
        if (productIndex !== -1) {
          const newCart = [...cart];
          newCart[productIndex].quantity += 1;
          setCart(newCart);
        } else {
          setCart([...cart, { name, price, imageUrl, quantity: 1 }]);
        }
    
        console.log(cart);
        router.push("/cart")

      };

  return (
    <div className="w-auto md:w-1/3">
    <img
    src={imageUrl}
      alt="Worthy"
      className="w-full"
      layout="responsive"
      objectfit="cover"
    />
    <div className="flex justify-between py-4">
      <div className="font-bold text-2xl mb-2 text-white">{name}</div>
      <p className="text-gray-400 text-xl pb">${price.toFixed(2)}</p>
    </div>
    <div className=" pt-4 pb-2">
      <button className="bg-white text-black font-bold  md:py-4 p-3 md:px-6 w-full rounded-full"
        
        onClick={addToCart}
      >
        ADD TO CART
      </button>
    </div>
  </div>
  )
}

export default MerchCard