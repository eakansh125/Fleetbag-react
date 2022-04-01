import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import Navbar from './Reusables/Navbar';
import Footer from './Reusables/Footer';



function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
