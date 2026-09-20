import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DISTRICT_BLOCK_MAP } from '../data/mockData';
import {
  Thermometer,
  CloudRain,
  Droplets,
  Wind,
  Layers,
  Calendar,
  AlertTriangle,
  HelpCircle,
  TrendingUp,
  Sparkles,
  Info,
  CheckCircle,
  MapPin,
  RefreshCw
} from 'lucide-react';
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from 'recharts';

export const FarmerDashboard: React.FC = () => {
  const {
    location,
    setLocation,
    currentWeather,
    prediction,
    t,
    runDemoScenario,
    setActivePage,
    districts,
    blocks,
    villages
  } = useApp();

  const [activeChartMetric, setActiveChartMetric] = useState<'prob' | 'rain' | 'temp' | 'soil'>('prob');

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDistrict = e.target.value;
    const newBlocks = Object.keys(DISTRICT_BLOCK_MAP[newDistrict] || {});
    const defaultBlock = newBlocks[0] || '';
    const defaultVillages = DISTRICT_BLOCK_MAP[newDistrict]?.[defaultBlock] || [];
    setLocation({
      district: newDistrict,
      block: defaultBlock,
      village: defaultVillages[0] || 'Sample Village',
    });
  };

  const handleBlockChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newBlock = e.target.value;
    const defaultVillages = DISTRICT_BLOCK_MAP[location.district]?.[newBlock] || [];
    setLocation({
      ...location,
      block: newBlock,
      village: defaultVillages[0] || 'Sample Village',
    });
  };

  const handleVillageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation({
      ...location,
      village: e.target.value,
    });
  };

  const statusStyles: Record<string, { bg: string; border: string; text: string; dot: string }> = {
    onset_expected: {
      bg: 'bg-emerald-500/15',
      border: 'border-emerald-500/40',
      text: 'text-emerald-400',
      dot: 'bg-emerald-500',
    },
    active_monsoon: {
      bg: 'bg-cyan-500/15',
      border: 'border-cyan-500/40',
      text: 'text-cyan-400',
      dot: 'bg-cyan-400',
    },
    break_likely: {
      bg: 'bg-amber-500/15',
      border: 'border-amber-500/40',
      text: 'text-amber-400',
      dot: 'bg-amber-500',
    },
    break_ongoing: {
      bg: 'bg-rose-500/15',
      border: 'border-rose-500/40',
      text: 'text-rose-400',
      dot: 'bg-rose-500',
    },
    rainfall_returning: {
      bg: 'bg-teal-500/15',
      border: 'border-teal-500/40',
      text: 'text-teal-400',
      dot: 'bg-teal-400',
    },
    not_started: {
      bg: 'bg-slate-700/30',
      border: 'border-slate-600',
      text: 'text-slate-300',
      dot: 'bg-slate-400',
    },
  };

  const activeStyle = statusStyles[prediction.status] || statusStyles['onset_expected'];

  return (
    <div className="space-y-8 py-4">
      
      {/* TOP LOCATION SELECTOR BAR */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs text-emerald-400 font-bold uppercase tracking-wider mb-1">
            <MapPin className="w-4 h-4" />
            <span>{t('selectedLocation')}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center space-x-2">
            <span>{location.village}</span>
            <span className="text-slate-400 text-sm font-normal">
              ({location.block} Block, {location.district} Dist)
            </span>
          </h2>
        </div>

        {/* Dropdown Selectors */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="flex flex-col">
            <label className="text-[10px] font-bold text-slate-400 mb-1">{t('district')}</label>
            <select
              value={location.district}
              onChange={handleDistrictChange}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white font-semibold focus:outline-none focus:border-emerald-500"
            >
              {districts.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-[10px] font-bold text-slate-400 mb-1">{t('block')}</label>
            <select
              value={location.block}
              onChange={handleBlockChange}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white font-semibold focus:outline-none focus:border-emerald-500"
            >
              {blocks.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-[10px] font-bold text-slate-400 mb-1">{t('village')}</label>
            <select
              value={location.village}
              onChange={handleVillageChange}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white font-semibold focus:outline-none focus:border-emerald-500"
            >
              {villages.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={runDemoScenario}
            className="md:mt-4 px-3 py-2 rounded-lg bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold flex items-center space-x-1.5 hover:from-amber-500/30 hover:to-orange-500/30 transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Simulate Scenario</span>
          </button>
        </div>
      </div>

      {/* CURRENT WEATHER CARDS GRID */}
      <div>
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
          {t('currentWeather')}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex items-center space-x-3">
            <div className="p-3 rounded-lg bg-rose-500/10 text-rose-400">
              <Thermometer className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-medium">{t('temperature')}</p>
              <p className="text-lg font-black text-white">{currentWeather.temperature}°C</p>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex items-center space-x-3">
            <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
              <CloudRain className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-medium">{t('rainfall')}</p>
              <p className="text-lg font-black text-white">{currentWeather.rainfall} mm</p>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex items-center space-x-3">
            <div className="p-3 rounded-lg bg-teal-500/10 text-teal-400">
              <Droplets className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-medium">{t('humidity')}</p>
              <p className="text-lg font-black text-white">{currentWeather.humidity}%</p>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex items-center space-x-3">
            <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-medium">{t('soilMoisture')}</p>
              <p className="text-lg font-black text-white">{currentWeather.soilMoisture}%</p>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex items-center space-x-3 col-span-2 sm:col-span-1">
            <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Wind className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-medium">{t('windSpeed')}</p>
              <p className="text-lg font-black text-white">{currentWeather.windSpeed} km/h</p>
            </div>
          </div>

        </div>
      </div>

      {/* PROMINENT MONSOON STATUS CARD & BREAK RISK */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className={`lg:col-span-2 rounded-3xl border p-6 sm:p-8 space-y-6 ${activeStyle.bg} ${activeStyle.border} shadow-2xl relative overflow-hidden`}>
          
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/40 pb-4">
            <div className="flex items-center space-x-2">
              <span className={`w-3 h-3 rounded-full ${activeStyle.dot} animate-pulse`} />
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-300">
                {t('monsoonStatus')}
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-900/60 px-3 py-1 rounded-full text-xs font-semibold text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t('confidence')}: <strong className="text-white">{prediction.confidenceScore}% ({prediction.confidenceLevel})</strong></span>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className={`text-3xl sm:text-4xl font-black ${activeStyle.text} tracking-tight`}>
              {prediction.statusLabel}
            </h1>
            <p className="text-base text-slate-200 font-semibold flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>Expected Timing: <strong className="text-white">{prediction.expectedOnsetDays}</strong></span>
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-slate-900/70 rounded-xl p-3.5 border border-slate-800">
              <p className="text-[11px] text-slate-400 font-medium">{t('rainfallProbability')}</p>
              <p className="text-xl font-black text-emerald-400">{prediction.onsetProbability}%</p>
            </div>
            <div className="bg-slate-900/70 rounded-xl p-3.5 border border-slate-800">
              <p className="text-[11px] text-slate-400 font-medium">{t('breakRisk')}</p>
              <p className={`text-xl font-black ${prediction.breakProbability > 60 ? 'text-rose-400' : 'text-amber-400'}`}>
                {prediction.breakRiskLevel} ({prediction.breakProbability}%)
              </p>
            </div>
            <div className="bg-slate-900/70 rounded-xl p-3.5 border border-slate-800 col-span-2 sm:col-span-1">
              <p className="text-[11px] text-slate-400 font-medium">Next Action</p>
              <button
                onClick={() => setActivePage('advisory')}
                className="text-xs font-bold text-emerald-400 hover:underline flex items-center space-x-1 mt-1"
              >
                <span>View Crop Advisory</span>
                <CheckCircle className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between space-y-4 shadow-xl">
          <div>
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <AlertTriangle className="w-4 h-4" />
              <span>{t('breakTitle')}</span>
            </div>
            <h3 className="text-xl font-black text-white">
              Dry Spell Assessment
            </h3>

            <div className="mt-4 space-y-3">
              <div className="flex justify-between items-center text-xs py-1.5 border-b border-slate-800">
                <span className="text-slate-400">{t('expectedDryPeriod')}</span>
                <span className="font-extrabold text-white">{prediction.drySpellDurationDays}</span>
              </div>
              <div className="flex justify-between items-center text-xs py-1.5 border-b border-slate-800">
                <span className="text-slate-400">{t('possibleStart')}</span>
                <span className="font-extrabold text-amber-300">{prediction.possibleBreakStart}</span>
              </div>
              <div className="flex justify-between items-center text-xs py-1.5 border-b border-slate-800">
                <span className="text-slate-400">{t('possibleReturn')}</span>
                <span className="font-extrabold text-emerald-400">{prediction.possibleRainfallReturn}</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 mt-4 leading-relaxed bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
              "{t('breakDesc')}"
            </p>
          </div>

          <button
            onClick={() => setActivePage('break_risk')}
            className="w-full py-2.5 rounded-xl bg-slate-800 text-amber-300 font-bold text-xs hover:bg-slate-700 transition-colors border border-amber-500/20 text-center"
          >
            View Deep Break Risk Indicators →
          </button>
        </div>

      </div>

      {/* VISUAL MONSOON TIMELINE */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-extrabold text-white flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <span>{t('timelineTitle')}</span>
          </h3>
          <span className="text-xs text-slate-400 font-medium">
            Stage 2 of 5 Active
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
          
          <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-4 text-center space-y-2 relative">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Today</span>
            <div className="w-8 h-8 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center mx-auto text-xs font-bold">
              1
            </div>
            <h4 className="text-xs font-extrabold text-slate-300">{t('preMonsoon')}</h4>
            <p className="text-[10px] text-slate-400">Sowing prep & nursery setup</p>
          </div>

          <div className="bg-emerald-500/20 border-2 border-emerald-500 rounded-xl p-4 text-center space-y-2 relative shadow-lg shadow-emerald-500/10">
            <span className="inline-block px-2 py-0.5 rounded text-[9px] font-black bg-emerald-500 text-slate-950 uppercase">
              Current Stage
            </span>
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto text-xs font-black">
              2
            </div>
            <h4 className="text-xs font-extrabold text-emerald-300">{t('likelyOnset')}</h4>
            <p className="text-[10px] text-emerald-200/80">+3 to 5 Days</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-4 text-center space-y-2 relative">
            <span className="text-[10px] font-bold text-slate-400 uppercase">+12 Days</span>
            <div className="w-8 h-8 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center mx-auto text-xs font-bold">
              3
            </div>
            <h4 className="text-xs font-extrabold text-slate-300">{t('activeRainfall')}</h4>
            <p className="text-[10px] text-slate-400">Peak transplanting</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-4 text-center space-y-2 relative">
            <span className="text-[10px] font-bold text-slate-400 uppercase">+20 Days</span>
            <div className="w-8 h-8 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center mx-auto text-xs font-bold">
              4
            </div>
            <h4 className="text-xs font-extrabold text-slate-300">{t('possibleBreak')}</h4>
            <p className="text-[10px] text-slate-400">4-6 days dry spell</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-4 text-center space-y-2 relative">
            <span className="text-[10px] font-bold text-slate-400 uppercase">+26 Days</span>
            <div className="w-8 h-8 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center mx-auto text-xs font-bold">
              5
            </div>
            <h4 className="text-xs font-extrabold text-slate-300">{t('rainfallReturn')}</h4>
            <p className="text-[10px] text-slate-400">Secondary spell</p>
          </div>

        </div>
      </div>

      {/* 7-DAY INTERACTIVE FORECAST CHART */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-extrabold text-white">
              {t('chartTitle')}
            </h3>
            <p className="text-xs text-slate-400">
              Daily trend metrics for {location.village}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 bg-slate-800 p-1.5 rounded-xl border border-slate-700">
            <button
              onClick={() => setActiveChartMetric('prob')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeChartMetric === 'prob'
                  ? 'bg-emerald-500 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t('probToggle')}
            </button>
            <button
              onClick={() => setActiveChartMetric('rain')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeChartMetric === 'rain'
                  ? 'bg-cyan-500 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t('rainToggle')}
            </button>
            <button
              onClick={() => setActiveChartMetric('temp')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeChartMetric === 'temp'
                  ? 'bg-rose-500 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t('tempToggle')}
            </button>
            <button
              onClick={() => setActiveChartMetric('soil')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeChartMetric === 'soil'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t('soilToggle')}
            </button>
          </div>
        </div>

        <div className="h-72 w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={prediction.forecast}>
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

              {activeChartMetric === 'prob' && (
                <Bar dataKey="probability" name="Rainfall Probability (%)" fill="#10b981" radius={[6, 6, 0, 0]} />
              )}
              {activeChartMetric === 'rain' && (
                <Bar dataKey="expectedRainfall" name="Expected Rainfall (mm)" fill="#06b6d4" radius={[6, 6, 0, 0]} />
              )}
              {activeChartMetric === 'temp' && (
                <Line type="monotone" dataKey="tempMax" name="Max Temp (°C)" stroke="#f43f5e" strokeWidth={3} dot={{ r: 5 }} />
              )}
              {activeChartMetric === 'soil' && (
                <Line type="monotone" dataKey="soilMoisture" name="Soil Moisture (%)" stroke="#f59e0b" strokeWidth={3} dot={{ r: 5 }} />
              )}
            </ComposedChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* EXPLAINABLE AI SECTION */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-white">
              {t('whyPredicting')}
            </h3>
            <p className="text-xs text-slate-400">
              Explainable AI Feature Attribution Breakdown for {location.village}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-300">{t('rainfallTrend')}</span>
              <span className="text-emerald-400">{prediction.factors.rainfallTrend}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-3">
              <div
                className="bg-emerald-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${prediction.factors.rainfallTrend}%` }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-300">{t('soilMoisture')}</span>
              <span className="text-amber-400">{prediction.factors.soilMoisture}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-3">
              <div
                className="bg-amber-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${prediction.factors.soilMoisture}%` }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-300">{t('cloudActivity')}</span>
              <span className="text-cyan-400">{prediction.factors.cloudActivity}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-3">
              <div
                className="bg-cyan-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${prediction.factors.cloudActivity}%` }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-300">{t('historicalMatch')}</span>
              <span className="text-purple-400">{prediction.factors.historicalMatch}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-3">
              <div
                className="bg-purple-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${prediction.factors.historicalMatch}%` }}
              />
            </div>
          </div>

        </div>

        <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 sm:p-5 text-xs text-slate-300 leading-relaxed flex items-start space-x-3">
          <Info className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-extrabold text-white mb-1">AI Rationale Summary</h4>
            <p>{prediction.explanationText}</p>
          </div>
        </div>

      </div>

    </div>
  );
};
