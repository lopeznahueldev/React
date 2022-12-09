import CartWidget from './CartWidget';
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
                <h1 className='logo'><Link to='/'>CLOTHING</Link></h1>
                <nav className='itemList'>
                    <ul>
                        <li><Link to='/category/1'>HOODIE</Link></li>
                        <li><Link to='/category/2'>SHIRT</Link></li>
                        <li><Link to='/category/3'>SHOE</Link></li>
                    </ul>
                </nav>
                <Link to='/cart'><CartWidget /></Link>
        </header>
    )
}

export default Header;