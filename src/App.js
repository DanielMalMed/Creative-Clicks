import { BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom';

import Homepage from './components/homepage';
import LandingPage from './components/landingpage';
import Tpostcreate from './components/tpostcreate';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <ul>
        <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/tpostcreate">Create post</Link>
          </li>
        </ul>
      </nav>
    </div>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/login" element={<LandingPage />} />
    <Route path="/tpostcreate" element={<Tpostcreate />} />
    </Routes>
    
    </Router>
  );
}

export default App;


