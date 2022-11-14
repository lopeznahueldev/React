import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';

const Header = () => {
    return (
        <header>
                <h1 className='logo'>CLOTHING</h1>
                <nav className='itemList'>
                    <ItemListContainer
                        itemUno = "HOODIE"
                        itemDos = "SHIRT"
                        itemTres = "SHOE"
                    />
                </nav>
                <CartWidget />
        </header>
    )
}

export default Header;