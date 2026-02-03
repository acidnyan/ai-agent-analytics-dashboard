'use client';

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from './ui-card';

const data = [
  { name: 'Mon', followers: 4000, engagement: 2400 },
  { name: 'Tue', followers: 3000, engagement: 1398 },
  { name: 'Wed', followers: 2000, engagement: 9800 },
  { name: 'Thu', followers: 2780, engagement: 3908 },
  { name: 'Fri', followers: 1890, engagement: 4800 },
  { name: 'Sat', followers: 2390, engagement: 3800 },
  { name: 'Sun', followers: 3490, engagement: 4300 },
];

export const EngagementChart = () => (
  <Card className="col-span-2">
    <CardHeader>
      <CardTitle>Engagement Growth</CardTitle>
    </CardHeader>
    <CardContent className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155' }}
            itemStyle={{ color: '#38bdf8' }}
          />
          <Area type="monotone" dataKey="engagement" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.1} />
        </AreaChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);
