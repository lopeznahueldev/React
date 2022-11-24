import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const { addToCart } = useContext(CartContext);

    const onAdd = (quant) => {
        setItemCount(quant);
        addToCart(item);
    }

    return (
        <>
        {
            item
            ? 
            <>
                <div>
                    <div>
                        <img src={item.image} />
                    </div>
                    <div>
                        <h3>{item.name}</h3>
                        <h5>Quantity: {item.quant}</h5>
                        <h4>${item.price}.00</h4>
                    </div>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart'><button>CheckOut</button></Link>
                    }
                </div>
            </>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;