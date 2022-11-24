import { useState, createContext } from "react";

export const CartContext = createContext();


const CartContextProvider = (props) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item) => {
        setCartList([item])
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, deleteItem}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;