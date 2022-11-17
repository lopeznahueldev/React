import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:idCategory" element={<ItemListContainer />} />
              <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;