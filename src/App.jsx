import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import QuranAndScience from './pages/QuranAndScience';
import MedicalQuantum from './pages/MedicalQuantum';
import { Atom } from 'lucide-react';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quran-and-science" element={<QuranAndScience />} />
          <Route path="/medical-physics" element={<MedicalQuantum />} />
        </Routes>

        <footer>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <Atom size={24} color="var(--accent-cyan)" />
              <p>© {new Date().getFullYear()} Quantum Physics Web Project. Scientifically Explored.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
