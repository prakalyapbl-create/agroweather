import React from 'react';
import {
  Satellite,
  Radio,
  Cpu,
  Database,
  CloudSun,
  Users,
  ShieldCheck,
  Zap,
  Layers,
  LineChart
} from 'lucide-react';

export const DataSourcesPage: React.FC = () => {
  return (
    <div className="space-y-12 py-4">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-3 shadow-xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold mb-2">
          <Database className="w-4 h-4" />
          <span>DATA INTEGRATION & INFRASTRUCTURE</span>
        </div>
        <h1 className="text-3xl font-black text-white">
          Where Does Our Data Come From?
        </h1>
        <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
          HyperMonsoon aggregates multi-source satellite imagery, ground sensors, historical climatology, and community reports into a unified hyperlocal prediction pipeline.
        </p>
      </div>

      {/* VISUAL DATA PIPELINE */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-extrabold text-white">
            HyperMonsoon End-to-End Data Flow Diagram
          </h2>
          <p className="text-xs text-slate-400">
            From raw multi-spectral data to actionable farmer decisions
          </p>
        </div>

        {/* Multi-stage Pipeline SVG/CSS graphic */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          
          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
              <Satellite className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-extrabold text-white">Multi-Source Ingestion</h4>
            <p className="text-[10px] text-slate-400">Satellite, AWS & IoT feeds</p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-extrabold text-white">Data Processing</h4>
            <p className="text-[10px] text-slate-400">Spatial downscaling & noise filtering</p>
          </div>

          <div className="bg-gradient-to-b from-emerald-500/20 to-teal-500/20 border-2 border-emerald-500 rounded-2xl p-4 text-center space-y-2 shadow-lg shadow-emerald-500/20">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-black text-emerald-300">AI / ML Engine</h4>
            <p className="text-[10px] text-emerald-200">Onset & break probability prediction</p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
              <LineChart className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-extrabold text-white">Risk Analysis</h4>
            <p className="text-[10px] text-slate-400">Crop moisture stress evaluation</p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-extrabold text-white">Farmer Advisory</h4>
            <p className="text-[10px] text-slate-400">Multilingual push notification</p>
          </div>

        </div>
      </div>

      {/* 6 DATA SOURCES CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3 shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
            <Satellite className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-extrabold text-white">Satellite Observations</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            INSAT-3D thermal infrared and GPM microwave radiometer cloud top temperature data to detect convective cloud mass movements over the Bay of Bengal.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3 shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <Radio className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-extrabold text-white">Weather Stations (AWS)</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Real-time hourly temperature, rainfall intensity, relative humidity, and wind vector data from state agricultural automatic weather station grids.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3 shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-extrabold text-white">IoT Soil Moisture Sensors</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Volumetric soil water content sensors installed at 10cm and 30cm depths in pilot village plots to monitor root-zone moisture saturation.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3 shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
            <Database className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-extrabold text-white">Historical Monsoon Climatology</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            25+ years of gridded daily precipitation data (IMD 0.25° grid) to match historical onset patterns, Isohyetal movements, and recurring break cycles.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3 shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center">
            <CloudSun className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-extrabold text-white">Numerical Forecast Ensembles</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Short and medium-range forecast data from GFS (Global Forecast System) and NCUM ensemble prediction models for boundary layer dynamics.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3 shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-extrabold text-white">Farmer Ground Truth</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Hyperlocal precipitation reports and soil observations submitted directly by registered farmers in the field to eliminate local microclimate variance.
          </p>
        </div>

      </div>

    </div>
  );
};
