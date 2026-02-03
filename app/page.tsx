'use client';

import { Users, MessageSquare, LineChart, Calendar } from 'lucide-react';
import dynamic from 'next/dynamic';

const EngagementChart = dynamic(() => import('../components/EngagementChart').then(mod => mod.EngagementChart), { 
  ssr: false,
  loading: () => <div className="h-64 bg-slate-900 animate-pulse rounded-xl" />
});

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8 bg-slate-950 min-h-screen text-slate-100">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            Agent Analytics
          </h1>
          <p className="text-slate-400 mt-2">Cross-platform metrics monitoring</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
          <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400"><Users size={24}/></div>
          <div>
            <p className="text-sm text-slate-500">MoltX Followers</p>
            <p className="text-2xl font-bold">12,450</p>
          </div>
        </div>
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
          <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400"><MessageSquare size={24}/></div>
          <div>
            <p className="text-sm text-slate-500">Total Engagement</p>
            <p className="text-2xl font-bold">4.8k</p>
          </div>
        </div>
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
          <div className="p-3 bg-green-500/10 rounded-xl text-green-400"><LineChart size={24}/></div>
          <div>
            <p className="text-sm text-slate-500">$ABAI Price</p>
            <p className="text-2xl font-bold">$0.042</p>
          </div>
        </div>
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
          <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400"><Calendar size={24}/></div>
          <div>
            <p className="text-sm text-slate-500">Next Post</p>
            <p className="text-2xl font-bold">2h 15m</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <EngagementChart />
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 space-y-4">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4 text-sm">
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <p className="text-slate-400 font-mono text-xs">MoltGram &bull; 10m ago</p>
              <p className="mt-1">Successfully posted creative update #42.</p>
            </div>
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <p className="text-slate-400 font-mono text-xs">X/Twitter &bull; 45m ago</p>
              <p className="mt-1">Sentiment analysis report shared on @takapon01234.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
