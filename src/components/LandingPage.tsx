import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Sprout,
  Satellite,
  Radio,
  Cpu,
  ArrowRight,
  Users,
  Sparkles,
  UserCheck
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { t, setActivePage, isAuthenticated, currentUser } = useApp();

  return (
    <div className="space-y-12 py-6">
      
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden theme-bg-card rounded-3xl border theme-border p-8 sm:p-12 lg:p-16 shadow-2xl transition-colors duration-300">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wide">
            <Sparkles className="w-4 h-4 animate-pulse text-emerald-400" />
            <span>HYPERLOCAL MONSOON PREDICTION SYSTEM</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight theme-text-primary leading-tight">
            {t('brandTitle')}
          </h1>
          
          <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            {t('brandSubtitle')}
          </p>

          <p className="text-base sm:text-lg theme-text-muted max-w-2xl mx-auto leading-relaxed">
            "{t('heroDesc')}"
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setActivePage('dashboard')}
              className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-500 transition-all hover:scale-[1.02]"
            >
              <span>{t('exploreDashboard')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActivePage('advisory')}
              className="flex items-center space-x-2 px-6 py-3.5 rounded-xl theme-bg-input theme-text-primary font-extrabold text-sm border theme-border hover:border-emerald-500 transition-all"
            >
              <Sprout className="w-4 h-4 text-emerald-400" />
              <span>{t('viewAdvisory')}</span>
            </button>

            {!isAuthenticated ? (
              <button
                onClick={() => setActivePage('register')}
                className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-extrabold text-sm hover:bg-cyan-500/25 transition-all"
              >
                <UserCheck className="w-4 h-4" />
                <span>Create Free Farmer Account</span>
              </button>
            ) : (
              <button
                onClick={() => setActivePage('settings')}
                className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-500/30 font-extrabold text-sm hover:bg-amber-500/25 transition-all"
              >
                <span>Welcome, {currentUser?.name.split(' ')[0]} (Settings)</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* CORE VALUE PILLARS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="theme-bg-card border theme-border rounded-2xl p-6 space-y-3 shadow-lg hover:border-emerald-500/50 transition-all">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-bold text-lg">
            01
          </div>
          <h3 className="text-xl font-extrabold theme-text-primary">{t('predict')}</h3>
          <p className="text-xs theme-text-muted leading-relaxed">
            AI & Satellite models trained on IMD, ERA5, and local rain gauges to forecast Block & Village scale monsoon onset, dry spells, and returning rains.
          </p>
        </div>

        <div className="theme-bg-card border theme-border rounded-2xl p-6 space-y-3 shadow-lg hover:border-cyan-500/50 transition-all">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center font-bold text-lg">
            02
          </div>
          <h3 className="text-xl font-extrabold theme-text-primary">{t('plan')}</h3>
          <p className="text-xs theme-text-muted leading-relaxed">
            Crop-specific advisories tailored to Paddy, Groundnut, Maize, and Cotton. Schedule sowing dates and irrigation cycles before dry spells occur.
          </p>
        </div>

        <div className="theme-bg-card border theme-border rounded-2xl p-6 space-y-3 shadow-lg hover:border-teal-500/50 transition-all">
          <div className="w-12 h-12 rounded-xl bg-teal-500/15 text-teal-400 flex items-center justify-center font-bold text-lg">
            03
          </div>
          <h3 className="text-xl font-extrabold theme-text-primary">{t('protect')}</h3>
          <p className="text-xs theme-text-muted leading-relaxed">
            Automated SMS & Village Broadcast alerts for monsoon break risk, extreme rainfall, soil moisture depletion, and pest outbreak warnings.
          </p>
        </div>
      </section>

      {/* DATA ARCHITECTURE OVERVIEW */}
      <section className="theme-bg-card border theme-border rounded-3xl p-8 space-y-6 shadow-xl">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-black theme-text-primary">
            Multi-Source Weather Intelligence Engine
          </h2>
          <p className="text-xs theme-text-muted">
            Combining Satellite Imagery, IoT Rain Gauges, IMD Gridded Datasets, and Farmer Ground Truth Observations.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
          <div className="theme-bg-input border theme-border rounded-xl p-4 text-center space-y-2">
            <Satellite className="w-8 h-8 text-emerald-400 mx-auto" />
            <h4 className="text-xs font-bold theme-text-primary">INSAT-3D & Sentinel</h4>
            <p className="text-[10px] theme-text-muted">Cloud & Moisture Index</p>
          </div>

          <div className="theme-bg-input border theme-border rounded-xl p-4 text-center space-y-2">
            <Radio className="w-8 h-8 text-cyan-400 mx-auto" />
            <h4 className="text-xs font-bold theme-text-primary">Block Automatic Weather</h4>
            <p className="text-[10px] theme-text-muted">Realtime Telemetry</p>
          </div>

          <div className="theme-bg-input border theme-border rounded-xl p-4 text-center space-y-2">
            <Cpu className="w-8 h-8 text-teal-400 mx-auto" />
            <h4 className="text-xs font-bold theme-text-primary">Physics AI Ensemble</h4>
            <p className="text-[10px] theme-text-muted">Neural Break Risk Model</p>
          </div>

          <div className="theme-bg-input border theme-border rounded-xl p-4 text-center space-y-2">
            <Users className="w-8 h-8 text-amber-400 mx-auto" />
            <h4 className="text-xs font-bold theme-text-primary">Farmer Feedback</h4>
            <p className="text-[10px] theme-text-muted">Ground Truth Verification</p>
          </div>
        </div>
      </section>
    </div>
  );
};
