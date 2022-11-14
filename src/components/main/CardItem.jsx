import Image from './Image';
import "../../style/cardItem.css"
import DescrProd from './DescrProd';
import ButtonAddCart from './ButtonAddCart';

const CardItem = (props) => {
    return(
        <div className="cardItem">
            <Image image={props.image} />
            <DescrProd 
                name={props.name}
                quant={props.quant}
                price={props.price}
            />
            <hr />
            <ButtonAddCart />
        </div>
    )
}

export default CardItem;