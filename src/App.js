import React from 'react';
import Benefits from './parts/Benefits';
import Clients from './parts/Clients';
import Header from './parts/Header';
import Hero from './parts/Hero';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Clients />
      <Benefits />
    </div>
  );
}

export default App;
