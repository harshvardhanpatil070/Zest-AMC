import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="navbar-brand">Zest AMC</div>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          </div>
          <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about-us">About us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><button className="book-now">Book now</button></li>
          </ul>
        </nav>
        <div className="header-content">
          <h1>The blockchain experts.</h1>
          <p>We provide reliable cryptocurrency services in Dubai.</p>
        </div>
      </header>
      <main>
        <section className="services">
          <div className="service">
            <h2>Buy and sell crypto</h2>
            <p>Create one account you can use to buy and sell cryptocurrency.</p>
          </div>
          <div className="service">
            <h2>Wide variety of cryptos</h2>
            <p>We offer an extended list of popular cryptocurrencies, including Bitcoin, Litecoin, Ethereum, Bitcoin Cash, and more.</p>
          </div>
          <div className="service">
            <h2>Crypto investments</h2>
            <p>We will help you identify the best cryptocurrency investments and portfolios.</p>
          </div>
        </section>
        <div className="footer">
          <p>Leading the blockchain revolution.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
