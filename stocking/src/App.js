import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Components/caller';
import Result from './Components/result';
import TitleScreen from './Components/title';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<TitleScreen />} />
        <Route exact path="/options" element={<Form />} />
        <Route path="/results/:strategy/:model" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default App;