import './App.css';
import { Navbar, Footer } from './components';
import GlobalStyle from './Global';
import { Routes, Route } from 'react-router-dom';
import { Login, Product, Products } from './pages';

const App = () => {
    return (
        <div className="App">
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/products" element={<Products />} />
                <Route path="/" />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
