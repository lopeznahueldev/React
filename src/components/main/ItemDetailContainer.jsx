import ItemDetail from "./ItemDetail";
import customFetch from "../../utils/customFetch";
import products from "../../utils/products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);
    const { idItem } = useParams

    useEffect(() => {
        customFetch(2000, products.find(item => item.id == idItem))
        .then(resp => setDato(resp))
        .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;