import React from 'react';
import { CloudRain, ShieldAlert, Sprout, Award } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-10 py-6 max-w-5xl mx-auto">
      
      {/* Header Banner */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
          <CloudRain className="w-8 h-8 text-slate-950 stroke-[2.5]" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-black theme-text-primary">
          About AgroWeather
        </h1>
        <p className="text-base theme-text-muted max-w-2xl mx-auto">
          Hyperlocal Monsoon Onset & Break Prediction System designed for rural agricultural resilience in India.
        </p>
      </div>

      {/* Problem & Solution Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="theme-bg-card border theme-border rounded-3xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center space-x-2 text-rose-400 font-extrabold text-xs uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>The Core Problem</span>
          </div>
          <h2 className="text-xl font-black theme-text-primary">
            District Forecasts Don't Help Village Farmers
          </h2>
          <p className="text-xs theme-text-secondary leading-relaxed">
            Standard weather forecasts cover entire districts (over 5,000 sq km), whereas microclimates, rainfall distribution, and soil moisture vary significantly at the village level. A delayed monsoon or unpredicted 6-day dry spell directly impacts sowing windows, irrigation fuel costs, fertilizer application, and crop yields.
          </p>
        </div>

        <div className="theme-bg-card border theme-border rounded-3xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center space-x-2 text-emerald-400 font-extrabold text-xs uppercase tracking-wider">
            <Sprout className="w-4 h-4" />
            <span>The AgroWeather Solution</span>
          </div>
          <h2 className="text-xl font-black theme-text-primary">
            Village-Scale Weather & Decision Intelligence
          </h2>
          <p className="text-xs theme-text-secondary leading-relaxed">
            AgroWeather downscales satellite observations, AWS station readings, and historical climatology to predict monsoon onset timing, break duration, and rainfall return at the Block/Village scale. It translates raw weather outputs into plain language, crop-specific field advisories.
          </p>
        </div>

      </div>

      {/* Impact & Target Audience */}
      <div className="theme-bg-card border theme-border rounded-3xl p-8 space-y-6 shadow-xl">
        <h2 className="text-xl font-black theme-text-primary flex items-center space-x-2">
          <Award className="w-5 h-5 text-emerald-400" />
          <span>Built for Farmers, Agricultural Officers, & FPOs</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="theme-bg-input border theme-border rounded-2xl p-5 space-y-2">
            <h3 className="font-extrabold text-sm theme-text-primary">👩‍🌾 Smallholder Farmers</h3>
            <p className="text-xs theme-text-muted leading-relaxed">
              Get plain-language local advisories on when to sow, irrigate, or hold fertilizer applications.
            </p>
          </div>

          <div className="theme-bg-input border theme-border rounded-2xl p-5 space-y-2">
            <h3 className="font-extrabold text-sm theme-text-primary">🛡️ Agricultural Extension Officers</h3>
            <p className="text-xs theme-text-muted leading-relaxed">
              Monitor village clusters, identify dry spell risks across blocks, and issue crop advisories.
            </p>
          </div>

          <div className="theme-bg-input border theme-border rounded-2xl p-5 space-y-2">
            <h3 className="font-extrabold text-sm theme-text-primary">🚜 Farmer Producer Orgs (FPOs)</h3>
            <p className="text-xs theme-text-muted leading-relaxed">
              Plan seed distribution and input supply logistics based on micro-level onset windows.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
