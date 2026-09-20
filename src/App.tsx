import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { FarmerDashboard } from './components/FarmerDashboard';
import { BreakRiskSection } from './components/BreakRiskSection';
import { FarmerAdvisory } from './components/FarmerAdvisory';
import { AlertCenter } from './components/AlertCenter';
import { FeedbackPage } from './components/FeedbackPage';
import { DataSourcesPage } from './components/DataSourcesPage';
import { MapView } from './components/MapView';
import { OfficerDashboard } from './components/OfficerDashboard';
import { ModelPerformancePage } from './components/ModelPerformancePage';
import { AboutPage } from './components/AboutPage';

const MainContent: React.FC = () => {
  const { activePage } = useApp();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      {activePage === 'home' && <LandingPage />}
      {activePage === 'dashboard' && <FarmerDashboard />}
      {activePage === 'break_risk' && <BreakRiskSection />}
      {activePage === 'advisory' && <FarmerAdvisory />}
      {activePage === 'alerts' && <AlertCenter />}
      {activePage === 'feedback' && <FeedbackPage />}
      {activePage === 'data_sources' && <DataSourcesPage />}
      {activePage === 'map' && <MapView />}
      {activePage === 'officer' && <OfficerDashboard />}
      {activePage === 'performance' && <ModelPerformancePage />}
      {activePage === 'about' && <AboutPage />}
    </main>
  );
};

export function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
        <Navbar />
        <div className="flex-1">
          <MainContent />
        </div>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
