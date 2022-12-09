import { useEffect, useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial+1) {
            setCount(count - 1);
        }
    }
    return (
        <div className='countDetail'>
            <button className='buttonCount' onClick={increment}>+</button>
            <h4>{count}</h4>
            <button className='buttonCount' onClick={decrement}>-</button>
            {
                stock && count
                ? <button className='buttonCount' onClick={() => onAdd(count)}>Add to Cart</button>
                : <button className='buttonCount' >Add to Cart</button>
            }
            
        </div>
    );
}

export default ItemCount;