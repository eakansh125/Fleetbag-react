import './App.css';
import { Routes, Route } from "react-router-dom";
import {Navbar, Footer, Home, Login, Signup, ProductListing} from "./ComponentImporter"


function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/product' element={<ProductListing />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
