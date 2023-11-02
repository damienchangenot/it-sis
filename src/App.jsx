import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Societe from './components/Societe/Societe'
import Metier from './components/Metiers/Metier'
import Recrutement from './components/Recrutement/Recrutement'
import Contact from './components/Contact/Contact'
import Partenaires from './components/Partenaires/Partenaires'
import './App.css'
import {  Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <header><NavBar></NavBar></header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/societe" element={<Societe/>}></Route>
        <Route path="/metiers" element={<Metier/>}></Route>
        <Route path="/recrutement" element={<Recrutement/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/partenaires" element={<Partenaires/>}></Route>
      </Routes>
    </main>
    <Footer></Footer>
    </>
  )
}

export default App
