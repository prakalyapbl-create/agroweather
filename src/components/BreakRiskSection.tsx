import React from 'react';
import { useApp } from '../context/AppContext';
import {
  CloudSun,
  Info,
  ArrowRight
} from 'lucide-react';

export const BreakRiskSection: React.FC = () => {
  const { prediction, location, t, setActivePage } = useApp();

  const isHighRisk = prediction.breakProbability > 60;

  return (
    <div className="space-y-8 py-4">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-500/20 via-slate-900 to-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold">
          <CloudSun className="w-4 h-4 text-amber-400" />
          <span>DRY SPELL & MONSOON BREAK MONITOR</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white">
          {t('breakTitle')} – {location.village}
        </h1>

        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          Monsoon breaks refer to temporary gaps in rainfall lasting 4 to 10 days during the active monsoon season. HyperMonsoon detects atmospheric drying signs early to protect crops from moisture stress.
        </p>
      </div>

      {/* Main Risk Status Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Risk Level Badge Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {t('breakRisk')}
            </span>
            <div className="mt-2 flex items-baseline space-x-3">
              <span className={`text-4xl font-black ${isHighRisk ? 'text-rose-400' : 'text-amber-400'}`}>
                {prediction.breakRiskLevel}
              </span>
              <span className="text-lg font-bold text-slate-400">
                ({prediction.breakProbability}%)
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Based on wind vector shear, land humidity decline, and satellite cloud clearing.
            </p>
          </div>

          <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700 text-xs text-slate-300">
            <strong>Model Confidence:</strong> {prediction.confidenceScore}% ({prediction.confidenceLevel})
          </div>
        </div>

        {/* Expected Dry Spell Duration */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {t('expectedDryPeriod')}
            </span>
            <h2 className="text-4xl font-black text-white mt-2">
              {prediction.drySpellDurationDays}
            </h2>
            <p className="text-xs text-slate-400 mt-2">
              Estimated duration of reduced rainfall over {location.block} Block.
            </p>
          </div>

          <div className="flex items-center justify-between text-xs py-2 border-t border-slate-800 text-slate-300">
            <span>Historical Avg for Block:</span>
            <span className="font-bold text-white">4.8 Days</span>
          </div>
        </div>

        {/* Start & Return Key Dates */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Timeline Dates
            </span>

            <div className="mt-4 space-y-3">
              <div className="flex justify-between items-center text-xs py-2 border-b border-slate-800">
                <span className="text-slate-400">{t('possibleStart')}</span>
                <span className="font-black text-amber-300 text-base">{prediction.possibleBreakStart}</span>
              </div>
              <div className="flex justify-between items-center text-xs py-2 border-b border-slate-800">
                <span className="text-slate-400">{t('possibleReturn')}</span>
                <span className="font-black text-emerald-400 text-base">{prediction.possibleRainfallReturn}</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-xs text-emerald-300">
            Rainfall Return Prob: <strong>{prediction.rainfallReturnProbability}%</strong>
          </div>
        </div>

      </div>

      {/* WHY IS THIS PREDICTION MADE? INDICATOR BARS */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        <h3 className="text-xl font-extrabold text-white flex items-center space-x-2">
          <Info className="w-5 h-5 text-amber-400" />
          <span>Why is this prediction made? (Simplified Indicators)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-300">Rainfall Deficit Trend</span>
              <span className="text-rose-400">76% Risk Indicator</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-3">
              <div className="bg-rose-500 h-3 rounded-full" style={{ width: '76%' }} />
            </div>
            <p className="text-[11px] text-slate-400">Precipitation index dropped over last 48 hours.</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-300">Soil Moisture Decline Rate</span>
              <span className="text-amber-400">68% Risk Indicator</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-3">
              <div className="bg-amber-500 h-3 rounded-full" style={{ width: '68%' }} />
            </div>
            <p className="text-[11px] text-slate-400">Volumetric water content dropping in topsoil.</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-300">Atmospheric Wind Shear</span>
              <span className="text-cyan-400">82% Risk Indicator</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-3">
              <div className="bg-cyan-500 h-3 rounded-full" style={{ width: '82%' }} />
            </div>
            <p className="text-[11px] text-slate-400">Dry easterly winds prevailing over coastal belt.</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-300">Satellite Cloud Cover Clearing</span>
              <span className="text-purple-400">64% Risk Indicator</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-3">
              <div className="bg-purple-500 h-3 rounded-full" style={{ width: '64%' }} />
            </div>
            <p className="text-[11px] text-slate-400">Decreased convective clouds in INSAT thermal images.</p>
          </div>

        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={() => setActivePage('advisory')}
            className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs hover:from-amber-400 hover:to-orange-400 transition-all"
          >
            <span>See Recommended Farm Actions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
