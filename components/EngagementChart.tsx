'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Card, CardHeader, CardTitle, CardContent } from './ui-card';

const EngagementChartInner = dynamic(() => import('./EngagementChartInner'), { 
  ssr: false,
  loading: () => <div className="h-64 flex items-center justify-center text-slate-500">Loading charts...</div>
});

export const EngagementChart = () => (
  <Card className="col-span-2">
    <CardHeader>
      <CardTitle>Engagement Growth</CardTitle>
    </CardHeader>
    <CardContent className="h-64">
      <EngagementChartInner />
    </CardContent>
  </Card>
);
