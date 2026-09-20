import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import type { PageId, Language, Theme } from '../types';
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
  X,
  User,
  Settings,
  Palette
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    language,
    setLanguage,
    theme,
    setTheme,
    activePage,
    setActivePage,
    t,
    alerts,
    scenario,
    runDemoScenario,
    currentUser,
    isAuthenticated
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

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
      <header className="sticky top-0 z-50 theme-bg-nav backdrop-blur-md border-b theme-border shadow-lg transition-colors duration-300">
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
                    {t('brandTitle')}
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    PRODUCE V2.0
                  </span>
                </div>
                <p className="text-[11px] theme-text-muted font-medium hidden md:block">
                  {t('brandSubtitle')}
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
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold'
                        : 'theme-text-secondary hover:theme-text-primary hover:bg-emerald-500/10'
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
                <button className="flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold theme-text-secondary hover:theme-text-primary hover:bg-emerald-500/10">
                  <Menu className="w-4 h-4" />
                  <span>More Views</span>
                </button>
                <div className="absolute right-0 top-full mt-1 w-48 theme-bg-card border theme-border rounded-xl shadow-2xl py-2 hidden group-hover:block z-50">
                  {navItems.slice(6).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActivePage(item.id)}
                      className={`w-full flex items-center space-x-2 px-4 py-2 text-xs font-medium text-left ${
                        activePage === item.id
                          ? 'text-emerald-400 bg-emerald-500/10'
                          : 'theme-text-secondary hover:theme-text-primary hover:bg-emerald-500/10'
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
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Scenario Cycle Button */}
              <button
                onClick={runDemoScenario}
                title="Click to cycle demo scenarios"
                className="hidden xl:flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold hover:from-amber-500/30 hover:to-orange-500/30 transition-all shadow-sm"
              >
                <Play className="w-3.5 h-3.5 fill-amber-300" />
                <span>{t('runDemo')}</span>
              </button>

              {/* Theme Dropdown / Quick Picker */}
              <div className="relative">
                <button
                  onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                  title="Change Theme"
                  className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg theme-bg-input border theme-border text-xs font-bold theme-text-primary hover:border-emerald-500 transition-all"
                >
                  <Palette className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="capitalize hidden sm:inline">{theme}</span>
                </button>

                {themeMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 theme-bg-card border theme-border rounded-xl shadow-2xl p-2 z-50 space-y-1">
                    <p className="text-[10px] font-bold theme-text-muted px-2 py-1 uppercase tracking-wider">
                      {t('selectTheme')}
                    </p>
                    {[
                      { id: 'agriculture', label: '🌿 Agriculture' },
                      { id: 'sky', label: '☁️ Sky Blue' },
                      { id: 'monsoon', label: '🌧️ Monsoon' },
                      { id: 'light', label: '☀️ Light' },
                      { id: 'dark', label: '🌙 Dark' },
                    ].map((tItem) => (
                      <button
                        key={tItem.id}
                        onClick={() => {
                          setTheme(tItem.id as Theme);
                          setThemeMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-semibold text-left transition-all ${
                          theme === tItem.id
                            ? 'bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30'
                            : 'theme-text-secondary hover:theme-text-primary hover:bg-emerald-500/10'
                        }`}
                      >
                        <span>{tItem.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Language Picker */}
              <div className="flex items-center theme-bg-input rounded-lg p-1 border theme-border">
                <Globe className="w-3.5 h-3.5 text-emerald-400 ml-1 mr-1" />
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-2 py-1 rounded text-xs font-bold transition-all ${
                      language === lang.code
                        ? 'bg-emerald-500 text-slate-950 shadow'
                        : 'theme-text-muted hover:theme-text-primary'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              {/* User Profile / Auth Action */}
              {isAuthenticated ? (
                <button
                  onClick={() => setActivePage('settings')}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activePage === 'settings'
                      ? 'bg-emerald-500 text-slate-950 shadow'
                      : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25'
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  <span className="hidden md:inline max-w-[90px] truncate">
                    {currentUser?.name.split(' ')[0]}
                  </span>
                </button>
              ) : (
                <button
                  onClick={() => setActivePage('login')}
                  className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold shadow transition-all"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>{t('navLogin')}</span>
                </button>
              )}

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg theme-text-secondary hover:theme-text-primary hover:bg-emerald-500/10"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden theme-bg-card border-b theme-border px-4 pt-2 pb-4 space-y-1">
            <div className="mb-2 pb-2 border-b theme-border-subtle flex flex-col space-y-2">
              <button
                onClick={() => {
                  runDemoScenario();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 px-3 py-2 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold"
              >
                <Play className="w-4 h-4 fill-amber-300" />
                <span>{t('runDemo')} ({scenarioLabels[scenario]})</span>
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
                    : 'theme-text-secondary hover:theme-text-primary hover:bg-emerald-500/10'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}

            {/* Mobile Auth Button */}
            <div className="pt-2 border-t theme-border-subtle mt-2">
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    setActivePage('settings');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 px-3 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs"
                >
                  <Settings className="w-4 h-4" />
                  <span>{t('navSettings')} ({currentUser?.name})</span>
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setActivePage('login');
                      setMobileMenuOpen(false);
                    }}
                    className="flex-1 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs"
                  >
                    {t('navLogin')}
                  </button>
                  <button
                    onClick={() => {
                      setActivePage('register');
                      setMobileMenuOpen(false);
                    }}
                    className="flex-1 py-2 rounded-lg border theme-border theme-text-primary font-bold text-xs"
                  >
                    {t('navRegister')}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Bottom Mobile Navigation Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 theme-bg-nav backdrop-blur-md border-t theme-border py-1 px-2 flex justify-around items-center">
        {[
          { id: 'home', label: t('navHome'), icon: <Home className="w-5 h-5" /> },
          { id: 'dashboard', label: t('navDashboard'), icon: <LayoutDashboard className="w-5 h-5" /> },
          { id: 'advisory', label: t('navAdvisory'), icon: <Sprout className="w-5 h-5" /> },
          { id: 'alerts', label: t('navAlerts'), icon: <Bell className="w-5 h-5" /> },
          { id: 'settings', label: t('navSettings'), icon: <Settings className="w-5 h-5" /> },
        ].map((tab) => {
          const isActive = activePage === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActivePage(tab.id as PageId)}
              className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-semibold transition-all ${
                isActive ? 'text-emerald-400 font-bold' : 'theme-text-muted hover:theme-text-primary'
              }`}
            >
              <div className="relative">
                {tab.icon}
                {tab.id === 'alerts' && unreadAlertsCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-500" />
                )}
              </div>
              <span className="mt-0.5 truncate max-w-[60px]">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
