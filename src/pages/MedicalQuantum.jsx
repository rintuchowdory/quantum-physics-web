import React from 'react';
import { Activity, Dna, ShieldAlert, HeartPulse } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

function MedicalQuantum() {
  return (
    <div className="page-content medical-page">
       <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="container">
          <h1 style={{ background: 'linear-gradient(90deg, #ff6b6b, #48dbfb)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            Medical Science meets <span>Quantum Physics</span>
          </h1>
          <p>
            Discover how the fundamental laws of nature at a subatomic level power the miracles of modern medical science and biology.
          </p>
        </div>
      </section>

      <section className="container">
        <h2>Quantum Mechanics in Medicine</h2>
        <div className="grid-2">
          <div className="glass-panel">
            <div className="flex-header">
               <Activity size={40} className="icon medical-icon" />
               <h3>MRI & Nuclear Magnetic Resonance</h3>
            </div>
            <p>
              Magnetic Resonance Imaging (MRI) is arguably the most famous application of quantum mechanics in medicine. It works by aligning the spins of protons in your body using powerful magnetic fields.
            </p>
            <p>
              When a radio frequency pulse is applied, these quantum spins flip. As they return to their normal state, they emit a signal that builds a 3D image of the human body.
            </p>
            <div className="equation-box">
              <p>Larmor Precession Frequency:</p>
              <BlockMath math={"\\omega = -\\gamma B"} />
            </div>
          </div>

          <div className="glass-panel">
            <div className="flex-header">
               <ShieldAlert size={40} className="icon medical-icon" />
               <h3>Radiation Therapy</h3>
            </div>
            <p>
               Treating cancer with radiation relies entirely on quantum effects. High-energy photons (X-rays) or particles interact with cellular DNA, causing molecular breakdowns to destroy tumors.
            </p>
            <p>
               The photoelectric effect and Compton scattering are purely quantum phenomena that describe how these high energy photons behave when colliding with electrons in human tissue.
            </p>
          </div>
        </div>

        <h2 style={{ marginTop: '5rem' }}>Quantum Biology</h2>
        <div className="grid-2">
          <div className="glass-panel">
            <div className="flex-header">
               <HeartPulse size={40} className="icon medical-icon" />
               <h3>Enzyme Catalysis & Tunneling</h3>
            </div>
            <p>
              Enzymes speed up chemical reactions in our bodies by staggering amounts. Recent evidence suggests they achieve this through <strong>Quantum Tunneling</strong>.
            </p>
            <p>
              Electrons and protons can "tunnel" through energy barriers that classical physics says they shouldn't be able to cross, allowing life-sustaining reactions to happen almost instantaneously.
            </p>
          </div>

          <div className="glass-panel">
             <div className="flex-header">
               <Dna size={40} className="icon medical-icon" />
               <h3>DNA Mutations</h3>
            </div>
            <p>
              The double helix of DNA is held together by hydrogen bonds. A proton jumping across these bonds to the "wrong" side (a process called <em>quantum tunneling</em>) right before cell replication can result in spontaneous genetic mutations.
            </p>
            <p>
              This means the very engine of evolution—and sometimes diseases like cancer—could be fundamentally driven by quantum mechanics.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MedicalQuantum;
