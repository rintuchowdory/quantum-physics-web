import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

function QuranAndScience() {
  return (
    <div className="page-content quran-science-page">
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="container">
          <h1 style={{ background: 'linear-gradient(90deg, #d4af37, #f3e5ab)', WebkitBackgroundClip: 'text', color: 'transparent', textShadow: '0 0 20px rgba(212, 175, 55, 0.5)' }}>
            Quran & <span>Modern Science</span>
          </h1>
          <p>
            Exploring the profound alignments between modern astrophysics, quantum physics, and the verses of the Holy Quran, revealed 1400 years ago.
          </p>
        </div>
      </section>

      <section className="container">
        <h2 className="celestial-heading">The Big Bang & Expansion of the Universe</h2>
        
        <div className="discovery-container glass-panel">
          <div className="quran-quote">
            <p className="arabic-text">أَوَلَمْ يَرَ الَّذِينَ كَفَرُوا أَنَّ السَّمَاوَاتِ وَالْأَرْضَ كَانَتَا رَتْقًا فَفَتَقْنَاهُمَا</p>
            <p className="english-translation">"Have those who disbelieved not considered that the heavens and the earth were a joined entity, and We separated them..."</p>
            <span className="citation">— Surah Al-Anbiya [21:30]</span>
          </div>

          <div className="science-explanation">
            <h3>The Cosmic Singularity</h3>
            <p>
              Modern astrophysics postulates that the universe began from a single point of infinite density and temperature—a singularity. The Quranic term <strong>"Ratq"</strong> (joined entity) perfectly aligns with this initial state before the "cloving asunder" or the Big Bang.
            </p>
            <p>
              The expansion of the universe is governed by the Friedmann equation:
            </p>
            <div className="equation-box">
              <BlockMath math={"H^2 = \\left(\\frac{\\dot{a}}{a}\\right)^2 = \\frac{8 \\pi G}{3} \\rho - \\frac{k c^2}{a^2} + \\frac{\\Lambda c^2}{3}"} />
            </div>
            <p>
              Fascinatingly, the continued expansion of the universe is also explicitly mentioned:
            </p>
            <div className="quran-quote small">
               <p className="arabic-text">وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ وَإِنَّا لَمُوسِعُونَ</p>
               <p className="english-translation">"And the heaven We constructed with strength, and indeed, We are [its] expander."</p>
               <span className="citation">— Surah Ad-Dhariyat [51:47]</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingTop: '2rem' }}>
        <h2 className="celestial-heading">Black Holes & The Piercing Star</h2>
        
        <div className="discovery-container glass-panel">
          <div className="quran-quote">
            <p className="arabic-text">وَالسَّمَاءِ وَالطَّارِقِ ۝ وَمَا أَدْرَاكَ مَا الطَّارِقُ ۝ النَّجْمُ الثَّاقِبُ</p>
            <p className="english-translation">"By the sky and the night comer. And what can make you know what is the night comer? It is the piercing star."</p>
            <span className="citation">— Surah At-Tariq [86:1-3]</span>
          </div>

          <div className="science-explanation">
            <h3>Event Horizons & Pulsars</h3>
            <p>
              The Arabic word <strong>"Tariq"</strong> can mean 'that which knocks', bearing a striking resemblance to the radio waves emitted by pulsars (rapidly rotating neutron stars) which "knock" like cosmic clocks. Furthermore, Black Holes "pierce" the fabric of spacetime, creating a gravitational well from which not even light can escape.
            </p>
            <p>
              The boundary of a black hole, the Event Horizon, is calculated using the Schwarzschild radius equation:
            </p>
            <div className="equation-box">
              <BlockMath math={"r_s = \\frac{2GM}{c^2}"} />
            </div>
            <p>
              Another powerful oath is found in Surah Al-Waqi'ah [56:75-76]: <br/><br/>
              <span className="arabic-text">فَلَا أُقْسِمُ بِمَوَاقِعِ النُّجُومِ ۝ وَإِنَّهُ لَقَسَمٌ لَوْ تَعْلَمُونَ عَظِيمٌ</span><br/>
              <em>"Then I swear by the setting (collapse) of the stars, And indeed, it is an oath - if you could know - [most] great."</em><br/><br/>
              This highlights the collapsing of stars, the very process that creates black holes, emphasizing its immense gravitational significance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuranAndScience;
