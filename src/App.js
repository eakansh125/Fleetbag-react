import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
    </div>
  );
}

export default App;
