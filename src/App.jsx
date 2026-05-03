import React from 'react';
import { Atom, Zap, Maximize, Network, Lock, Cpu, Stethoscope } from 'lucide-react';
import './index.css';

// We will use the generated images. In Vite, we import them like this:
import heroImg from './assets/quantum_hero_1777843861723.png';
import doubleSlitImg from './assets/double_slit_1777844343938.png';
import catImg from './assets/schrodingers_cat_1777844501033.png';

function App() {
  return (
    <div className="app-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to the <span>Quantum Realm</span></h1>
          <p>
            Explore the fundamental nature of matter and energy. Quantum physics 
            reveals a universe that is stranger, more interconnected, and more 
            fascinating than classical physics ever imagined.
          </p>
          <a href="#concepts" className="btn">Explore Concepts</a>

          <div className="hero-img-container">
            <img src={heroImg} alt="Abstract Quantum Realm" className="hero-img" />
          </div>
        </div>
      </section>

      {/* Key Concepts */}
      <section id="concepts" className="container">
        <h2>Fundamental Concepts</h2>
        <div className="grid-3">
          <div className="glass-panel concept-card">
            <Zap size={48} className="icon" />
            <h3>Wave-Particle Duality</h3>
            <p>Particles like electrons and photons exhibit both wave-like and particle-like properties depending on how they are measured.</p>
          </div>
          <div className="glass-panel concept-card">
            <Maximize size={48} className="icon" />
            <h3>Superposition</h3>
            <p>A quantum system can exist in multiple states simultaneously until it is observed, collapsing into a single definite state.</p>
          </div>
          <div className="glass-panel concept-card">
            <Network size={48} className="icon" />
            <h3>Entanglement</h3>
            <p>Particles can become linked such that the state of one instantly influences the state of another, regardless of distance.</p>
          </div>
        </div>
      </section>

      {/* Famous Experiments */}
      <section className="container">
        <h2>Famous Experiments</h2>
        
        <div className="experiment-row grid-2">
          <div className="glass-panel">
            <h3>The Double-Slit Experiment</h3>
            <p>
              By firing particles through two slits at a screen, scientists observed an interference pattern. 
              This groundbreaking experiment mathematically proved that matter and light can act as both waves 
              and particles. It demonstrates the core mystery of quantum mechanics.
            </p>
          </div>
          <div>
            <img src={doubleSlitImg} alt="Double Slit Experiment" />
          </div>
        </div>

        <div className="experiment-row grid-2" style={{ direction: 'rtl' }}>
          <div className="glass-panel" style={{ direction: 'ltr' }}>
            <h3>Schrödinger's Cat</h3>
            <p>
              A famous thought experiment envisioning a cat in a sealed box with a radioactive source & poison. 
              According to quantum mechanics (Copenhagen interpretation), the cat is simultaneously alive 
              and dead—in a state of superposition—until the box is opened and the state is observed.
            </p>
          </div>
          <div style={{ direction: 'ltr' }}>
            <img src={catImg} alt="Schrodinger's Cat" />
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="container">
        <h2>Real-World Applications</h2>
        <div className="grid-3">
          <div className="glass-panel concept-card">
            <Cpu size={48} className="icon" />
            <h3>Quantum Computing</h3>
            <p>Utilizing qubits to perform complex calculations exponentially faster than classical computers for specific problems.</p>
          </div>
          <div className="glass-panel concept-card">
            <Lock size={48} className="icon" />
            <h3>Quantum Cryptography</h3>
            <p>Creating theoretically unhackable communication channels using the principles of quantum entanglement.</p>
          </div>
          <div className="glass-panel concept-card">
            <Stethoscope size={48} className="icon" />
            <h3>Medical Imaging</h3>
            <p>Technologies like MRI rely heavily on nuclear magnetic resonance, a deeply quantum mechanic phenomenon.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            <Atom size={24} color="var(--accent-cyan)" />
            <p>© {new Date().getFullYear()} Quantum Physics Web Project.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
