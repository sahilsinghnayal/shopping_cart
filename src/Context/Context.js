import React, { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer } from "./Reducers";
const cart = createContext();
function Context({ children }) {
  const product = [...Array(20)].map(() => ({       // ...Array(20) it create array with 20 undifined element
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));
  console.log(product);
 //////////////////////////////////////////////////////////////////////////////////////
  const [state, dispatch] = useReducer(cartReducer, {
    product: product,
    cart: [],
  });
  return <cart.Provider value={{ state,dispatch }}>{children}</cart.Provider>;
}

export default Context;
export const CartState=()=>{
  return  useContext(cart);
  
}