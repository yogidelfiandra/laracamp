import React from 'react';
import Benefits from './parts/Benefits';
import Clients from './parts/Clients';
import Header from './parts/Header';
import Hero from './parts/Hero';
import Price from './parts/Price';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Clients />
      <Benefits />
      <Price />
      <Clients />
    </div>
  );
}

export default App;
