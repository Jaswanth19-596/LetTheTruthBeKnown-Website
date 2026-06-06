import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import IntroScreen from './components/IntroScreen';
import TextToSpeech from './components/TextToSpeech';
import Home from './pages/Home';
import SeekingTruth from './pages/SeekingTruth';
import GospelTracts from './pages/GospelTracts';
import StopTracts from './pages/StopTracts';
import Discipleship from './pages/Discipleship';
import SalvationQuiz from './pages/SalvationQuiz';
import Resources from './pages/Resources';
import About from './pages/About';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import NextSteps from './pages/NextSteps';
import PrayerRequest from './pages/PrayerRequest';
import Give from './pages/Give';
import './styles/index.css';

function App() {
  // Check if intro has already been shown this session
  const [showIntro, setShowIntro] = useState(() => {
    const introShown = sessionStorage.getItem('introShown');
    return !introShown;
  });

  const handleIntroComplete = () => {
    sessionStorage.setItem('introShown', 'true');
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <IntroScreen onComplete={handleIntroComplete} />}
      <Router>
        <ScrollToTop />
        <div className="app">
          {/* Skip Navigation Link for Keyboard Accessibility */}
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="main-content" role="main">
            <Routes>
              <Route path="/"                element={<Home />} />
              <Route path="/seeking-truth"   element={<SeekingTruth />} />
              <Route path="/gospel-tracts"   element={<GospelTracts />} />
              <Route path="/stop-tracts"     element={<StopTracts />} />
              <Route path="/discipleship"    element={<Discipleship />} />
              <Route path="/salvation-quiz"  element={<SalvationQuiz />} />
              <Route path="/resources"       element={<Resources />} />
              <Route path="/about"           element={<About />} />
              <Route path="/faqs"            element={<FAQs />} />
              <Route path="/contact"         element={<Contact />} />
              <Route path="/next-steps"      element={<NextSteps />} />
              <Route path="/prayer-request"  element={<PrayerRequest />} />
              <Route path="/give"            element={<Give />} />
            </Routes>
          </main>
          <Footer />
          <TextToSpeech />
        </div>
      </Router>
    </>
  );
}

export default App;
