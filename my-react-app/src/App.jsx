import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/navbar';
import Homepage from './components/HomePage/homePage';
import Aboutpage from './components/AboutPage/about';
import Portfoliopage from './components/ProjectsPage/portfolio';
import Contactpage from './components/ContactPage/contact';



function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="portfolio" element={<Portfoliopage />} />
        <Route path="contact" element={<Contactpage />} />
      </Routes>
    </Router>
  );
}


export default App
