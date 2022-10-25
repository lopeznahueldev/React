import { BsCart2 } from 'react-icons/bs';

const Header = () => {
    return (
        <header>
            <h1 className='logo'>ReactStore</h1>
            <nav>
                <a href="#" className="nav-link">Categoría 1</a>
                <a href="#" className="nav-link">Categoría 2</a>
                <a href="#" className="nav-link">Categoría 3</a>
            </nav>
            <BsCart2 className='cart' value="13"/>
        </header>
    )
}

export default Header;