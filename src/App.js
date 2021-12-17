import './App.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes >
          <Route path="/" exact element={<ProductList />} />
          <Route path="/product/:productId" exact element={<ProductDetail />} />
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
