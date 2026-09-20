import React from 'react';
import type { Theme } from '../../types';
import { useApp } from '../../context/AppContext';

interface ThemeSelectorProps {
  className?: string;
  variant?: 'buttons' | 'dropdown' | 'cards';
}

export const THEME_OPTIONS: { id: Theme; label: string; icon: string; descKey: string; color: string }[] = [
  { id: 'agriculture', label: 'Agriculture', icon: '🌿', descKey: 'themeAgriDesc', color: 'from-emerald-600 to-green-800' },
  { id: 'sky', label: 'Sky Blue', icon: '☁️', descKey: 'themeSkyDesc', color: 'from-sky-500 to-blue-700' },
  { id: 'monsoon', label: 'Monsoon', icon: '🌧️', descKey: 'themeMonsoonDesc', color: 'from-teal-600 to-cyan-800' },
  { id: 'light', label: 'Light', icon: '☀️', descKey: 'themeLightDesc', color: 'from-amber-400 to-slate-200' },
  { id: 'dark', label: 'Dark', icon: '🌙', descKey: 'themeDarkDesc', color: 'from-slate-700 to-slate-900' },
];

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ className = '', variant = 'cards' }) => {
  const { theme, setTheme } = useApp();

  if (variant === 'dropdown') {
    return (
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as Theme)}
        className={`px-3 py-1.5 rounded-lg text-xs font-semibold theme-bg-input theme-border border theme-text-primary focus:outline-none focus:ring-2 focus:ring-emerald-500 ${className}`}
      >
        {THEME_OPTIONS.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.icon} {opt.label}
          </option>
        ))}
      </select>
    );
  }

  if (variant === 'buttons') {
    return (
      <div className={`flex flex-wrap gap-1.5 ${className}`}>
        {THEME_OPTIONS.map((opt) => {
          const isSelected = theme === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => setTheme(opt.id)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                isSelected
                  ? 'bg-emerald-500 text-slate-950 shadow-md ring-2 ring-emerald-400'
                  : 'theme-bg-input theme-text-secondary hover:theme-text-primary border theme-border'
              }`}
            >
              <span>{opt.icon}</span>
              <span>{opt.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 ${className}`}>
      {THEME_OPTIONS.map((opt) => {
        const isSelected = theme === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => setTheme(opt.id)}
            className={`flex flex-col items-center justify-between p-3.5 rounded-xl border text-center transition-all ${
              isSelected
                ? 'border-emerald-500 bg-emerald-500/15 shadow-lg shadow-emerald-500/10 ring-2 ring-emerald-500/50'
                : 'theme-border theme-bg-input hover:border-slate-500 opacity-80 hover:opacity-100'
            }`}
          >
            <div className="text-2xl mb-1">{opt.icon}</div>
            <div className="font-bold text-xs theme-text-primary mb-0.5">{opt.label}</div>
            <div className={`w-full h-1.5 rounded-full mt-2 bg-gradient-to-r ${opt.color}`} />
          </button>
        );
      })}
    </div>
  );
};
