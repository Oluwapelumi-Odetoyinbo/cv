import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    // Scroll reveal animation logic
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const revealOnScroll = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, revealOptions);

    revealElements.forEach(el => revealOnScroll.observe(el));

    return () => {
      revealElements.forEach(el => revealOnScroll.unobserve(el));
    }
  }, []);

  return (
    <>
      <Navigation />
      <main className="max-w-[1200px] mx-auto px-10 py-[60px]">
        <Hero />
        <Philosophy />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
