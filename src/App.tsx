import React from 'react';
import Hero from './Hero';
import Nav from './Nav';
import Footer from './Footer';

const ThreePhotos = React.lazy(async () => await import('./ThreePhotos'))

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <ThreePhotos />
      <Footer />
    </div>
  );
}

export default App;
