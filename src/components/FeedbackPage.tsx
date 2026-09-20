import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  MessageSquarePlus,
  CloudRain,
  Layers,
  Camera,
  CheckCircle2,
  Users,
  Sparkles
} from 'lucide-react';

export const FeedbackPage: React.FC = () => {
  const { location, feedbackList, addFeedback, t } = useApp();

  const [didItRain, setDidItRain] = useState<'Yes' | 'No' | 'Light Rain' | 'Moderate Rain' | 'Heavy Rain'>('Moderate Rain');
  const [soilCondition, setSoilCondition] = useState<'Dry' | 'Normal' | 'Wet' | 'Waterlogged'>('Wet');
  const [comment, setComment] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addFeedback({
      village: location.village,
      block: location.block,
      district: location.district,
      didItRain,
      soilCondition,
      comment: comment || 'Field observation logged.',
      hasPhoto,
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setComment('');
    }, 4000);
  };

  return (
    <div className="space-y-8 py-4">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-2 shadow-xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-2">
          <MessageSquarePlus className="w-4 h-4" />
          <span>FARMER GROUND-TRUTH NETWORK</span>
        </div>
        <h1 className="text-3xl font-black text-white">
          {t('feedbackTitle')}
        </h1>
        <p className="text-xs text-slate-400">
          Community observations calibrate AI satellite models to ensure hyper-accurate local forecasts.
        </p>
      </div>

      {/* Form & Info Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Form */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h2 className="text-xl font-extrabold text-white flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span>Log Today's Field Observations</span>
            </h2>
            <span className="text-xs text-slate-400 font-semibold">
              Location: {location.village}
            </span>
          </div>

          {submitted ? (
            <div className="bg-emerald-500/15 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-lg font-black text-white">
                {t('feedbackSuccess')}
              </h3>
              <p className="text-xs text-slate-300">
                Your report has been stored in local database state and sent to model calibration.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-300 flex items-center space-x-2">
                  <CloudRain className="w-4 h-4 text-cyan-400" />
                  <span>{t('didItRainToday')}</span>
                </label>

                <div className="flex flex-wrap gap-2">
                  {(['Yes', 'No', 'Light Rain', 'Moderate Rain', 'Heavy Rain'] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setDidItRain(opt)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        didItRain === opt
                          ? 'bg-emerald-500 text-slate-950 font-black shadow-lg shadow-emerald-500/20'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-300 flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>{t('soilCondition')}</span>
                </label>

                <div className="flex flex-wrap gap-2">
                  {(['Dry', 'Normal', 'Wet', 'Waterlogged'] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSoilCondition(opt)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        soilCondition === opt
                          ? 'bg-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/20'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 flex items-center space-x-2">
                  <Camera className="w-4 h-4 text-purple-400" />
                  <span>Field Photo (Optional Mock)</span>
                </label>
                <div
                  onClick={() => setHasPhoto(!hasPhoto)}
                  className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-colors ${
                    hasPhoto ? 'border-emerald-500 bg-emerald-500/10' : 'border-slate-700 hover:border-slate-600 bg-slate-800/40'
                  }`}
                >
                  <p className="text-xs font-bold text-slate-300">
                    {hasPhoto ? '✓ Field Photo Attached (Mock Photo Uploaded)' : 'Click to attach field photo of soil/crops'}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">
                  Additional Field Notes / Comments
                </label>
                <textarea
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="e.g. Drizzle started at 3 PM, water accumulating near bunds..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-500 transition-all"
              >
                {t('submitFeedback')}
              </button>

            </form>
          )}

        </div>

        {/* Community Observations History */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <h3 className="text-lg font-extrabold text-white flex items-center space-x-2">
            <Users className="w-5 h-5 text-teal-400" />
            <span>{t('pastObservations')}</span>
          </h3>

          <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
            {feedbackList.map((item) => (
              <div key={item.id} className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span className="font-bold text-emerald-400">{item.village}</span>
                  <span>{item.date}</span>
                </div>

                <div className="flex items-center space-x-2 font-bold text-white">
                  <span>Rain: <strong className="text-cyan-400">{item.didItRain}</strong></span>
                  <span>•</span>
                  <span>Soil: <strong className="text-amber-400">{item.soilCondition}</strong></span>
                </div>

                <p className="text-slate-300 italic">{item.comment}</p>

                {item.hasPhoto && (
                  <span className="inline-block text-[10px] text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                    📷 Photo Attached
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
