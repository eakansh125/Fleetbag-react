import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import ProductListing from './Components/Product/ProductListing';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/product' element={<ProductListing />} />
    </Routes>
    </div>
  );
}

export default App;
