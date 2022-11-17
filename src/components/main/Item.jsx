import "../../style/cardItem.css"
import ButtonAddCart from './ButtonAddCart';

const Item = ({ imageUrl, name, quant, price }) => {
    return(
        <div className="cardItem">
            <img src={imageUrl} />
            <div>
                <h3>{name}</h3>
                <h5>Quantity: {quant}</h5>
                <h4>${price}.00</h4>
            </div>
            <hr />
            <ButtonAddCart />
        </div>
    )
}

export default Item;