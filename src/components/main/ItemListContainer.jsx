import ItemList from "./ItemList";
import customFetch from "../../utils/customFetch";
import products from "../../utils/products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([])
    const { idCategory } = useParams()

    useEffect(() => {
        if(idCategory === undefined) {
            customFetch(2000, products)
            .then(resp => setDatos(resp))
            .catch(err => console.log(err))
        } else {
            customFetch(2000, products.filter(item => item.categoryId == idCategory))
            .then(resp => setDatos(resp))
            .catch(err => console.log(err))
        }
    }, [idCategory]);
    
    return(
        <>
        <ItemList items={datos}/>
        </>
    );
}

export default ItemListContainer;