import React from 'react';
import {
  Database,
  Satellite,
  Radio,
  Cpu
} from 'lucide-react';

export const DataSourcesPage: React.FC = () => {
  return (
    <div className="space-y-8 py-4">
      
      {/* Header */}
      <div className="theme-bg-card border theme-border rounded-3xl p-6 sm:p-8 space-y-3 shadow-xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-400 text-xs font-bold mb-2">
          <Database className="w-4 h-4" />
          <span>DATA INTEGRATION & INFRASTRUCTURE</span>
        </div>
        <h1 className="text-3xl font-black theme-text-primary">
          Where Does Our Data Come From?
        </h1>
        <p className="text-xs theme-text-muted max-w-2xl leading-relaxed">
          AgroWeather aggregates multi-source satellite imagery, ground sensors, historical climatology, and community reports into a unified hyperlocal prediction pipeline.
        </p>
      </div>

      {/* VISUAL DATA PIPELINE */}
      <div className="theme-bg-card border theme-border rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-extrabold theme-text-primary">
            AgroWeather End-to-End Data Flow Diagram
          </h2>
          <p className="text-xs theme-text-muted">
            From raw multi-spectral data to actionable farmer decisions
          </p>
        </div>

        {/* Multi-stage Pipeline graphic */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          
          <div className="theme-bg-input border theme-border rounded-2xl p-4 text-center space-y-2">
            <Satellite className="w-8 h-8 text-emerald-400 mx-auto" />
            <h4 className="text-xs font-extrabold theme-text-primary">1. Satellite Data</h4>
            <p className="text-[10px] theme-text-muted">INSAT-3D, ERA5 Reanalysis, Sentinel-2 NDVI</p>
          </div>

          <div className="hidden md:flex justify-center text-emerald-400 font-black">→</div>

          <div className="theme-bg-input border theme-border rounded-2xl p-4 text-center space-y-2">
            <Radio className="w-8 h-8 text-cyan-400 mx-auto" />
            <h4 className="text-xs font-extrabold theme-text-primary">2. Ground Gauges</h4>
            <p className="text-[10px] theme-text-muted">IMD AWS Telemetry & IoT Moisture Sensors</p>
          </div>

          <div className="hidden md:flex justify-center text-cyan-400 font-black">→</div>

          <div className="theme-bg-input border theme-border rounded-2xl p-4 text-center space-y-2">
            <Cpu className="w-8 h-8 text-amber-400 mx-auto" />
            <h4 className="text-xs font-extrabold theme-text-primary">3. Physics AI Model</h4>
            <p className="text-[10px] theme-text-muted">Spatial Downscaling & Break Probability Engine</p>
          </div>

        </div>
      </div>
    </div>
  );
};
