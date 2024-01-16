import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Services from './components/Services/Services'
import Ingenierie from './components/Ingenierie/Ingenierie'
import Solutions from './components/Solutions/Solutions'
import Recrutement from './components/Recrutement/Recrutement'
import Contact from './pages/Contact/Contact'
import Partenaires from './components/Partenaires/Partenaires'
import NotFound from './pages/NotFound/NotFound'
import './App.css'
import {  Routes, Route } from 'react-router-dom';
import Observer from 'tailwindcss-intersect';


function App() {
    try {
      Observer.start();
  } catch (e) {
      console.log(e);
  }
  return (
    <>
    <header className="sticky top-0 z-50"><NavBar></NavBar></header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/ingenierie" element={<Ingenierie/>}></Route>
        <Route path="/solutions" element={<Solutions/>}></Route>
        <Route path="/recrutement" element={<Recrutement/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/partenaires" element={<Partenaires/>}></Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </main>
    <Footer></Footer>
    </>
  )
}

export default App
