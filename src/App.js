// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './components/Inicio'
import Personaje from './components/Personaje'
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    <Navbar brand="Rick and Morty APP"/>
    <div className="contenedor">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
