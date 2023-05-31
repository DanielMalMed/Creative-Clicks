import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './components/landingpage';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      
    </div>
    <Routes>
    <Route path="/" element={<LandingPage />} />
    </Routes>
    
    </Router>
  );
}

export default App;
