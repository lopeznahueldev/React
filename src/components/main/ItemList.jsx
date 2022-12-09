import Item from "./Item";

const ItemList = ({ items }) => {
    return(
        <div className="itemContainer">
            {
                items.map(item => 
                    <Item
                        key={item.id}
                        id={item.id}
                        imageUrl={item.image}
                        name={item.name}
                        quant={item.quant}
                        price={item.price}
                    />
                )
            }
        </div>
    );
}

export default ItemList;