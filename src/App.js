import React from 'react';

import './App.css';
// import Header from './stories/Header';
import Section from './components/Section';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="app">
      <Navbar title="Fan Site" logoSrc="https://group.renault.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg" />
      <Section title="this section" />
    </div>
  );
}

export default App;
