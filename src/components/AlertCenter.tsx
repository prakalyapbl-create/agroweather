import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Bell,
  Check,
  MapPin,
  AlertTriangle,
  CloudRain,
  CloudSun,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export const AlertCenter: React.FC = () => {
  const { alerts, markAlertAsRead, t, setActivePage } = useApp();

  const severityStyles: Record<string, { bg: string; text: string; border: string; icon: React.ReactNode }> = {
    critical: {
      bg: 'bg-rose-500/15',
      text: 'text-rose-400',
      border: 'border-rose-500/40',
      icon: <ShieldAlert className="w-5 h-5 text-rose-400" />,
    },
    high: {
      bg: 'bg-amber-500/15',
      text: 'text-amber-400',
      border: 'border-amber-500/40',
      icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
    },
    moderate: {
      bg: 'bg-cyan-500/15',
      text: 'text-cyan-400',
      border: 'border-cyan-500/40',
      icon: <CloudSun className="w-5 h-5 text-cyan-400" />,
    },
    low: {
      bg: 'theme-bg-input',
      text: 'theme-text-secondary',
      border: 'theme-border',
      icon: <CloudRain className="w-5 h-5 text-emerald-400" />,
    },
  };

  return (
    <div className="space-y-8 py-4">
      
      {/* Header */}
      <div className="theme-bg-card border theme-border rounded-3xl p-6 sm:p-8 space-y-2 shadow-xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 text-xs font-bold mb-2">
          <Bell className="w-4 h-4" />
          <span>REAL-TIME WEATHER ALERTS</span>
        </div>
        <h1 className="text-3xl font-black theme-text-primary">
          {t('weatherAlerts')}
        </h1>
        <p className="text-xs theme-text-muted">
          Critical weather warnings and monsoon onset notifications push alerts.
        </p>
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {alerts.map((alert) => {
          const style = severityStyles[alert.severity] || severityStyles.moderate;
          return (
            <div
              key={alert.id}
              className={`theme-bg-card border ${alert.read ? 'theme-border opacity-75' : style.border} rounded-2xl p-6 shadow-lg transition-all flex flex-col sm:flex-row items-start justify-between gap-4`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl ${style.bg} shrink-0`}>
                  {style.icon}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${style.bg} ${style.text}`}>
                      {alert.severity}
                    </span>
                    <span className="text-xs theme-text-muted flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{alert.location}</span>
                    </span>
                    <span className="text-xs theme-text-muted">• {alert.date}</span>
                  </div>

                  <h3 className="text-base font-extrabold theme-text-primary">
                    {alert.title}
                  </h3>
                  <p className="text-xs theme-text-secondary leading-relaxed">
                    {alert.description}
                  </p>
                  <p className="text-xs font-bold text-amber-400 mt-2">
                    Recommended Action: {alert.actionRequired}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
                {!alert.read && (
                  <button
                    onClick={() => markAlertAsRead(alert.id)}
                    className="px-3 py-1.5 rounded-lg theme-bg-input border theme-border text-xs font-bold theme-text-primary hover:border-emerald-500 transition-all flex items-center space-x-1"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t('markRead')}</span>
                  </button>
                )}

                <button
                  onClick={() => setActivePage('advisory')}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold hover:bg-emerald-500/25 transition-all flex items-center space-x-1"
                >
                  <span>{t('viewAdvisoryAction')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
