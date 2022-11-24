import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import Cart from "./components/main/Cart"
import CartContextProvider from "./components/main/CartContext";

const App = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:idCategory" element={<ItemListContainer />} />
                <Route path="/item/:idItem" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App;