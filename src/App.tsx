import React from 'react';
import Hero from './Hero';
import Nav from './Nav';

const ThreePhotos = React.lazy(async () => await import('./ThreePhotos'))

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <ThreePhotos />
    </div>
  );
}

export default App;
