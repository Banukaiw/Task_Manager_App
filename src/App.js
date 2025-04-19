import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PostTask from './components/PostTask/PostTask';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/newpost" element={<PostTask/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
