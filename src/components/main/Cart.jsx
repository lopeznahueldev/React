import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import {collection, serverTimestamp, updateDoc, increment, doc, setDoc} from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";

const Cart = () => {
    const test = useContext(CartContext);

    const createOrder = () => {
      let order = {
        buyer: {
          name: 'Quentin Tarantino',
          email: 'quentin@tarantino.com',
          phone: '+54 13 6669-1312',
        },
        items: test.cartList.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quant,
        })),
        date: serverTimestamp(),
        total: test.calcTotal(),
    }
    const createOrderInDB = async() => {
        const newOrderRef = doc(collection(db, "orders"))
        await setDoc(newOrderRef, order)
        return newOrderRef
    }

    createOrderInDB()
        .then(response => {
            alert('SE CREÓ TU ORDEN DE COMPRA CON ID =', response.id)
            test.cartList.forEach(async(item) => {
                const itemRef = doc(db, "products", item.id);
                await updateDoc(itemRef, {
                    quant: increment(-item.quant)
                });
            })
            test.removeList()
        })
        .catch(ERROR => console.log(ERROR))
    }

    return (
        <div className="Cart">
            <h1>CART</h1>
            <div className="topCart">
                <Link to='/'><button className="button">CONTINUE SHOPPING</button></Link>
                {
                    (test.cartList.length > 0)
                    ? <button className="button" type="filled" onClick={test.removeList}>DELETE ALL PRODUCTS</button>
                    : <h6>YOUR CART IS EMPTY</h6>
                }
            </div>
            <div className="contentCart">
                <div className="info">
                    {
                        test.cartList.length > 0 &&
                            test.cartList.map(item => 
                            <div className="product" key={item.id}>
                                <div className="productDetail">
                                    <img className="imgCart" src={item.image} />
                                    <div>
                                        <b>PRODUCT: {item.name}</b>
                                        <h5>{item.quant} ITEM(S)</h5>
                                        <h4>${item.price}</h4>
                                        <h3>TOTAL ${test.calcTotalPerItem(item.id)} </h3>
                                        <button className="button" onClick={() => test.deleteItem(item.id)}>DELETE</button>
                                    </div>
                                </div>
                            </div>
                            )
                    }
                </div>
                {
                    test.cartList.length > 0 &&
                        <div className="order">
                            <h2>ORDER SUMMARY</h2>
                            <div>
                                <h4>SUBTOTAL</h4>
                                <h4>${test.calcSubTotal()}</h4>
                            </div>
                            <div>
                                <h2>TOTAL</h2>
                                <h2>${test.calcTotal()}</h2>
                            </div>
                            <button className="button" onClick={createOrder}>CHECKOUT NOW</button>
                        </div>
                }
            </div>
        </div>
    );
}

export default Cart;