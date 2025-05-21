import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Navbar from './Headers/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <BrowserRouter>
    //   <Navbar /> {/* Always visible */}
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/projects" element={<Projects />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    //   {/* <Footer/> */}
    // </BrowserRouter>
    <div>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
