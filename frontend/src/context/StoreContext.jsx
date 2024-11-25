import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

   const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({...prev,[itemId]:1}))
    }
    else {
      setCartItems((prev)=>({...prev, [itemId]: prev[itemId]+1}))
    }
  }

   const removeFromCart = (itemId) => {
     setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
   }
  
   useEffect(() => {
     console.log(cartItems);
   }, [cartItems]);
   
  
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart
  }
  
  return (
    <StoreContext.Provider value={contextValue}
    > {props.children}

    </StoreContext.Provider>
  )
}
export default StoreContextProvider;







































// import { createContext, useEffect, useState } from 'react';
// import { food_list } from '../assets/assets';

// export const StoreContext = createContext(null);

// const StoreContextProvider = props => {
//   const [cartItems, setCartItems] = useState({});

//   const addToCart = itemId => {
//     setCartItems(prev => ({
//       ...prev,
//       [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
//     }));
//   };

//   const removeFromCart = itemId => {
//     setCartItems(prev => {
//       if (prev[itemId] > 1) {
//         return { ...prev, [itemId]: prev[itemId] - 1 };
//       } else {
//         const { [itemId]: _, ...rest } = prev; // Remove item if count is 0
//         return rest;
//       }
//     });
//   };

//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   const contextValue = {
//     food_list,
//     cartItems,
//     addToCart,
//     removeFromCart,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;
