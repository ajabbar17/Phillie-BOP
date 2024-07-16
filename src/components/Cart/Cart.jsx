"use client"
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

import React, { useEffect, useState } from 'react';

const CartItem = ({ item }) => {
    const { cart, setCart } = useCart();

    const increaseQuantity = () => {
        setCart(cart.map(cartItem => 
            cartItem.name === item.name 
                ? { ...cartItem, quantity: cartItem.quantity + 1 } 
                : cartItem
        ));
    };

    const decreaseQuantity = () => {
        setCart(cart.map(cartItem => 
            cartItem.name === item.name && cartItem.quantity >= 1
                ? { ...cartItem, quantity: cartItem.quantity - 1 } 
                : cartItem
        ));
    };

    const removeItem = () => {
        setCart(cart.filter(cartItem => cartItem.name !== item.name));
    };

    return (
        item.quantity > 0 && (
            <div className="flex flex-col md:justify-between items-start gap-5 md:flex-row md:items-center py-4 border-b border-[#424141]">
                <div className="flex items-center">
                    <img src={item.imageUrl} alt={item.name} width={100} height={100} className="mr-4" />
                    <div>
                        <h2 className="text-white text-lg">{item.name}</h2>
                        <p className="pb">${item.price}</p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className='bg-[#333331] md:p-3'>
                        <button className="px-2 text-white" onClick={decreaseQuantity}>-</button>
                        <span className="mx-2 text-white">{item.quantity}</span>
                        <button className="px-2 text-white" onClick={increaseQuantity}>+</button>
                    </div>
                    <button className="text-white" onClick={removeItem}>Remove</button>
                </div>
            </div>
        )
    );
};




const Cart = () => {
  const { cart, setCart } = useCart();

  useEffect(() => {
      // Retrieve the cart from local storage when the component mounts
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
          setCart(JSON.parse(storedCart));
      }
  }, [setCart]);

  useEffect(() => {
      // Save the cart to local storage whenever it changes
      if (cart.length > 0) {
        
        localStorage.setItem('cart', JSON.stringify(cart));
      }
  }, [cart]);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const test = () => {
      console.log(cart);
      console.log(localStorage)
  };

  return (
      <div className="flex flex-col md:flex-row justify-between px-10 ps-28 py-10">
          <div className="w-full md:w-3/5">
              <h1 className="text-6xl pb mb-6">Your Cart</h1>
              {cart.length === 0 ? (
                  <p className="text-white">Your cart is empty</p>
              ) : (
                  cart.map(item => (
                      <CartItem key={item.id} item={item} />
                  ))
              )}
          </div>
          <div className="w-full md:w-1/3 bg-[#131211] p-10 mt-5 md:mt-28">
              <h2 className="text-white text-xl font-bold mb-4">SUMMARY</h2>
              <div className="flex justify-between border-b border-[#424141] pb-3 text-white mb-4">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b border-[#424141] pb-3 text-white mb-4">
                  <span>Shipping</span>
                  <span>Free</span>
              </div>
              <div className="flex justify-between border-b border-[#424141] pb-3 text-white mb-4">
                  <span>Tax</span>
                  <span>Not Included</span>
              </div>
              <div className="flex justify-between text-white mt-7 mb-6 text-xl">
                  <span className="font-bold">Total Price</span>
                  <span className="pb font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <button className="w-full py-3 bg-white text-black font-bold rounded-full" onClick={test}>CHECKOUT</button>
          </div>
      </div>
  );
};

export default Cart;