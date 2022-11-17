import CartWidget from './CartWidget';

const Header = () => {
    return (
        <header>
                <h1 className='logo'>CLOTHING</h1>
                <nav className='itemList'>
                    <ul>
                        <li>HOODIE</li>
                        <li>SHIRT</li>
                        <li>SHOE</li>
                    </ul>
                </nav>
                <CartWidget />
        </header>
    )
}

export default Header;