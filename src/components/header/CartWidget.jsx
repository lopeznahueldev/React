import { BsCart2 } from 'react-icons/bs';

const CartWidget = () => {
    return (
        <div className='cartContainer'>
            <BsCart2 className='cart'/>
            <span className='quantCart'>
                13
            </span>
        </div>
    )
}

export default CartWidget;