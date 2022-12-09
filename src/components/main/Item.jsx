import { Link } from "react-router-dom"

const Item = ({ id, imageUrl, name, quant, price }) => {

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
        </div>
    )
}

export default Item;