import CardItem from "./CardItem";
import customFetch from "../../utils/customFetch";
import Products from "../../utils/Products";

const CardContainer = () => {
        customFetch(1100, Products)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
    

    return(
        <div>
            <CardItem
                id={Products.id}
                image={Products.image}
                name={Products.name}
                quant={Products.quant}
                price={Products.price}
             />
        </div>
    )
}

export default CardContainer;