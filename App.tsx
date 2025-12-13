import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HealthBlog from './HealthBlog';
import FlexiAdvertorial from './FlexiAdvertorial';
import MotionEnergyAdvertorial from './MotionEnergyAdvertorial';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import { KneeTipsArticle, NutritionArticle, BackPainArticle, WalkingBenefitsArticle, SleepTipsArticle } from './pages/ArticlePage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HealthBlog />} />
                <Route path="/flexi" element={<FlexiAdvertorial />} />
                <Route path="/motionenergy" element={<MotionEnergyAdvertorial />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/article/knee-exercises" element={<KneeTipsArticle />} />
                <Route path="/article/nutrition" element={<NutritionArticle />} />
                <Route path="/article/back-pain" element={<BackPainArticle />} />
                <Route path="/article/walking-benefits" element={<WalkingBenefitsArticle />} />
                <Route path="/article/sleep-tips" element={<SleepTipsArticle />} />
            </Routes>
        </Router>
    );
};

export default App;
