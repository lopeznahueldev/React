import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../../utils/firestoreFetch";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([])
    const { idCategory } = useParams()

    useEffect(() => {
        firestoreFetch(idCategory)
            .then(response => setDatos(response))
            .catch(ERROR => console.log(ERROR))
    }, [idCategory]);

    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);
    
    return(
        <ItemList items={datos}/>
    );
}

export default ItemListContainer;