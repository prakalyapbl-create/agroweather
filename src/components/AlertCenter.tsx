import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Bell,
  Check,
  MapPin,
  Calendar,
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
      bg: 'bg-slate-700/20',
      text: 'text-slate-300',
      border: 'border-slate-700',
      icon: <CloudRain className="w-5 h-5 text-slate-400" />,
    },
  };

  return (
    <div className="space-y-8 py-4">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-2 shadow-xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold mb-2">
          <Bell className="w-4 h-4" />
          <span>REAL-TIME WEATHER ALERTS</span>
        </div>
        <h1 className="text-3xl font-black text-white">
          {t('weatherAlerts')}
        </h1>
        <p className="text-xs text-slate-400">
          Critical weather warnings and monsoon onset notifications push alerts.
        </p>
      </div>

      {/* Alerts Grid */}
      <div className="space-y-4">
        {alerts.map((alert) => {
          const style = severityStyles[alert.severity] || severityStyles['moderate'];

          return (
            <div
              key={alert.id}
              className={`rounded-2xl border p-6 transition-all shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${style.bg} ${style.border} ${
                alert.read ? 'opacity-75' : 'ring-1 ring-amber-500/20'
              }`}
            >
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  {style.icon}
                  <h3 className="text-lg font-extrabold text-white">
                    {alert.title}
                  </h3>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${style.text} bg-slate-950/60 border ${style.border}`}>
                    {alert.severity}
                  </span>
                  {!alert.read && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-black bg-amber-500 text-slate-950 uppercase">
                      New
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                  {alert.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400 pt-1">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{alert.location}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{alert.date}</span>
                  </span>
                </div>

                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs text-emerald-300">
                  <strong>Recommended Action:</strong> {alert.actionRequired}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2 shrink-0 pt-2 md:pt-0">
                {!alert.read && (
                  <button
                    onClick={() => markAlertAsRead(alert.id)}
                    className="flex items-center space-x-1 px-3 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700 hover:text-white border border-slate-700"
                  >
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t('markRead')}</span>
                  </button>
                )}

                <button
                  onClick={() => setActivePage('advisory')}
                  className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 text-xs font-black shadow-md hover:from-emerald-400 hover:to-teal-500"
                >
                  <span>{t('viewAdvisoryAction')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
