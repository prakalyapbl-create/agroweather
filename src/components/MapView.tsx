import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { VILLAGE_MAP_POINTS } from '../data/mockData';
import type { VillageMapData } from '../types';
import {
  MapPin,
  Filter,
  ArrowRight
} from 'lucide-react';

export const MapView: React.FC = () => {
  const { setLocation, setActivePage, setSelectedCrop } = useApp();

  const [selectedVillagePoint, setSelectedVillagePoint] = useState<VillageMapData | null>(
    VILLAGE_MAP_POINTS[0]
  );
  const [filterAlert, setFilterAlert] = useState<'all' | 'green' | 'yellow' | 'orange' | 'red'>('all');

  const filteredPoints = VILLAGE_MAP_POINTS.filter((p) => {
    if (filterAlert === 'all') return true;
    return p.alertLevel === filterAlert;
  });

  const markerColors: Record<string, { bg: string; ring: string; label: string }> = {
    green: { bg: 'bg-emerald-500', ring: 'ring-emerald-500/40', label: 'Normal / Active' },
    yellow: { bg: 'bg-amber-400', ring: 'ring-amber-400/40', label: 'Watch / Onset Expected' },
    orange: { bg: 'bg-orange-500', ring: 'ring-orange-500/40', label: 'Moderate Risk' },
    red: { bg: 'bg-rose-500', ring: 'ring-rose-500/40', label: 'High Dry Spell Risk' },
  };

  const handleSelectVillage = (point: VillageMapData) => {
    setSelectedVillagePoint(point);
    setLocation({
      district: point.district,
      block: point.block,
      village: point.village,
    });
  };

  return (
    <div className="space-y-6 py-4">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-2 shadow-xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-2">
          <MapPin className="w-4 h-4" />
          <span>INTERACTIVE REGIONAL RISK MAP</span>
        </div>
        <h1 className="text-3xl font-black text-white">
          Tamil Nadu Village Monsoon Map
        </h1>
        <p className="text-xs text-slate-400">
          Hyperlocal monitoring across Thanjavur district blocks. Click any village marker to inspect live status.
        </p>
      </div>

      {/* Map Controls & Legend */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
        
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="text-xs font-bold text-slate-300">Filter Risk Level:</span>
          
          {(['all', 'green', 'yellow', 'orange', 'red'] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => setFilterAlert(lvl)}
              className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition-all ${
                filterAlert === lvl
                  ? 'bg-emerald-500 text-slate-950 shadow'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span>Normal</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span>Onset Expected</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-orange-500" />
            <span>Moderate Break</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500" />
            <span>Severe Dry Spell</span>
          </div>
        </div>

      </div>

      {/* MAP CANVAS & DETAIL POPUP */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 bg-slate-950 border border-slate-800 rounded-3xl p-6 relative min-h-[480px] overflow-hidden shadow-2xl flex flex-col justify-between">
          
          <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

          <div className="relative z-10 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-800 inline-block self-start">
            <span className="text-xs font-extrabold text-emerald-400">
              Thanjavur & Surrounding Blocks Grid
            </span>
          </div>

          <div className="relative z-10 my-auto h-96 w-full flex items-center justify-center">
            
            <svg className="absolute w-full h-full opacity-20 text-slate-600" viewBox="0 0 500 400">
              <path
                d="M 50 150 Q 150 50 300 80 T 450 200 T 350 350 T 150 320 Z"
                fill="currentColor"
                stroke="#64748b"
                strokeWidth="2"
              />
            </svg>

            <div className="relative w-full h-full max-w-lg mx-auto">
              {filteredPoints.map((point, index) => {
                const colorConfig = markerColors[point.alertLevel];
                const isSelected = selectedVillagePoint?.id === point.id;

                const posX = 20 + (index % 3) * 32 + (index * 7) % 20;
                const posY = 15 + Math.floor(index / 3) * 35 + (index * 5) % 15;

                return (
                  <button
                    key={point.id}
                    onClick={() => handleSelectVillage(point)}
                    style={{ left: `${posX}%`, top: `${posY}%` }}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all z-20 ${
                      isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                    }`}
                  >
                    <div className="relative flex flex-col items-center">
                      <span
                        className={`w-6 h-6 rounded-full ${colorConfig.bg} ring-4 ${colorConfig.ring} flex items-center justify-center shadow-lg text-[10px] font-black text-slate-950`}
                      >
                        📍
                      </span>
                      <span className="mt-1 px-2 py-0.5 rounded bg-slate-900/90 text-white font-bold text-[10px] whitespace-nowrap border border-slate-800 shadow">
                        {point.village}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          <div className="relative z-10 text-[11px] text-slate-500 text-center">
            Click any village marker above to open prediction card.
          </div>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6 flex flex-col justify-between">
          
          {selectedVillagePoint ? (
            <div className="space-y-6">
              
              <div className="border-b border-slate-800 pb-4 flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                    Village Inspector
                  </span>
                  <h2 className="text-2xl font-black text-white">
                    {selectedVillagePoint.village}
                  </h2>
                  <p className="text-xs text-slate-400">
                    {selectedVillagePoint.block} Block, {selectedVillagePoint.district}
                  </p>
                </div>

                <span className={`px-3 py-1 rounded-full text-xs font-black capitalize ${markerColors[selectedVillagePoint.alertLevel].bg} text-slate-950`}>
                  {selectedVillagePoint.alertLevel} Risk
                </span>
              </div>

              <div className="space-y-3">
                <div className="bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/60 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Monsoon Status</span>
                  <span className="font-extrabold text-white uppercase">{selectedVillagePoint.status.replace('_', ' ')}</span>
                </div>

                <div className="bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/60 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Rainfall Probability</span>
                  <span className="font-extrabold text-emerald-400">{selectedVillagePoint.rainfallProbability}%</span>
                </div>

                <div className="bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/60 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Break Risk Level</span>
                  <span className="font-extrabold text-amber-400">{selectedVillagePoint.breakRisk}</span>
                </div>

                <div className="bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/60 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Soil Moisture</span>
                  <span className="font-extrabold text-cyan-400">{selectedVillagePoint.soilMoisture}%</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-300">Main Crops Cultivated:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedVillagePoint.crops.map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setSelectedCrop(c);
                        setActivePage('advisory');
                      }}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 text-xs font-bold text-emerald-300 border border-slate-700 hover:border-emerald-500"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActivePage('dashboard')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-black text-xs shadow-lg hover:from-emerald-400 hover:to-teal-500 flex items-center justify-center space-x-2"
              >
                <span>View Full Village Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          ) : (
            <div className="text-center py-12 text-slate-500 text-xs">
              Select a village pin on the map to view data.
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
