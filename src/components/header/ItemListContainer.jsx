const ItemListContainer = (props) => {
    return (
        <ul>
            <li>{props.itemUno}</li>
            <li>{props.itemDos}</li>
            <li>{props.itemTres}</li>
        </ul>
    )
}

export default ItemListContainer;