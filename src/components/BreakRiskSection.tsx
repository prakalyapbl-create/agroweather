import React from 'react';
import { useApp } from '../context/AppContext';
import {
  CloudSun,
  ArrowRight,
  AlertTriangle
} from 'lucide-react';

export const BreakRiskSection: React.FC = () => {
  const { prediction, location, t, setActivePage } = useApp();

  const isHighRisk = prediction.breakProbability > 60;

  return (
    <div className="space-y-8 py-4">
      
      {/* Header Banner */}
      <div className="theme-bg-card border theme-border rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold">
          <CloudSun className="w-4 h-4 text-amber-400" />
          <span>DRY SPELL & MONSOON BREAK MONITOR</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black theme-text-primary">
          {t('breakTitle')} – {location.village}
        </h1>

        <p className="text-sm theme-text-muted max-w-3xl leading-relaxed">
          Monsoon breaks refer to temporary gaps in rainfall lasting 4 to 10 days during the active monsoon season. AgroWeather detects atmospheric drying signs early to protect crops from moisture stress.
        </p>
      </div>

      {/* Main Risk Status Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Risk Level Badge Card */}
        <div className="theme-bg-card border theme-border rounded-3xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold theme-text-muted uppercase tracking-wider">
              {t('breakRisk')}
            </span>
            <div className="mt-2 flex items-baseline space-x-3">
              <span className={`text-4xl font-black ${isHighRisk ? 'text-rose-400' : 'text-amber-400'}`}>
                {prediction.breakRiskLevel}
              </span>
              <span className="text-lg font-bold theme-text-muted">
                ({prediction.breakProbability}%)
              </span>
            </div>
            <p className="text-xs theme-text-muted mt-2">
              Based on wind vector shear, land humidity decline, and satellite cloud clearing.
            </p>
          </div>

          <div className="p-3 theme-bg-input rounded-xl border theme-border text-xs theme-text-secondary">
            <strong>Model Confidence:</strong> {prediction.confidenceScore}% ({prediction.confidenceLevel})
          </div>
        </div>

        {/* Expected Dry Spell Duration */}
        <div className="theme-bg-card border theme-border rounded-3xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold theme-text-muted uppercase tracking-wider">
              {t('expectedDryPeriod')}
            </span>
            <div className="mt-2 text-3xl font-black text-amber-400">
              {prediction.drySpellDurationDays}
            </div>
            <div className="mt-3 space-y-2 text-xs theme-text-secondary">
              <div className="flex justify-between py-1 border-b theme-border-subtle">
                <span className="theme-text-muted">{t('possibleStart')}:</span>
                <span className="font-bold text-amber-300">{prediction.possibleBreakStart}</span>
              </div>
              <div className="flex justify-between py-1 border-b theme-border-subtle">
                <span className="theme-text-muted">{t('possibleReturn')}:</span>
                <span className="font-bold text-emerald-400">{prediction.possibleRainfallReturn}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setActivePage('advisory')}
            className="w-full py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-extrabold text-xs flex items-center justify-center space-x-2 shadow-md hover:bg-emerald-400 transition-all"
          >
            <span>{t('viewAdvisory')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Soil Moisture Depletion Warning */}
        <div className="theme-bg-card border theme-border rounded-3xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold theme-text-muted uppercase tracking-wider">
              Farmer Action Plan
            </span>
            <h3 className="text-lg font-black theme-text-primary mt-1">
              Mitigation Steps
            </h3>
            <ul className="text-xs theme-text-secondary space-y-2 mt-3 list-disc list-inside">
              <li>Delay top-dressing urea until rainfall returns.</li>
              <li>Conserve soil moisture using organic mulch.</li>
              <li>Prepare farm ponds or sprinkler irrigation.</li>
            </ul>
          </div>

          <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 text-xs theme-text-primary flex items-start space-x-2">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>High evapotranspiration expected during dry period.</span>
          </div>
        </div>

      </div>
    </div>
  );
};
