// App.jsx
import React from 'react';
import Navbar from './components/NavBar';
import Header from './components/Header';
import Content from './components/Content';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

const App = () => {
  return (
    <div id="container">
      <Navbar />
      <Header />
      <Content />
    </div>
  );
};

export default App;
