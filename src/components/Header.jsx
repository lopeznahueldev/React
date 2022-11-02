import CartWidget from './CartWidget.jsx';
import ItemListContainer from './ItemListContainer';

const Header = () => {
    return (
        <header>
            <h1 className='logo'>ReactStore</h1>
            <nav className='itemList'>
                <ItemListContainer
                    itemUno = "Categoría 1"
                    itemDos = "Categoría 2"
                    itemTres = "Categoría 3"
                />
            </nav>
            <CartWidget />
        </header>
    )
}

export default Header;