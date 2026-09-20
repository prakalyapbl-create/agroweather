import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Sprout,
  Satellite,
  Radio,
  Cpu,
  MapPin,
  Bell,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Play,
  Users,
  Sparkles
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { t, setActivePage, runDemoScenario } = useApp();

  return (
    <div className="space-y-16 py-8">
      
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 rounded-3xl border border-slate-800 p-8 sm:p-12 lg:p-16 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wide">
            <Sparkles className="w-4 h-4 animate-pulse text-emerald-400" />
            <span>HYPERLOCAL MONSOON PREDICTION SYSTEM</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            {t('brandTitle')}
          </h1>
          
          <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            {t('brandSubtitle')}
          </p>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
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
              className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-800 text-slate-200 font-extrabold text-sm border border-slate-700 hover:bg-slate-700 hover:text-white transition-all"
            >
              <Sprout className="w-4 h-4 text-emerald-400" />
              <span>{t('viewAdvisory')}</span>
            </button>

            <button
              onClick={runDemoScenario}
              className="flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-amber-500/10 text-amber-300 font-extrabold text-sm border border-amber-500/30 hover:bg-amber-500/20 transition-all"
            >
              <Play className="w-4 h-4 fill-amber-300" />
              <span>{t('runDemo')}</span>
            </button>
          </div>

        </div>
      </section>

      {/* 3 KEY BENEFITS SECTION */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Why HyperMonsoon?
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Bridging district-level weather forecasts down to village-level decision support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 space-y-4 hover:border-emerald-500/50 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-black text-2xl">
              🌧️
            </div>
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <span>{t('predict')}</span>
              <span className="text-emerald-400 text-xs px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                Village Scale
              </span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Predict exact monsoon onset timing (+3-5 days), rainfall breaks/dry spells (4-6 days duration), and rainfall returning dates directly for your block and village.
            </p>
            <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-700/50">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>88.4% Onset Detection Accuracy</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Explainable AI confidence scores</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 space-y-4 hover:border-teal-500/50 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400 font-black text-2xl">
              🌾
            </div>
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <span>{t('plan')}</span>
              <span className="text-teal-400 text-xs px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">
                Crop Specific
              </span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Transform weather predictions into actionable decisions for Paddy, Groundnut, Maize, Cotton, Millets, Pulses, Sugarcane, and Vegetables.
            </p>
            <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-700/50">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Sowing window optimization</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Fertilizer runoff prevention</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 space-y-4 hover:border-cyan-500/50 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-black text-2xl">
              💧
            </div>
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <span>{t('protect')}</span>
              <span className="text-cyan-400 text-xs px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                Risk Prevention
              </span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Protect against crop moisture stress, premature sowing loss, waterlogging, and nutrient runoff through timely local push alerts and community field reports.
            </p>
            <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-700/50">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Supplemental irrigation timing</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Community ground-truth feedback</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* VISUAL DATA PIPELINE DIAGRAM */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-8">
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold">
              <span>DATA FLOW ARCHITECTURE</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              End-to-End Monsoon Intelligence Pipeline
            </h3>
            <p className="text-xs text-slate-400 max-w-xl mx-auto">
              How raw atmospheric, satellite, sensor, and farmer ground data convert into actionable field alerts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            
            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 text-center space-y-2 hover:border-emerald-500 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Satellite className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Satellite Data</h4>
              <p className="text-[11px] text-slate-400">Cloud cover, INSAT-3D rainfall estimates & land temp</p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 text-center space-y-2 hover:border-teal-500 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto">
                <Radio className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Sensors & AWS</h4>
              <p className="text-[11px] text-slate-400">Automatic weather stations & soil moisture sensors</p>
            </div>

            <div className="bg-gradient-to-b from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 rounded-xl p-4 text-center space-y-2 relative shadow-lg shadow-emerald-500/10">
              <div className="w-10 h-10 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto font-black">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-extrabold text-emerald-300">AI Prediction Engine</h4>
              <p className="text-[11px] text-emerald-200/80">Machine Learning & pattern matching model</p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 text-center space-y-2 hover:border-cyan-500 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Village Prediction</h4>
              <p className="text-[11px] text-slate-400">Block/Village scale onset date & break duration</p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 text-center space-y-2 hover:border-amber-500 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                <Bell className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Farmer Action Alert</h4>
              <p className="text-[11px] text-slate-400">Crop advisory in Tamil, Hindi & English</p>
            </div>

          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => setActivePage('data_sources')}
              className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 underline"
            >
              <span>View full technical architecture & data sources</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* TARGET USERS SECTION */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-extrabold text-white">
            Designed For The Entire Agricultural Ecosystem
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Tailored interfaces for different stakeholders in rural development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Sprout className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-white">Farmers</h4>
                <p className="text-[11px] text-slate-400">Field level decisions</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Simple local language weather forecast, clear onset countdown, dry spell warning, and exact crop advice for sowing, water management, and fertilizer timing.
            </p>
            <button
              onClick={() => setActivePage('dashboard')}
              className="text-xs font-bold text-emerald-400 flex items-center space-x-1 hover:underline"
            >
              <span>Go to Farmer Dashboard</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-white">Agricultural Officers</h4>
                <p className="text-[11px] text-slate-400">Block & Regional Monitoring</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Monitor multiple villages in Orathanadu block, track villages requiring emergency irrigation attention, broadcast alerts, and inspect prediction accuracy metrics.
            </p>
            <button
              onClick={() => setActivePage('officer')}
              className="text-xs font-bold text-cyan-400 flex items-center space-x-1 hover:underline"
            >
              <span>Go to Officer Dashboard</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-white">FPOs & Coordinators</h4>
                <p className="text-[11px] text-slate-400">Community Planning</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Analyze rainfall trends across villages to plan seed distribution, fertilizer inventory, farm machinery renting, and collective grain harvest logistics.
            </p>
            <button
              onClick={() => setActivePage('map')}
              className="text-xs font-bold text-amber-400 flex items-center space-x-1 hover:underline"
            >
              <span>Explore Village Map</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
