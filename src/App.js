import { BrowserRouter, Routes, Route } from'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/" element={<Login />} />
        </Routes>  
      </BrowserRouter>
      
    </div>
  );
}

export default App;
