import ItemDetail from "./ItemDetail";
import { firestoreFetchOne } from "../../utils/firestoreFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(response => setDato(response))
            .catch(ERROR => console.log(ERROR))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;