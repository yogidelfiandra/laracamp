import React from 'react';
import Benefits from './parts/Benefits';
import Clients from './parts/Clients';
import Footer from './parts/Footer';
import Header from './parts/Header';
import Hero from './parts/Hero';
import Price from './parts/Price';
import Testimonials from './parts/Testimonials';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Clients />
        <Benefits />
        <Price />
        <Clients />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
