import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <nav className="nav">
          <Link to="/" className="nav__brand">React Tech Test</Link>
          <div className="nav__links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} — Demo Tech @graceladyas</small>
      </footer>
    </div>
  );
}
