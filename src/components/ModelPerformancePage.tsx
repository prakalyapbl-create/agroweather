import React from 'react';
import { VALIDATION_METRICS } from '../data/mockData';
import {
  BarChart3,
  AlertCircle
} from 'lucide-react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from 'recharts';

export const ModelPerformancePage: React.FC = () => {
  return (
    <div className="space-y-8 py-4">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-3 shadow-xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-2">
          <BarChart3 className="w-4 h-4" />
          <span>MODEL PERFORMANCE & VALIDATION</span>
        </div>
        <h1 className="text-3xl font-black text-white">
          AI Model Accuracy & Benchmark Metrics
        </h1>

        <div className="flex items-start space-x-2 bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 text-xs text-amber-300">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            <strong>Prototype / Demonstration Metrics:</strong> These performance metrics are historical benchmark validation calculations on pilot datasets for Thanjavur block. They demonstrate model validation architecture prior to deployment.
          </span>
        </div>
      </div>

      {/* METRIC CARDS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-1 shadow-xl">
          <p className="text-[11px] font-bold text-slate-400 uppercase">Onset Accuracy</p>
          <p className="text-3xl font-black text-emerald-400">{VALIDATION_METRICS.onsetAccuracy}%</p>
          <p className="text-[10px] text-slate-500">±1.2 days tolerance window</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-1 shadow-xl">
          <p className="text-[11px] font-bold text-slate-400 uppercase">Break Accuracy</p>
          <p className="text-3xl font-black text-teal-400">{VALIDATION_METRICS.breakAccuracy}%</p>
          <p className="text-[10px] text-slate-500">Dry spell detection rate</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-1 shadow-xl">
          <p className="text-[11px] font-bold text-slate-400 uppercase">Rainfall Error (MAE)</p>
          <p className="text-3xl font-black text-cyan-400">{VALIDATION_METRICS.maeRainfall}</p>
          <p className="text-[10px] text-slate-500">Mean absolute error 24h</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-1 shadow-xl">
          <p className="text-[11px] font-bold text-slate-400 uppercase">Alert Precision</p>
          <p className="text-3xl font-black text-purple-400">{VALIDATION_METRICS.alertPrecision}%</p>
          <p className="text-[10px] text-slate-500">False alarm rate &lt; 9%</p>
        </div>

      </div>

      {/* CHARTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
          <div>
            <h3 className="text-lg font-extrabold text-white">
              Predicted vs Observed Rainfall (24h mm)
            </h3>
            <p className="text-xs text-slate-400">
              7-day validation cycle comparison
            </p>
          </div>

          <div className="h-64 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={VALIDATION_METRICS.rainfallComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '12px',
                    color: '#f8fafc',
                    fontSize: '12px',
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Bar dataKey="predicted" name="Predicted Rain (mm)" fill="#10b981" radius={[6, 6, 0, 0]} />
                <Line type="monotone" dataKey="observed" name="Observed Rain (mm)" stroke="#06b6d4" strokeWidth={3} dot={{ r: 5 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-extrabold text-white">
              Historical Onset Validation (5-Year Backtest)
            </h3>
            <p className="text-xs text-slate-400">
              Predicted vs Actual IMD declared monsoon onset in Orathanadu
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-[11px] font-extrabold text-slate-400 uppercase">
                    <th className="py-2.5 px-3">Year</th>
                    <th className="py-2.5 px-3">Predicted Onset</th>
                    <th className="py-2.5 px-3">Observed Onset</th>
                    <th className="py-2.5 px-3">Deviation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-xs">
                  {VALIDATION_METRICS.onsetComparison.map((row) => (
                    <tr key={row.year} className="hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-white">{row.year}</td>
                      <td className="py-2.5 px-3 text-emerald-400 font-semibold">{row.predictedDay}</td>
                      <td className="py-2.5 px-3 text-cyan-400 font-semibold">{row.observedDay}</td>
                      <td className="py-2.5 px-3">
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold text-[10px]">
                          {row.deviationDays === 0 ? 'Exact Match' : `${row.deviationDays > 0 ? '+' : ''}${row.deviationDays} Day`}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700 text-xs text-slate-400 flex items-center justify-between">
            <span>Model Trained On: <strong>{VALIDATION_METRICS.historicalYearsTrained} Years IMD Grid Data</strong></span>
            <span className="text-emerald-400 font-bold">R² = 0.91</span>
          </div>
        </div>

      </div>

    </div>
  );
};
