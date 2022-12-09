import { useContext } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { CartContext } from '../main/CartContext';

const CartWidget = () => {
    const test = useContext(CartContext)
    return (
        <div className='cartContainer'>
            <BsCart2 className='cart'/>
            {test.calcTotalQty()>0 && <span className='quantCart'>{test.calcTotalQty()}</span>}
        </div>
    )
}

export default CartWidget;