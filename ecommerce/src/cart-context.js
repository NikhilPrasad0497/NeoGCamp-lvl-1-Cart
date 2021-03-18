import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({children}){
    const [cart, setcart] = useState([])
    return (
        <CartContext.Provider value={{cart, setcart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext)
}