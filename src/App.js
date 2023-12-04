import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserCard from './UserCard';
import PreviewPage from './PreviewPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserCard />} />
          <Route path="/preview" element={<PreviewPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
