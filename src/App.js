import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//styles
import styles from './App.module.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Howtouse from './pages/Howtouse/Howtouse';



export default function App() {
  return (
    <div className={styles.App}>
        <BrowserRouter>
            <Header/>
            <Routes>
              <Route path="/" element={ <Home/> } />
              <Route path="/about" element={ <About/> } />
              <Route path="/howtouse" element={ <Howtouse/>} />
            </Routes>
        </BrowserRouter>
        <BrowserRouter>
            <Footer/>
        </BrowserRouter>
    </div>

  

  
  )
}

