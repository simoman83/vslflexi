import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HealthBlog from './HealthBlog';
import FlexiAdvertorial from './FlexiAdvertorial';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HealthBlog />} />
                <Route path="/flexi" element={<FlexiAdvertorial />} />
            </Routes>
        </Router>
    );
};

export default App;
