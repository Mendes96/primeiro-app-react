import './App.css'
import Header from './components/00 - Header/Header'
import Clientes from './components/02 - Clientes/Clientes';
import Home from './components/01 - Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<Clientes />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
