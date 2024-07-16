"use client"
import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();


// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return [...state, action.payload];
//     case 'REMOVE_FROM_CART':
//       return state.filter(item => item.id !== action.payload.id);
//     case 'INCREMENT_QUANTITY':
//       return state.map(item =>
//         item.id === action.payload.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//     case 'DECREMENT_QUANTITY':
//       return state.map(item =>
//         item.id === action.payload.id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       );
//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

// //   const [cart, dispatch] = useReducer(cartReducer, []);

// //   const addToCart = product => {
// //     dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
// //   };

// //   const removeFromCart = product => {
// //     dispatch({ type: 'REMOVE_FROM_CART', payload: product });
// //   };

// //   const incrementQuantity = product => {
// //     dispatch({ type: 'INCREMENT_QUANTITY', payload: product });
// //   };

// //   const decrementQuantity = product => {
// //     dispatch({ type: 'DECREMENT_QUANTITY', payload: product });
// //   };

//   return (
//     <CartContext.Provider value={{ cart, setCart }}>
//     {children}
//   </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        console.log('CartProvider mounted');
        return () => {
            console.log('CartProvider unmounted');
        };
    }, []);
  
    return (
      <CartContext.Provider value={{ cart, setCart }}>
        {children}
      </CartContext.Provider>
    );
  };
  
  export const useCart = () => useContext(CartContext);
