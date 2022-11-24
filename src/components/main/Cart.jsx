import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const { cartList, deleteItem } = useContext(CartContext)

    return (
        <>
        <h1>CART</h1>
        {
            cartList.length === 0
            ?<h6>YOUR CART IS EMPTY</h6>
            : cartList.map(item => <div>{item.name} Quantity: {item.quant} ${item.price}.00 <button onClick={() => deleteItem(item.id)}>DELETE PRODUCT</button></div>)
        }
        </>
    )
}

export default Cart;