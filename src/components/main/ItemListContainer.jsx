import ItemList from "./ItemList";
import customFetch from "../../utils/customFetch";
import products from "../../utils/products";
import { useEffect, useState } from "react";

const ItemListContainer = ({ greeting}) => {
    const [datos, setDatos] = useState([])

    useEffect(() => {
        customFetch(2000, products)
        .then(resp => setDatos(resp))
        .catch(err => console.log(err))
    }, [])
    
    return(
        <>
        <ItemList items={datos}/>
        </>
    )
}

export default ItemListContainer;