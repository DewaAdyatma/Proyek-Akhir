import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Awal from './components/Tampilan-awal';
import Login from './components/Halaman-login';
import Signin from './components/Halaman-signin';
import Container from './components/Container';
import Dashboard from './components/Dashboard';
import Waitlist from './components/Wait_list';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes without Header/Footer */}
        <Route path="/" element={<Container showHeaderFooter={false}><Awal /></Container>} />
        <Route path="/halaman-login" element={<Container showHeaderFooter={false}><Login /></Container>} />
        <Route path="/signin" element={<Container showHeaderFooter={false}><Signin /></Container>} />

        {/* Routes with Header and Footer */}
        <Route path="/main/*" element={
          <Container>
            <Routes>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="waitlist" element={<Waitlist />} />
            </Routes>
          </Container>
        } />
      </Routes>
    </Router>
  );
}

export default App;
