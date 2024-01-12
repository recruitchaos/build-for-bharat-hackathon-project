import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Account } from './pages/Account';
import { CategoryWiseProductPage } from './components/CategoryWiseProductPage';
import { ProductPage } from './pages/ProductPage';

function App() {


  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/account" element={<Account />}/>
              <Route path='/products/:type' element={<ProductPage/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
