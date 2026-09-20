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
  Lightbulb
} from 'lucide-react';

export const FarmerAdvisory: React.FC = () => {
  const { selectedCrop, setSelectedCrop, prediction, location, t } = useApp();

  const advisory = getCropAdvisory(selectedCrop, prediction.status);

  const priorityStyles: Record<string, { bg: string; text: string; border: string }> = {
    urgent: { bg: 'bg-rose-500/20', text: 'text-rose-400', border: 'border-rose-500/40' },
    high: { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/40' },
    medium: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/40' },
    low: { bg: 'theme-bg-input', text: 'theme-text-secondary', border: 'theme-border' },
  };

  const categories = [
    { key: 'sowing', label: t('sowing'), data: advisory.sowing, icon: <Sprout className="w-6 h-6 text-emerald-400" /> },
    { key: 'irrigation', label: t('irrigation'), data: advisory.irrigation, icon: <Droplets className="w-6 h-6 text-cyan-400" /> },
    { key: 'protection', label: t('cropProtection'), data: advisory.protection, icon: <ShieldAlert className="w-6 h-6 text-amber-400" /> },
    { key: 'fertilizer', label: t('fertilizer'), data: advisory.fertilizer, icon: <FlaskConical className="w-6 h-6 text-purple-400" /> },
    { key: 'pest', label: t('pest'), data: advisory.pest, icon: <Bug className="w-6 h-6 text-rose-400" /> },
    { key: 'harvest', label: t('harvest'), data: advisory.harvest, icon: <Wheat className="w-6 h-6 text-teal-400" /> },
  ];

  return (
    <div className="space-y-8 py-4">
      
      {/* Page Header */}
      <div className="theme-bg-card border theme-border rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold mb-2">
              <Sprout className="w-4 h-4" />
              <span>ACTIONABLE FIELD RECOMMENDATIONS</span>
            </div>
            <h1 className="text-3xl font-black theme-text-primary">
              {t('advisoryTitle')}
            </h1>
            <p className="text-xs theme-text-muted mt-1">
              Customized agricultural guidance for {location.village} based on current status: <strong className="text-emerald-400">{prediction.statusLabel}</strong>
            </p>
          </div>
        </div>

        {/* CROP SELECTOR BAR */}
        <div className="pt-4 border-t theme-border-subtle">
          <label className="text-xs font-bold theme-text-muted uppercase tracking-wider mb-3 block">
            {t('selectCrop')}
          </label>

          <div className="flex flex-wrap gap-2">
            {ALL_CROPS.map((crop) => {
              const isSelected = selectedCrop === crop;
              return (
                <button
                  key={crop}
                  onClick={() => setSelectedCrop(crop)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                    isSelected
                      ? 'bg-emerald-500 text-slate-950 shadow-lg ring-2 ring-emerald-400'
                      : 'theme-bg-input theme-text-secondary hover:theme-text-primary border theme-border'
                  }`}
                >
                  🌱 {crop}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ADVISORY CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const style = priorityStyles[cat.data.priority] || priorityStyles.medium;
          return (
            <div
              key={cat.key}
              className="theme-bg-card border theme-border rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-lg hover:border-emerald-500/40 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl theme-bg-input border theme-border">
                      {cat.icon}
                    </div>
                    <h3 className="text-base font-extrabold theme-text-primary">
                      {cat.label}
                    </h3>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${style.bg} ${style.text} ${style.border}`}>
                    {cat.data.priority} Priority
                  </span>
                </div>

                <p className="text-xs theme-text-secondary leading-relaxed pt-1">
                  {cat.data.advice}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs theme-text-primary flex items-start space-x-2">
                <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-[11px] leading-relaxed">
                  <strong className="text-amber-400 block font-bold mb-0.5">Farmer Pro-Tip:</strong>
                  <span>{cat.data.tip}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
