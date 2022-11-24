import "../../style/cardItem.css"
import {Link} from "react-router-dom"
import { CartContext } from './CartContext';
import { useContext } from 'react';

const Item = ({ id, imageUrl, name, quant, price }) => {
    const { addToCart } = useContext(CartContext);

    return(
        <div className="cardItem">
            <Link to={`/item/${id}`}>
                <img src={imageUrl} />
                <div>
                    <h3>{name}</h3>
                    <h5>Quantity: {quant}</h5>
                    <h4>${price}.00</h4>
                </div>
            </Link>
            <hr />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Item;