import React from 'react';
import { useApp } from '../context/AppContext';
import {
  CloudRain,
  Sprout,
  ShieldAlert,
  Cpu,
  ArrowRight
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { setActivePage } = useApp();

  return (
    <div className="space-y-10 py-4 max-w-5xl mx-auto">
      
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-4 text-center">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
          <CloudRain className="w-6 h-6 text-slate-950 stroke-[2.5]" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          About HyperMonsoon
        </h1>
        <p className="text-base text-slate-300 max-w-2xl mx-auto">
          Hyperlocal Monsoon Onset & Break Prediction System designed for rural agricultural resilience in India.
        </p>
      </div>

      {/* Problem & Solution Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center space-x-2 text-rose-400 font-extrabold text-xs uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>The Core Problem</span>
          </div>
          <h2 className="text-xl font-black text-white">
            District Forecasts Don't Help Village Farmers
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Standard weather forecasts cover entire districts (over 5,000 sq km), whereas microclimates, rainfall distribution, and soil moisture vary significantly at the village level. A delayed monsoon or unpredicted 6-day dry spell directly impacts sowing windows, irrigation fuel costs, fertilizer application, and crop yields.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center space-x-2 text-emerald-400 font-extrabold text-xs uppercase tracking-wider">
            <Sprout className="w-4 h-4" />
            <span>The HyperMonsoon Solution</span>
          </div>
          <h2 className="text-xl font-black text-white">
            Village-Scale Weather & Decision Intelligence
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            HyperMonsoon downscales satellite observations, AWS station readings, and historical climatology to predict monsoon onset timing, break duration, and rainfall return at the Block/Village scale. It translates raw weather outputs into plain language, crop-specific field advisories.
          </p>
        </div>

      </div>

      {/* Tech Stack Summary */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        <h3 className="text-xl font-extrabold text-white flex items-center space-x-2">
          <Cpu className="w-5 h-5 text-cyan-400" />
          <span>Technology & Architecture</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 space-y-1">
            <h4 className="font-extrabold text-emerald-400">Frontend</h4>
            <p className="text-slate-300">React + TypeScript + Tailwind CSS + Lucide Icons + Recharts</p>
          </div>
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 space-y-1">
            <h4 className="font-extrabold text-teal-400">Prediction Engine</h4>
            <p className="text-slate-300">Modular weighted rule-based AI engine ready for Python ML pipeline integration</p>
          </div>
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 space-y-1">
            <h4 className="font-extrabold text-cyan-400">i18n & Mobile</h4>
            <p className="text-slate-300">Multilingual dictionary (English, Tamil, Hindi) & low-bandwidth mobile navbar</p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-center">
          <button
            onClick={() => setActivePage('dashboard')}
            className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-extrabold text-xs shadow-lg hover:from-emerald-400 hover:to-teal-500"
          >
            <span>Launch Farmer Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
