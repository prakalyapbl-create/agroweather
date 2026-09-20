import React from 'react';
import { useApp } from '../context/AppContext';
import { ALL_CROPS } from '../data/mockData';
import { getCropAdvisory } from '../utils/advisoryEngine';
import {
  Sprout,
  Droplets,
  ShieldAlert,
  FlaskConical,
  Bug,
  Wheat,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';

export const FarmerAdvisory: React.FC = () => {
  const { selectedCrop, setSelectedCrop, prediction, location, t } = useApp();

  const advisory = getCropAdvisory(selectedCrop, prediction.status);

  const priorityStyles: Record<string, { bg: string; text: string; border: string }> = {
    urgent: { bg: 'bg-rose-500/20', text: 'text-rose-400', border: 'border-rose-500/40' },
    high: { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/40' },
    medium: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/40' },
    low: { bg: 'bg-slate-700/40', text: 'text-slate-300', border: 'border-slate-600' },
  };

  return (
    <div className="space-y-8 py-4">
      
      {/* Page Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-2">
              <Sprout className="w-4 h-4" />
              <span>ACTIONABLE FIELD RECOMMENDATIONS</span>
            </div>
            <h1 className="text-3xl font-black text-white">
              {t('advisoryTitle')}
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Customized agricultural guidance for {location.village} based on current status: <strong className="text-emerald-400">{prediction.statusLabel}</strong>
            </p>
          </div>
        </div>

        {/* CROP SELECTOR BAR */}
        <div className="pt-4 border-t border-slate-800">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 block">
            {t('selectCrop')}
          </label>

          <div className="flex flex-wrap gap-2">
            {ALL_CROPS.map((crop) => {
              const isSelected = selectedCrop === crop;
              return (
                <button
                  key={crop}
                  onClick={() => setSelectedCrop(crop)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center space-x-2 ${
                    isSelected
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-lg shadow-emerald-500/20 scale-[1.03]'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                  }`}
                >
                  <span>{crop}</span>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 fill-slate-950 stroke-emerald-500" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ADVISORY CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Sowing */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl flex flex-col justify-between hover:border-emerald-500/40 transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Sprout className="w-5 h-5" />
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${priorityStyles[advisory.sowing.priority].bg} ${priorityStyles[advisory.sowing.priority].text} ${priorityStyles[advisory.sowing.priority].border}`}>
                {advisory.sowing.priority} Priority
              </span>
            </div>

            <h3 className="text-lg font-extrabold text-white">
              🌱 {t('sowing')}
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              {advisory.sowing.advice}
            </p>
          </div>

          <div className="bg-slate-800/60 rounded-2xl p-3 border border-slate-700/60 text-xs text-slate-400 flex items-start space-x-2">
            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span><strong>Pro-Tip:</strong> {advisory.sowing.tip}</span>
          </div>
        </div>

        {/* Card 2: Irrigation */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Droplets className="w-5 h-5" />
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${priorityStyles[advisory.irrigation.priority].bg} ${priorityStyles[advisory.irrigation.priority].text} ${priorityStyles[advisory.irrigation.priority].border}`}>
                {advisory.irrigation.priority} Priority
              </span>
            </div>

            <h3 className="text-lg font-extrabold text-white">
              💧 {t('irrigation')}
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              {advisory.irrigation.advice}
            </p>
          </div>

          <div className="bg-slate-800/60 rounded-2xl p-3 border border-slate-700/60 text-xs text-slate-400 flex items-start space-x-2">
            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span><strong>Pro-Tip:</strong> {advisory.irrigation.tip}</span>
          </div>
        </div>

        {/* Card 3: Crop Protection */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl flex flex-col justify-between hover:border-teal-500/40 transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${priorityStyles[advisory.protection.priority].bg} ${priorityStyles[advisory.protection.priority].text} ${priorityStyles[advisory.protection.priority].border}`}>
                {advisory.protection.priority} Priority
              </span>
            </div>

            <h3 className="text-lg font-extrabold text-white">
              🌾 {t('cropProtection')}
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              {advisory.protection.advice}
            </p>
          </div>

          <div className="bg-slate-800/60 rounded-2xl p-3 border border-slate-700/60 text-xs text-slate-400 flex items-start space-x-2">
            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span><strong>Pro-Tip:</strong> {advisory.protection.tip}</span>
          </div>
        </div>

        {/* Card 4: Fertilizer */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl flex flex-col justify-between hover:border-purple-500/40 transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                <FlaskConical className="w-5 h-5" />
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${priorityStyles[advisory.fertilizer.priority].bg} ${priorityStyles[advisory.fertilizer.priority].text} ${priorityStyles[advisory.fertilizer.priority].border}`}>
                {advisory.fertilizer.priority} Priority
              </span>
            </div>

            <h3 className="text-lg font-extrabold text-white">
              🧪 {t('fertilizer')}
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              {advisory.fertilizer.advice}
            </p>
          </div>

          <div className="bg-slate-800/60 rounded-2xl p-3 border border-slate-700/60 text-xs text-slate-400 flex items-start space-x-2">
            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span><strong>Pro-Tip:</strong> {advisory.fertilizer.tip}</span>
          </div>
        </div>

        {/* Card 5: Pest */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl flex flex-col justify-between hover:border-rose-500/40 transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400">
                <Bug className="w-5 h-5" />
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${priorityStyles[advisory.pest.priority].bg} ${priorityStyles[advisory.pest.priority].text} ${priorityStyles[advisory.pest.priority].border}`}>
                {advisory.pest.priority} Priority
              </span>
            </div>

            <h3 className="text-lg font-extrabold text-white">
              🐛 {t('pest')}
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              {advisory.pest.advice}
            </p>
          </div>

          <div className="bg-slate-800/60 rounded-2xl p-3 border border-slate-700/60 text-xs text-slate-400 flex items-start space-x-2">
            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span><strong>Pro-Tip:</strong> {advisory.pest.tip}</span>
          </div>
        </div>

        {/* Card 6: Harvest */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl flex flex-col justify-between hover:border-amber-500/40 transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                <Wheat className="w-5 h-5" />
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${priorityStyles[advisory.harvest.priority].bg} ${priorityStyles[advisory.harvest.priority].text} ${priorityStyles[advisory.harvest.priority].border}`}>
                {advisory.harvest.priority} Priority
              </span>
            </div>

            <h3 className="text-lg font-extrabold text-white">
              🌾 {t('harvest')}
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              {advisory.harvest.advice}
            </p>
          </div>

          <div className="bg-slate-800/60 rounded-2xl p-3 border border-slate-700/60 text-xs text-slate-400 flex items-start space-x-2">
            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span><strong>Pro-Tip:</strong> {advisory.harvest.tip}</span>
          </div>
        </div>

      </div>

    </div>
  );
};
