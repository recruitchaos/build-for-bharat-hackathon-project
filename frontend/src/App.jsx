import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Account } from './pages/Account';

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/account" element={<Account />}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
