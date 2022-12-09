import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item) => {
        let found = cartList.find(product => product.id === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    id: item.id,
                    image: item.image,
                    name: item.name,
                    price: item.price,
                    quant: item.quant,
                }
            ]);
        } else {
            found.quant += item.quant;
            setCartList([
                ...cartList
            ]);
        }
    }
    
    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.id != id);
        setCartList(result);
    }

    const calcTotalPerItem = (id) => {
        let index = cartList.map(item => item.id).indexOf(id);
        return cartList[index].price * cartList[index].quant;
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.id));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTotalQty = () => {
        let qtys = cartList.map(item => item.quant);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    const calcTotal = () => {
        return calcSubTotal();
    }

    return (
        <CartContext.Provider value={{
            cartList, 
            addToCart, 
            removeList, 
            deleteItem, 
            calcTotalPerItem, 
            calcSubTotal, 
            calcTotalQty,
            calcTotal,
        }}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;