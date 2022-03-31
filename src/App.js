import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;
