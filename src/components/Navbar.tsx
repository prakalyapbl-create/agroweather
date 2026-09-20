import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import type { PageId, Language } from '../types';
import {
  CloudRain,
  Home,
  LayoutDashboard,
  CloudSun,
  Sprout,
  Bell,
  MessageSquarePlus,
  Database,
  MapPin,
  ShieldCheck,
  BarChart3,
  Info,
  Globe,
  Play,
  Menu,
  X
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    language,
    setLanguage,
    activePage,
    setActivePage,
    t,
    alerts,
    scenario,
    runDemoScenario
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const unreadAlertsCount = alerts.filter((a) => !a.read).length;

  const navItems: { id: PageId; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: t('navHome'), icon: <Home className="w-4 h-4" /> },
    { id: 'dashboard', label: t('navDashboard'), icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'break_risk', label: t('navBreak'), icon: <CloudSun className="w-4 h-4" /> },
    { id: 'advisory', label: t('navAdvisory'), icon: <Sprout className="w-4 h-4" /> },
    { id: 'alerts', label: t('navAlerts'), icon: <Bell className="w-4 h-4" /> },
    { id: 'feedback', label: t('navFeedback'), icon: <MessageSquarePlus className="w-4 h-4" /> },
    { id: 'map', label: t('navMap'), icon: <MapPin className="w-4 h-4" /> },
    { id: 'officer', label: t('navOfficer'), icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'data_sources', label: t('navDataSources'), icon: <Database className="w-4 h-4" /> },
    { id: 'performance', label: t('navPerformance'), icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'about', label: t('navAbout'), icon: <Info className="w-4 h-4" /> },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'hi', label: 'हिंदी' },
  ];

  const scenarioLabels: Record<string, string> = {
    default: 'Default (Onset Expected)',
    early_onset: 'Early Rapid Onset',
    prolonged_break: 'Prolonged Break',
    active_monsoon: 'Active Heavy Rain',
    drought_risk: 'Drought/Dry Spell',
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo & Title */}
            <div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => setActivePage('home')}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                <CloudRain className="w-6 h-6 text-slate-950 stroke-[2.5]" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                    HyperMonsoon
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    V1.0 PROTOTYPE
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium hidden md:block">
                  Hyperlocal Monsoon Intelligence
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.slice(0, 6).map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActivePage(item.id)}
                    className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    {item.id === 'alerts' && unreadAlertsCount > 0 && (
                      <span className="ml-1 w-4 h-4 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center justify-center">
                        {unreadAlertsCount}
                      </span>
                    )}
                  </button>
                );
              })}

              {/* More dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60">
                  <Menu className="w-4 h-4" />
                  <span>More Views</span>
                </button>
                <div className="absolute right-0 top-full mt-1 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-xl py-2 hidden group-hover:block z-50">
                  {navItems.slice(6).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActivePage(item.id)}
                      className={`w-full flex items-center space-x-2 px-4 py-2 text-xs font-medium text-left ${
                        activePage === item.id
                          ? 'text-emerald-400 bg-emerald-500/10'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </nav>

            {/* Right Header Controls */}
            <div className="flex items-center space-x-3">
              <button
                onClick={runDemoScenario}
                title="Click to cycle demo scenarios"
                className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold hover:from-amber-500/30 hover:to-orange-500/30 transition-all shadow-sm"
              >
                <Play className="w-3.5 h-3.5 fill-amber-300" />
                <span>{t('runDemo')}</span>
                <span className="text-[10px] opacity-75 hidden xl:inline">
                  ({scenarioLabels[scenario]})
                </span>
              </button>

              <div className="flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
                <Globe className="w-3.5 h-3.5 text-slate-400 ml-1 mr-1.5" />
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-2 py-1 rounded text-xs font-bold transition-all ${
                      language === lang.code
                        ? 'bg-emerald-500 text-slate-950 shadow'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
            <div className="mb-2 pb-2 border-b border-slate-800">
              <button
                onClick={() => {
                  runDemoScenario();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 px-3 py-2 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold"
              >
                <Play className="w-4 h-4 fill-amber-300" />
                <span>{t('runDemo')}</span>
                <span className="text-[10px]">({scenarioLabels[scenario]})</span>
              </button>
            </div>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-semibold ${
                  activePage === item.id
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Bottom Mobile Navigation Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 py-1 px-2 flex justify-around items-center">
        {[
          { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
          { id: 'dashboard', label: 'Weather', icon: <LayoutDashboard className="w-5 h-5" /> },
          { id: 'advisory', label: 'Advisory', icon: <Sprout className="w-5 h-5" /> },
          { id: 'alerts', label: 'Alerts', icon: <Bell className="w-5 h-5" /> },
          { id: 'feedback', label: 'Report', icon: <MessageSquarePlus className="w-5 h-5" /> },
        ].map((tab) => {
          const isActive = activePage === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActivePage(tab.id as PageId)}
              className={`flex flex-col items-center py-1 px-3 rounded-lg text-[10px] font-semibold transition-all ${
                isActive ? 'text-emerald-400' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="relative">
                {tab.icon}
                {tab.id === 'alerts' && unreadAlertsCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-500" />
                )}
              </div>
              <span className="mt-0.5">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
