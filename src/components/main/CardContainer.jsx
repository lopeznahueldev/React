import CardItem from "./CardItem";
import products from "../../utils/products";
import customFetch from "../../utils/customFetch";
import { useEffect, useState } from "react";

const CardContainer = () => {
    const [datos, setDatos] = useState([])

    useEffect(() => {
        customFetch(2000, products)
        .then(resp => setDatos(resp))
        .catch(err => console.log(err))
    }, [])
    
    return(
        <>
        {
            datos.map(item => (
                <CardItem
                key={item.id}
                image={item.image}
                name={item.name}
                quant={item.quant}
                price={item.price}
             />
            ))
        }
        </>
    )
}

export default CardContainer;