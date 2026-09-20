import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { OFFICER_VILLAGE_RECORDS } from '../data/mockData';
import type { OfficerVillageRecord } from '../types';
import {
  ShieldCheck,
  Search,
  Filter,
  Send,
  ArrowRight
} from 'lucide-react';

export const OfficerDashboard: React.FC = () => {
  const { setLocation, setActivePage } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [broadcastSent, setBroadcastSent] = useState(false);

  const filteredRecords = OFFICER_VILLAGE_RECORDS.filter((rec) => {
    const matchesSearch =
      rec.village.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.block.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.district.toLowerCase().includes(searchTerm.toLowerCase());

    if (statusFilter === 'all') return matchesSearch;
    return matchesSearch && rec.status === statusFilter;
  });

  const totalVillages = OFFICER_VILLAGE_RECORDS.length;
  const onsetCount = OFFICER_VILLAGE_RECORDS.filter((r) => r.status === 'onset_expected').length;
  const breakRiskCount = OFFICER_VILLAGE_RECORDS.filter((r) => r.status === 'break_likely' || r.status === 'break_ongoing').length;
  const irrigationNeededCount = OFFICER_VILLAGE_RECORDS.filter((r) => r.irrigationNeeded).length;

  const handleInspectVillage = (rec: OfficerVillageRecord) => {
    setLocation({
      district: rec.district,
      block: rec.block,
      village: rec.village,
    });
    setActivePage('dashboard');
  };

  const handleBroadcastAlert = () => {
    setBroadcastSent(true);
    setTimeout(() => setBroadcastSent(false), 3000);
  };

  return (
    <div className="space-y-8 py-4">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>AGRICULTURAL OFFICER PORTAL</span>
            </div>
            <h1 className="text-3xl font-black text-white">
              Rural Weather Monitoring
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Block & Village risk monitoring, farmer population outreach, and emergency alert distribution.
            </p>
          </div>

          <button
            onClick={handleBroadcastAlert}
            className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg"
          >
            <Send className="w-4 h-4" />
            <span>{broadcastSent ? '✓ Advisory Alert Broadcasted!' : 'Broadcast Advisory SMS'}</span>
          </button>
        </div>
      </div>

      {/* OVERVIEW STATS CARDS GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2 shadow-xl">
          <p className="text-[11px] font-bold text-slate-400 uppercase">Monitored Villages</p>
          <p className="text-3xl font-black text-white">{totalVillages * 50}</p>
          <span className="text-[10px] text-emerald-400 font-semibold">100% Data Grid Active</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2 shadow-xl">
          <p className="text-[11px] font-bold text-slate-400 uppercase">Onset Expected</p>
          <p className="text-3xl font-black text-emerald-400">{onsetCount * 35}</p>
          <span className="text-[10px] text-slate-400 font-semibold">Preparing for sowing</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2 shadow-xl">
          <p className="text-[11px] font-bold text-slate-400 uppercase">Under Break Risk</p>
          <p className="text-3xl font-black text-amber-400">{breakRiskCount * 22}</p>
          <span className="text-[10px] text-amber-300 font-semibold">Requires soil watch</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2 shadow-xl">
          <p className="text-[11px] font-bold text-slate-400 uppercase">Irrigation Attention</p>
          <p className="text-3xl font-black text-rose-400">{irrigationNeededCount * 14}</p>
          <span className="text-[10px] text-rose-300 font-semibold">Canal release flagged</span>
        </div>

      </div>

      {/* VILLAGE MONITORING TABLE & SEARCH */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 shadow-xl">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search village or block..."
              className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white font-semibold focus:outline-none"
            >
              <option value="all">All Statuses</option>
              <option value="onset_expected">Onset Expected</option>
              <option value="active_monsoon">Active Monsoon</option>
              <option value="break_likely">Break Likely</option>
              <option value="break_ongoing">Break Ongoing</option>
            </select>
          </div>

        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-4">Village / Location</th>
                <th className="py-3 px-4">Monsoon Status</th>
                <th className="py-3 px-4">Rainfall Prob</th>
                <th className="py-3 px-4">Break Risk</th>
                <th className="py-3 px-4">Soil Moisture</th>
                <th className="py-3 px-4">Farmers</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-xs">
              {filteredRecords.map((rec) => (
                <tr key={rec.id} className="hover:bg-slate-800/40 transition-colors">
                  
                  <td className="py-3.5 px-4 font-bold text-white">
                    {rec.village}
                    <span className="block text-[10px] text-slate-400 font-normal">
                      {rec.block}, {rec.district}
                    </span>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase bg-slate-800 text-emerald-400 border border-slate-700">
                      {rec.status.replace('_', ' ')}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 font-black text-emerald-400">
                    {rec.rainfallProbability}%
                  </td>

                  <td className="py-3.5 px-4 font-bold text-amber-400">
                    {rec.breakRisk}
                  </td>

                  <td className="py-3.5 px-4 font-bold text-cyan-400">
                    {rec.soilMoisture}%
                  </td>

                  <td className="py-3.5 px-4 text-slate-300 font-semibold">
                    {rec.farmersCount}
                  </td>

                  <td className="py-3.5 px-4">
                    <button
                      onClick={() => handleInspectVillage(rec)}
                      className="px-3 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 text-[11px] font-bold border border-emerald-500/30 hover:bg-emerald-500/30 flex items-center space-x-1"
                    >
                      <span>Inspect</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};
