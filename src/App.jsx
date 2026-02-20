import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Assessment from './pages/Assessment';
import Modules from './pages/Modules';
import Simulation from './pages/Simulation';
import Certificate from './pages/Certificate';
import Verify from './pages/Verify';
import Framework from './pages/Framework';
import { ProgressProvider } from './context/ProgressContext';

import { Helmet } from 'react-helmet-async';

import SessionResetModal from './components/SessionResetModal';

function App() {
  return (
    <ProgressProvider>
      <Helmet>
        <title>Humans School of Intelligence</title>
        <meta name="description" content="Master the art of being human in a digital world." />
      </Helmet>
      <BrowserRouter>
        <Layout>
          <SessionResetModal />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/framework" element={<Framework />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/certification" element={<Certificate />} />
            <Route path="/verify" element={<Verify />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ProgressProvider>
  );
}

export default App;
