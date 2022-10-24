import './App.css';
import Navbar from './common/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Hero from './components/HeroSection/Hero.jsx';
import About from './components/AboutSec/About';
import Gallary from './components/Gallery/Gallary';
import Destina from './components/Destination/Destina';
import SinglePages from './SinglePage/SinglePages';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallary />} />
          <Route path="/destination" element={<Destina />} />
          <Route path="/SinglePages/:id" element={<SinglePages />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
