import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import GospelTracts from './pages/GospelTracts';
import StopTracts from './pages/StopTracts';
import Discipleship from './pages/Discipleship';
import SalvationQuiz from './pages/SalvationQuiz';
import Resources from './pages/Resources';
import About from './pages/About';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import './styles/index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gospel-tracts" element={<GospelTracts />} />
            <Route path="/stop-tracts" element={<StopTracts />} />
            <Route path="/discipleship" element={<Discipleship />} />
            <Route path="/salvation-quiz" element={<SalvationQuiz />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

