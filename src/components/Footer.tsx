import React from 'react';
import { useApp } from '../context/AppContext';
import { CloudRain, ShieldAlert, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, setActivePage } = useApp();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-10 pb-20 lg:pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Central Tagline & Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center">
                <CloudRain className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              </div>
              <span className="font-extrabold text-lg text-white">HyperMonsoon</span>
            </div>
            
            <p className="text-sm text-slate-300 font-semibold italic">
              "{t('tagline')}"
            </p>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              HyperMonsoon provides block and village scale predictions of monsoon onset, dry spells/breaks, and localized agricultural decision advisories for farmers, FPOs, and agricultural officers across rural India.
            </p>

            {/* Prototype Banner Note */}
            <div className="flex items-start space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 text-xs text-amber-300">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{t('disclaimer')}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActivePage('dashboard')} className="hover:text-emerald-400 transition-colors">
                  Farmer Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('break_risk')} className="hover:text-emerald-400 transition-colors">
                  Monsoon Break Risk
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('advisory')} className="hover:text-emerald-400 transition-colors">
                  Crop Specific Advisory
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('feedback')} className="hover:text-emerald-400 transition-colors">
                  Report Field Rainfall
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('map')} className="hover:text-emerald-400 transition-colors">
                  Interactive Village Map
                </button>
              </li>
            </ul>
          </div>

          {/* Platform & Data */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              System Architecture
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActivePage('data_sources')} className="hover:text-emerald-400 transition-colors">
                  Data Pipeline & Sources
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('officer')} className="hover:text-emerald-400 transition-colors">
                  Agri Officer Portal
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('performance')} className="hover:text-emerald-400 transition-colors">
                  Model Performance & Metrics
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('about')} className="hover:text-emerald-400 transition-colors">
                  About Hackathon Prototype
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright & Bottom Info */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© 2026 HyperMonsoon System. Built for Agricultural Resilience & Food Security.</p>
          <div className="flex items-center space-x-1 mt-2 sm:mt-0">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
            <span>for rural farmers and agricultural officers.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
