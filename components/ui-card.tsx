import React from 'react';

export const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-sm ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6 pb-2 border-b border-slate-800/10 font-bold text-lg">
    {children}
  </div>
);

export const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-white">
    {children}
  </h3>
);

export const CardContent = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);
