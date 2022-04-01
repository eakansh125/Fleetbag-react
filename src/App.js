import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom";
import Navbar from './Reusables/Navbar';
import Footer from './Reusables/Footer';


function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
